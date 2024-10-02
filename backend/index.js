// directly import express for that first add   "type": "module", in pakage.json
import express from "express"
import { connectDb } from "./databaseConnection/db.js";
import router from './routes/routes.js'
import cors from 'cors';

const app = express();
const PORT = 8000;

// fronted and backend running from different different server
app.use(cors({origin:'http://localhost:3000'})); 

// Use built-in Express middleware for JSON parsing
app.use(express.json()); // Replaces bodyParser.json() //Global midderware used in every request it is a global to handle the request
// call the db
connectDb();
app.use('/',router);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
