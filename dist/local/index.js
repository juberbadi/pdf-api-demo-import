import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Main API /" });
});
app.use((req, res) => {
    res.status(404).json({ error: "Main API - Route not found" });
});
app.listen(PORT, () => console.log(`Main server ready: http://localhost:${PORT}`));
