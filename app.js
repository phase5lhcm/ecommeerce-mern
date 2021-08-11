import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
//import userByIdRoute from './routes/userByIdRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//db connection

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', (err) => {
    console.log(`DB connection error: ${err.message}`);
});
//middleware
app.use(morgan('dev'));
app.use(express.json());
//app.use(expressValidator()); <--- legacy syntax
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes middleware
app.use('/api/v1/user', userRoute);
//app.use('/api/v1/user', userByIdRoute);

app.get('/', (req, res) => {
    res.send('Get endpoint');
});
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
