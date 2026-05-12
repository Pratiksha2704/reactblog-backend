import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();   // database connection

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "Learn how useState works.",
     content: " What is a Hook?\n React Hooks allow you to use state and lifecycle features inside functional components.\n\n useState is used to manage state, while useEffect handles side effects like API calls.Hooks make code cleaner and reusable.\n\n\nHook Rules\n\nThere are 3 rules for hooks:\n\n\n1.Hooks can only be called inside React function components.\n2.Hooks can only be called at the top level of a component.\n3.Hooks cannot be conditional",
    image: "https://media.licdn.com/dms/image/v2/D5612AQEEEZz3k6HVMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720680476705?e=2147483647&v=beta&t=0tF4k1i8IW7m_rCl9OkAui79-gJtibc33hrI6a1UaUE",
  },
  {
    id: 2,
    title: "Node.js Event Loop",
    description: "Deep dive into async programming.",
    content: "What is Node.js Event Loop?\n\nThe Event Loop is the core mechanism in Node.js that allows it to perform non-blocking, asynchronous operations. Even though Node.js runs on a single thread, it can handle multiple tasks efficiently using the event loop.\n\nHow it works:\n\nWhen a task like a file read, API call, or database query is executed, Node.js sends it to the system and does not wait for it to finish. Instead, it continues executing other code. Once the task is completed, the callback is pushed to a queue and executed later by the event loop.\n\nPhases of Event Loop:\n\n1. Timers – Executes callbacks scheduled by setTimeout() and setInterval().\n2. I/O Callbacks – Handles most system-level callbacks.\n3. Idle/Prepare – Internal use by Node.js.\n4. Poll – Retrieves new I/O events.\n5. Check – Executes setImmediate() callbacks.\n6. Close Callbacks – Handles closing events like socket.on('close').\n\nWhy it is important:\n\nThe event loop makes Node.js highly scalable and efficient. It allows handling thousands of concurrent connections without creating multiple threads.\n\nConclusion:\n\nThe Node.js Event Loop is what makes asynchronous programming possible and efficient, allowing developers to build fast and scalable backend applications.",
    image: "https://files.codingninjas.in/article_images/event-loop-in-node-js-0-1636789190.webp"
    },
  {
    id: 3,
    title: "MongoDB Basics",
    description: "Start backend development with MongoDB.",
    content: "What is MongoDB?\n\nMongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It is widely used in modern web applications for handling large amounts of unstructured or semi-structured data.\n\nKey Features of MongoDB:\n\n1. Document-Oriented – Data is stored in documents instead of rows and tables.\n2. Schema-less – No fixed structure, so you can store different types of data easily.\n3. Scalable – Supports horizontal scaling using sharding.\n4. High Performance – Fast read and write operations.\n\nBasic Concepts:\n\n1. Database – A container for collections.\n2. Collection – A group of documents (similar to a table).\n3. Document – A single record stored in JSON format.\n4. Field – A key-value pair inside a document.\n\nExample Document:\n\n{\n  \"name\": \"John\",\n  \"age\": 25,\n  \"email\": \"john@example.com\"\n}\n\nCommon Operations:\n\n1. Insert – Add new data using insertOne() or insertMany().\n2. Find – Retrieve data using find().\n3. Update – Modify data using updateOne() or updateMany().\n4. Delete – Remove data using deleteOne() or deleteMany().\n\nWhy use MongoDB?\n\nMongoDB is easy to use, flexible, and works well with JavaScript-based applications like the MERN stack. It is ideal for projects that require fast development and scalability.\n\nConclusion:\n\nMongoDB is a powerful NoSQL database that simplifies data storage and helps build modern, scalable applications efficiently.",
    image:"https://fizalihsan.wordpress.com/wp-content/uploads/2013/11/mongodb-intro2.png",
  },
];

// Get all blogs

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// Get single blog
app.get("/api/blogs/:id", (req, res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  res.json(blog);
});

// Auth routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});