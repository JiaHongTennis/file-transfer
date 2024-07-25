const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const nodeRouter = require('./routers/node')
const fs = require('fs')
const app = express()

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/nodeServer', nodeRouter)

app.use(morgan('combined', { stream: writerStream }))

app.listen(4561, () => {
  console.log('服务开启成功')
})
