const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5000;

// Enable CORS for specified origins
app.use(cors({
  origin: [
    'https://www.connectingdotserp.com',
    'http://localhost:5000',
    'http://localhost:3999',
    'https://qhvpqmhj-3999.inc1.devtunnels.ms',
    'https://qhvpqmhj-5000.inc1.devtunnels.ms',
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// MongoDB connection
mongoose.connect("mongodb+srv://connectingerp1:connecting@connectingcluster.6ifho.mongodb.net/dataconnecting", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Serve static files from the build directory
app.use(express.static(path.resolve(__dirname, "build")));

// Function to serve index.html with dynamic placeholders replaced
const servePageWithPlaceholders = (res, title, description) => {
  const filePath = path.resolve(__dirname, "build", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading HTML file:", err);
      return res.status(500).send("Server Error");
    }

    // Replace title and description placeholders with actual values
    data = data.replace(/{{title}}/g, title);
    data = data.replace(/{{description}}/g, description);

    res.send(data);
  });
};

// Route for the homepage
app.get("/", (req, res) => {
  servePageWithPlaceholders(
    res,
    "Connecting Dots ERP - Home",
    "Welcome to Connecting Dots ERP. We offer SAP FICO and other ERP courses to boost your career in finance and technology."
  );
});

// Route for SAP FICO course in Pune
app.get("/sap-fico-course-in-pune", (req, res) => {
  servePageWithPlaceholders(
    res,
    "SAP FICO Training in Pune | Connecting Dots ERP",
    "Join our SAP FICO course in Pune to gain expertise in Financial Accounting and Controlling and enhance your career opportunities."
  );
});

// Fallback route for handling all other routes
app.get("*", (req, res) => {
  servePageWithPlaceholders(
    res,
    "Connecting Dots ERP",
    "Connecting Dots ERP offers comprehensive ERP training for career growth."
  );
});

// Start server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
