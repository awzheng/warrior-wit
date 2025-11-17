# 🔥 WarriorWit

> **"Texting feels like a game. Why not practice it?"**

An AI-powered texting practice app designed to help University of Waterloo students (and beyond!) level up their conversation game. 
Built for awkward engineers who can debug code but freeze up when it's another human behind the screen 🫠
Yes I made this in November...

---

## 🎯 What is WarriorWit?

WarriorWit is a **safe, judgment-free practice space** where you can:
- Practice responding to realistic texting scenarios
- Get instant, AI-powered feedback on your responses
- Build confidence in casual conversation
- Learn what works (and what doesn't) before the stakes are real

No cringe screenshots. No awkward saved chats. Just you, AI feedback, and steady improvement.

---

## ✨ Features

- **🎮 10-Round Practice Sessions** - Each game gives you 10 completely unique scenarios to respond to
- **⏱️ 30-Second Timer** - Keeps you thinking fast, just like real texting
- **🤖 AI-Powered Feedback** - Powered by Google's Gemini 2.0, giving you detailed analysis on:
  - Overall confidence score
  - Breakdown by criteria (Humor, Playfulness, Confidence, etc.)
  - Round-by-round feedback with ideal response examples
- **🌙 Dark Mode** - Because let's be real, you're probably using this at 2 AM you sneaky little warrior.
- **🎨 Beautiful UI** - Built with Tailwind CSS v4 and shadcn-inspired components. Heck yeah!

---

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v4 (latest!)
- **AI:** Google Gemini 2.5 Flash API
- **Deployment:** Vercel
- **Icons:** Custom SVG components (Lucide-inspired)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- A Google Gemini API key ([Get one here](https://ai.google.dev/)). What are you waiting for? Students get this for free!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/warrior-wit.git
   cd warrior-wit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env.local` file in the root directory:
   ```bash
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` and start practicing! 🎉

---

## 🎓 Built for Waterloo Warriors

This app was created with University of Waterloo engineering students in mind - the brilliant minds who can solve differential equations but get nervous when someone texts "haha yeah."

**You're not alone.** Social skills are learnable, just like coding. WarriorWit is your personal training ground.

---

## 🔒 Privacy & Safety

- **All practice is private** - Your responses are only sent to the AI for feedback
- **No data storage** - Nothing is saved to any database
- **No screenshots** - Practice without fear of being exposed, and no more screenshots to their entire friend group
- **API keys are secure** - Your `.env.local` file is gitignored by default 😉

---

## 📦 Project Structure

```
warrior-wit/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind v4 theme configuration
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── .env.local           # Your API key (gitignored!)
├── .gitignore           # Keeps secrets safe
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

---

## 🤝 Contributing

Found a bug? Have an idea for improvement? Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 💬 Feedback & Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/warrior-wit/issues)
- **Questions:** Open a discussion or DM on Twitter

---

## 🎉 Acknowledgments

- Inspired by awkward Waterloo engineering students everywhere
- Built with ❤️ and caffeine
- Special thanks to Google's Gemini team for the API
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">

**Made with 💙 for the socially awkward engineers who are lowkey funny**

*Now stop reading and go practice!* 

</div>