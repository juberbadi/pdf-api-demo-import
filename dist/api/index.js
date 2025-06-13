console.log('new log available');
export default function handler(req, res) {
    res.status(200).json({ message: "Main API /" });
}
