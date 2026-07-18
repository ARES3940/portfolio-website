const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "Taser Gun",
    description:
      "A high-voltage pulse generator built from scratch using capacitor discharge circuits. Explored power electronics and custom PCB design.",
    tech: ["Arduino", "C++", "Electronics", "PCB Design"],
    github: "https://github.com/ARES3940",
    demo: "#",
  },
  {
    id: 2,
    title: "Air-Ink",
    description:
      "A creative project converting air pollution particulates into usable ink, inspired by the MIT Air-Ink initiative. Hardware prototype with ESP-based control.",
    tech: ["ESP8266", "Arduino", "IoT", "Prototyping"],
    github: "https://github.com/ARES3940",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This portfolio — built with React + Vite on the frontend and Express on the backend. Fully responsive with a modern dark/teal design.",
    tech: ["React", "Vite", "Express", "Node.js"],
    github: "https://github.com/ARES3940",
    demo: "#",
  },
];

app.get("/", (req, res) => {
  res.send("Ahmed Tashin's Portfolio API is running ✅");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Log submission (replace with nodemailer / DB logic as needed)
  console.log("📩 New contact form submission:", { name, email, message });

  res.json({ message: "Thanks for reaching out! I'll get back to you soon." });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
