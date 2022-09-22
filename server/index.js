const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {addNote} = require('./controller')

app.post('/api/note', addNote)

app.listen(4747, () => console.log(`Take us to warp 4747!`))