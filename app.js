const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const AppRouter = require('./routes/AppRouter')
const app = express()

const PORT = process.env.PORT || 3004

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client', 'build')))


// app.get('/', (req, res) => res.json({ message: 'Chef - Server Works' }))  // taken out - for deployement
//below order is a must for deployment
app.use('/api', AppRouter)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
