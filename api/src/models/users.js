const {Schema, model} = require('mongoose');

const usersSchema = new Schema({
    name: {
        type : String,
    },
    email:{
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 1
    },
    password: {
        type : String,
        required: true
    },
    active:{
        type: Boolean,
        default: true
    }
})

usersSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

usersSchema.set('toJSON', {
    virtuals: true
});

module.exports = model('User', usersSchema)