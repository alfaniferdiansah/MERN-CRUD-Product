const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:root@127.0.0.1:27017/penjualan?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('koneksi mongodb dengan mongoose success'))

module.exports = db