require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../config/models/user.model');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        User.findById(decoded.userId)
            .then(user => {
                if (!user) {
                    return res.status(401).json({ message: 'User not found' });
                }
                req.currentUser = user;
                next();
            })
            .catch(err => {
                console.error('Error fetching user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            });
    } catch (err) {
        console.error('JWT verification failed:', err);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateJWT;
