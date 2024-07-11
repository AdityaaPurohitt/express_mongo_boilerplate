const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Mobile: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    ReferCode: String,
    OTP: { type: Number, default: 0 },
    Referral: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Balance: { type: Number, default: 0 },
    Bonus: { type: Number, default: 0 },
    LastLogin: { type: Date, default: Date.now },
    Created: { type: Date, default: Date.now },
    DeviceID: String,
    AccountStatus: { type: String, default: 'active' }
});

module.exports = mongoose.model('User', userSchema);
