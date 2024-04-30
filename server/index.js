import express from 'express';

const app = express();

// Define a route handler for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000k');
});
