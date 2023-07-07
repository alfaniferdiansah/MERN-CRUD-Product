const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    nama:{
        type: String,
        required: true
    },
    harga:{
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
    stock:{
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    }
})

module.exports = mongoose.model('Products', ProductSchema)