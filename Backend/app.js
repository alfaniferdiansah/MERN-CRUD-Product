const express = require('express')
const cors = require('cors')
const RouterProduct = require('./routes/v2/productRoute')
const db = require('./config/v2/mongoose')

const app = express();
const port = 3010

app.use(cors())
app.use(express.json());
app.use(RouterProduct)

app.listen(port, () => {
    console.log(`the project run onto port ${port} has started`);
})