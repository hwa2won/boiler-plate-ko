const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        // space가 포함된 String이 입력되면 trim이 공백 제거
        unique : 1
        // 똑같은 이메일은 사용하지 못하게
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        //token 사용기한
        type : Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}