// create a basic express api
import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

// cors
app.use(cors());

app.get('/', (req, res) => {
	res.send('this is response 1');
});
app.get('/a', (req, res) => {
	res.send('this is response 2');
});
app.get('/b', (req, res) => {
	res.send('this is response 3');
});
app.get('/c', (req, res) => {
	res.send('this is response 4');
});
app.get('/d', (req, res) => {
	res.send('this is response 5');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
