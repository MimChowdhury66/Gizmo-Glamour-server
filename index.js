const express = require('express')
const app = express();
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000

// middleware
app.use(cors({
    origin: ["http://localhost:5173"]
}));
app.use(express.json());












app.get('/', (req, res) => {
    res.send('Gizmo-Glamour-running')
})

app.listen(port, () => {
    console.log(`Gizmo-Glamour-running on port ${port}`)
})