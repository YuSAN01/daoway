require('./tools/db')


var express = require('express')

var app = express()

app.use(express.static('public'))

const shopModel = require('./models/shop')
const shopMode2 = require('./serviceShop/serviceShop')
const shopMode3 = require('./serviceItem/serviceItem')

//接受请求读取数据
app.get('/getShopList',function (req,res) {
    shopModel.find({},function (err,data) {
        res.send({data:data})
    })
})
app.get('/getShopList2',function (req,res) {
    shopMode2.find({},function (err,data) {
        res.send({data:data})
    })
})
app.get('/getShopList3',function (req,res) {
    shopMode3.find({},function (err,data) {
        res.send({data:data})
        console.log(data);
    })
})


app.listen(3000,function () {
    console.log('服务器连接成功');
})
