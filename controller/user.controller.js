
const userService = require('../service/user.service');

exports.registerUser = async (req, res) => {
    try {
        await userService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};