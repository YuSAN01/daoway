const  mongoose = require('mongoose')
const shopSchemaa = new mongoose.Schema({
    title:{type:String},
    orderCount:{type:Number},
    positiveRate:{type:String},
    imgUrl:{type:String}
})
module.exports = mongoose.model('services',shopSchemaa)