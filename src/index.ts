import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";

dotenv.config();

// CREATE A SERVER

const app = express();
app.use(bodyParser.json());

app.use('/api', require("./routes/routes"));

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})