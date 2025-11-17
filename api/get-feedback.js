export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { responses } = req.body;

  if (!responses || !Array.isArray(responses)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const apiKey = process.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `You are a friendly, optimistic, and encouraging social skills coach. Your goal is to help users build confidence. You are NEVER harsh, critical, or sarcastic. You always find something positive to say before offering constructive, actionable advice.

You will receive an array of 10 conversation scenarios and the user's response to each.

Your task is to analyze these responses and return a JSON object.`;

  const userQuery = `Please evaluate the following 10 conversation rounds and return your feedback in the specified JSON format.

Rounds:
${JSON.stringify(responses)}`;

  const schema = {
    "type": "OBJECT",
    "properties": {
      "overallScore": {
        "type": "NUMBER",
        "description": "A single, overall score from 1-10 on how playful, confident, and engaging the user was, as an average across all rounds."
      },
      "criteriaScores": {
        "type": "ARRAY",
        "items": {
          "type": "OBJECT",
          "properties": {
            "criterion": { "type": "STRING" },
            "score": { "type": "NUMBER" },
            "explanation": { "type": "STRING" }
          },
          "required": ["criterion", "score", "explanation"]
        }
      },
      "roundFeedback": {
        "type": "ARRAY",
        "items": {
          "type": "OBJECT",
          "properties": {
            "round": { "type": "NUMBER" },
            "whatYouDidWell": { "type": "STRING" },
            "thingsToLookOutFor": { "type": "STRING" },
            "idealResponses": {
              "type": "ARRAY",
              "items": { "type": "STRING" }
            }
          },
          "required": ["round", "whatYouDidWell", "thingsToLookOutFor", "idealResponses"]
        }
      },
      "finalSuggestions": { "type": "STRING" }
    },
    "required": ["overallScore", "criteriaScores", "roundFeedback", "finalSuggestions"]
  };

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
      const jsonText = result.candidates[0].content.parts[0].text;
      return res.status(200).json(JSON.parse(jsonText));
    } else {
      throw new Error("Invalid response structure from API.");
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
}