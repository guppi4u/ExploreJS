require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World on April 2024');
});

app.listen(port, () => {

    console.log(`App is running at ${port}`);
})