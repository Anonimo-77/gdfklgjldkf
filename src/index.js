const express = require('express');
const app = express();
const path = require('path');
const ipp = require('ip');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.dyhvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB is connected'));

let ipSchema = new Schema({
    ip: String
})
let ipModel = model('ip', ipSchema);




app.get('/', async (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    console.log(ipp.address());
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(3000, () => {
    console.log('listening on port 3000	')
})