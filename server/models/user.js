const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
          true,
          'Please provide a title.'
        ]
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [
            true,
            'Please provide a username.'
        ],
        minlength: [
            2,
            'Must be atleast 2 characters.'
        ],
        unique: true
    },
    email: {
        type: String,
        required: [
            true,
            'Please provide an email address.'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [
            true,
            'Please provide a password.'
        ],
        minlength: [
            6,
            'Password must be atleast 6 characters.'
        ],
        unique: true
    },
    tasks: [TaskSchema]
}, {timestamps: true});

mongoose.model('User', UserSchema);
// mongoose.model('Task', TaskSchema);