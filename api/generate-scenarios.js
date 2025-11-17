export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const systemPrompt = `You are a creative conversation coach who generates realistic, challenging texting scenarios for flirting practice. Your scenarios should be:
- Realistic messages someone might receive while texting
- A mix of teasing, challenging, playful, and slightly difficult situations
- Varied in tone and difficulty
- Short and conversational (1-2 sentences max)
- Suitable for practicing confident, playful responses
- Avoidant of clichés or overly generic prompts or em dashes
- Realistic as if sent by a real person, using natural lowercase and the occasional emoji

Generate exactly 10 unique scenarios.`;

  const userQuery = `Generate 10 fresh, varied texting scenarios for flirting practice. Include a mix of:
- Playful teasing
- Confidence tests
- Slightly awkward situations
- Flirty challenges
- Conversation starters

Return only a JSON array of 10 strings, nothing else.`;

  const schema = {
    "type": "ARRAY",
    "items": {
      "type": "STRING",
      "description": "A realistic texting scenario for flirting practice"
    }
  };

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
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