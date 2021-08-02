import express from 'express';

const port = 3000;
const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
