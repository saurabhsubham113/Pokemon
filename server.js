const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(__dirname + '/build'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(__dirname + '/build/index.html');
    console.log(`server started on ${port}`)
})