import React, { useState, useEffect, useRef, useMemo } from 'react';

// --- ICONS (from lucide-react) ---
// We are defining them as components here to keep this a single file.

const Sun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Loader2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const CheckCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertTriangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const ChevronDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Terminal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const Lightbulb = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);


// --- CN UTILITY (for shadcn) ---
// This is a helper function to merge Tailwind classes, essential for shadcn components.
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- SHADCN/UI COMPONENT DEFINITIONS ---

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant || "default"],
        sizes[size || "default"],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
));

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
));

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
));

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const Accordion = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("border-b", className)} {...props} />
));

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </button>
));

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </div>
));

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => {
  const variants = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    info: "border-blue-500/50 text-blue-700 dark:border-blue-500 [&>svg]:text-blue-700",
  };
  return (
    <div
      ref={ref}
      className={cn("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4", variants[variant || "default"], className)}
      {...props}
    />
  );
});

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
));

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));

// --- CONSTANTS ---

const ROUND_TIME = 30; // 30 seconds per round

// Loading screen tips
const LOADING_TIPS = [
  "Pro tip: Confidence is more attractive than perfection.",
  "Remember: Humor is your secret weapon in any conversation.",
  "Quick tip: Ask questions to keep the conversation flowing.",
  "Did you know? Playful teasing shows confidence and interest.",
  "Reminder: Being genuine beats trying too hard every time.",
  "Fun fact: People remember how you made them feel, not what you said.",
  "Pro tip: A well-timed emoji can add personality to your message.",
  "Quick insight: Matching their energy shows you're paying attention.",
  "Remember: It's okay to take risks—that's how you grow!",
  "Tip: Compliments work best when they're specific and sincere.",
  "Keep in mind: A little mystery goes a long way in texting.",
  "Pro tip: Don't overthink it—spontaneity can be charming.",
  "Remember: Everyone feels nervous sometimes. That's normal!",
  "Quick tip: Self-deprecating humor shows confidence, not weakness.",
  "Did you know? Responding with a question keeps them engaged.",
];

// --- MAIN APP COMPONENT ---

