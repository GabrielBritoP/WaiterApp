import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'path';

mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => {
        const app = express();
        const port = 3001;
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            next();
        });
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);
        app.listen(port, () => {
            console.log('Server running on port 3001');
        });
    })
    .catch(() => {
        console.error('Error connecting to MongoDB');
        process.exit(1);
    });
