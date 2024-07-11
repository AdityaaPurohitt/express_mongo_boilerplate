const User = require('../config/models/user.model');
const bcrypt = require('bcrypt');

exports.registerUser = async (userData) => {
    try {
        const existingUser = await User.findOne({ Email: userData.email });
        if (existingUser) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(userData.Password, 10);

        const newUser = new User({
            FirstName: userData.FirstName,
            LastName: userData.LastName,
            Mobile: userData.Mobile,
            Email: userData.Email,
            Password: hashedPassword,
        });

        await newUser.save();
    } catch (error) {
        throw new Error(error.message);
    }
};
