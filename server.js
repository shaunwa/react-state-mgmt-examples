import express from 'express';

const app = express();
app.use(express.json());

let count = 0;

app.get('/count', (req, res) => {
    res.json({ count });
});

app.put('/count/increment', (req, res) => {
    const { amount } = req.body;
    count += amount;
    res.json({ count });
});

app.put('/count/reset', (req, res) => {
    count = 0;
    res.json({ count });
});

app.put('/count', (req, res) => {
    const { count: newCount } = req.body;
    count = newCount;
    res.sendStatus(200);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});