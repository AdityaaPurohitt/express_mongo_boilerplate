require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.DB_Connection;

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
