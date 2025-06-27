const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected ✅');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Stop server if DB connection fails
    }
};

module.exports = connectDB;
