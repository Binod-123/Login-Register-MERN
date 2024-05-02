import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Server is connected to db');
}).catch(err => console.log(err));
const app = express();

// Define a route handler for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000k');
});