export default function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'generating', 'playing', 'loading', 'results'
  const [currentRound, setCurrentRound] = useState(0);
  const [timer, setTimer] = useState(ROUND_TIME);
  const [userResponses, setUserResponses] = useState([]);
  const [geminiFeedback, setGeminiFeedback] = useState(null);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [currentResponse, setCurrentResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [scenarios, setScenarios] = useState([]);
  const [loadingTip, setLoadingTip] = useState("");

  const timerRef = useRef(null);

  // --- TIMER LOGIC ---
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState, currentRound]);

  useEffect(() => {
    if (timer === 0 && gameState === 'playing') {
      handleNextRound();
    }
  }, [timer, gameState]);

  // --- API CALL LOGIC ---
  useEffect(() => {
    if (gameState === 'loading') {
      fetchFeedback();
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'generating') {
      generateScenarios();
    }
  }, [gameState]);

  // --- GEMINI API HELPER ---

  /**
   * Implements exponential backoff for API retries.
   * @param {number} attempt - The current retry attempt number.
   */
  const backoff = (attempt) => new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));

  /**
   * Generates 10 fresh conversation scenarios using Gemini API.
   * @param {number} maxRetries - Maximum number of retries.
   * @returns {Promise<Array>} - Array of 10 scenario strings.
   */

  async function generateConversationScenarios(maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch('/api/generate-scenarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);
        if (attempt < maxRetries - 1) {
          await backoff(attempt);
        } else {
          throw new Error(`Failed to generate scenarios. Last error: ${error.message}`);
        }
      }
    }
  }

  async function getGeminiFeedback(responses, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch('/api/get-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ responses })
        });

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);
        if (attempt < maxRetries - 1) {
          await backoff(attempt);
        } else {
          throw new Error(`Failed to fetch feedback. Last error: ${error.message}`);
        }
      }
    }
  }
  
  async function generateScenarios() {
    try {
      setErrorMessage(null);
      setLoadingTip(LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)]);
      const newScenarios = await generateConversationScenarios();
      setScenarios(newScenarios);
      setGameState('playing');
    } catch (error) {
      console.error("Error generating scenarios:", error);
      setErrorMessage(error.message);
      setGameState('start');
    }
  }

  async function fetchFeedback() {
    try {
      setErrorMessage(null);
      setLoadingTip(LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)]);
      const feedback = await getGeminiFeedback(userResponses);
      setGeminiFeedback(feedback);
      setGameState('results');
    } catch (error) {
      console.error("Error fetching Gemini feedback:", error);
      setErrorMessage(error.message);
      setGameState('results');
    }
  }

  // --- GAME ACTIONS ---

  const handleStartGame = () => {
    setGameState('generating');
    setCurrentRound(0);
    setUserResponses([]);
    setGeminiFeedback(null);
    setTimer(ROUND_TIME);
    setCurrentResponse("");
    setErrorMessage(null);
  };

  const handleNextRound = () => {
    clearInterval(timerRef.current);

    const response = {
      scenario: scenarios[currentRound],
      response: currentResponse,
    };
    const newResponses = [...userResponses, response];
    setUserResponses(newResponses);

    if (currentRound < scenarios.length - 1) {
      setCurrentRound(currentRound + 1);
      setTimer(ROUND_TIME);
      setCurrentResponse("");
    } else {
      // End of game
      setGameState('loading');
    }
  };

  const handlePlayAgain = () => {
    handleStartGame();
  };

  // --- RENDER FUNCTIONS FOR EACH SCREEN ---

  const renderStartScreen = () => (
    <Card className="w-full max-w-md">
      <CardHeader className="items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          WarriorWit
        </h1>
        <CardDescription className="pt-2 text-base">
          "Texting feels like a game. Why not practice it?"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">
          Practice your flirting skills. Get instant, AI-powered feedback to build your confidence. No stakes, just improvement.
        </p>
        {errorMessage && (
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" onClick={handleStartGame}>
          Start
        </Button>
      </CardFooter>
    </Card>
  );

  const renderPlayingScreen = () => (
    <div className="flex flex-col h-full w-full max-w-lg">
      <div className="w-full space-y-2 mb-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{timer}s</span>
          <span>{currentRound + 1} of {scenarios.length}</span>
        </div>
        <Progress value={(timer / ROUND_TIME) * 100} />
      </div>
      
      <Card className="flex-grow flex flex-col">
        <CardContent className="flex-grow p-6">
          <p className="text-2xl font-semibold">
            {scenarios[currentRound]}
          </p>
        </CardContent>
      </Card>

      <div className="mt-4 flex flex-col space-y-2">
        <Textarea
          placeholder="Type your response..."
          value={currentResponse}
          onChange={(e) => setCurrentResponse(e.target.value)}
          className="min-h-[100px] text-base"
        />
        <Button onClick={handleNextRound} size="lg">
          Next
        </Button>
      </div>
    </div>
  );

  const renderLoadingScreen = (message) => (
    <div className="flex flex-col items-center justify-center text-center max-w-md space-y-6">
      <Loader2 className="w-12 h-12 animate-spin text-primary" />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{message}</h2>
        <p className="text-muted-foreground">This will only take a moment...</p>
      </div>
      
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-left">{loadingTip}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderResultsScreen = () => {
    if (errorMessage) {
      return (
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-destructive">An Error Occurred</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Failed to get feedback</AlertTitle>
              <AlertDescription className="break-all">
                {errorMessage}
                <br /><br />
                Please try playing again.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={handlePlayAgain}>
              Play Again
            </Button>
          </CardFooter>
        </Card>
      );
    }
    
    if (!geminiFeedback) {
      return renderLoadingScreen("Analyzing your responses...");
    }

    const { overallScore, criteriaScores, roundFeedback, finalSuggestions } = geminiFeedback;

    return (
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center">Your Feedback is Ready!</h1>

        {/* Overall Score */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Overall Score</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center">
              <span className="text-4xl font-bold">{overallScore.toFixed(1)}</span>
              <span className="text-xl text-muted-foreground self-end mb-4">/10</span>
            </div>
          </CardContent>
        </Card>

        {/* Criteria Scores */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteriaScores.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between font-semibold">
                  <span>{item.criterion}</span>
                  <span>{item.score}/10</span>
                </div>
                <Progress value={item.score * 10} />
                <p className="text-sm text-muted-foreground">{item.explanation}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Round-by-Round */}
        <Card>
          <CardHeader>
            <CardTitle>Round-by-Round Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {roundFeedback.map((round, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <span className="text-left">
                      <strong>Round {round.round}:</strong> {userResponses[index].scenario.substring(0, 40)}...
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-muted-foreground">Your Response:</h4>
                      <p className="italic">"{userResponses[index].response || "(No response)"}"</p>
                    </div>
                    
                    <div className="text-green-600 dark:text-green-400">
                      <h4 className="font-semibold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> What you did well:</h4>
                      <p>{round.whatYouDidWell}</p>
                    </div>
                    
                    <div className="text-orange-600 dark:text-orange-400">
                      <h4 className="font-semibold flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Things to look out for:</h4>
                      <p>{round.thingsToLookOutFor}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Ideal Responses:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {round.idealResponses.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Final Suggestions */}
        <Alert variant="info">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Final Suggestions</AlertTitle>
          <AlertDescription>
            {finalSuggestions}
          </AlertDescription>
        </Alert>

        {/* Footer Buttons */}
        <div className="flex gap-4">
          <Button variant="outline" onClick={handlePlayAgain} className="flex-1">
            Play Again
          </Button>
          <Button className="flex-1" onClick={() => console.log("Share results clicked (placeholder)")}>
            Share Results
          </Button>
        </div>
      </div>
    );
  };
  
  // --- MAIN RENDER ---

  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return renderStartScreen();
      case 'generating':
        return renderLoadingScreen("Imagining scenarios...");
      case 'playing':
        return renderPlayingScreen();
      case 'loading':
        return renderLoadingScreen("Getting feedback...");
      case 'results':
        return renderResultsScreen();
      default:
        return renderStartScreen();
    }
  };

  return (
    <div className={cn(darkMode ? "dark" : "", "bg-background text-foreground")}>
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 transition-colors duration-200">
        {renderContent()}
      </main>
    </div>
  );
}