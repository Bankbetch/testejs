const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const user= require('./schema/user.schema')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('./server')
app.use(cors())

app.get('/users/:id', (req, res) => {
    user.findOne({ user: req.params.id }).then(doc => {
        console.log(doc)
        if (doc !== null ) {
            res.json({ data: doc})
        } else {
            res.json({ status: false })
        }
})
})
app.listen(4001, () => {
    console.log("Server is listening on port 4001")
})
