import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes';
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.SERVER_PORT;
app.get('/', (req, res) => {
	res.send('hello');
	console.log(Routes);
});
app.use(Routes);
app.listen(PORT, () => console.log(`application running on  ${PORT}`));
