const notes = require('./array.json')
let id = 2

module.exports = {
    addNote: (req, res) => {
        const {title, note} = req.body

        const newNote = {
            id,
            title,
            note
        }
        id++

        notes.push(newNote)
        console.log('you added a note!', newNote)

        res.status(200).send(notes)

    }
}