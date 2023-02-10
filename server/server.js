import express from 'express'
import Gun from 'gun'
import cors from 'cors'


const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(Gun.serve)
app.get('/',(_, res) =>{
    res.status(200).send('> GEBUG: Solciety Node is live')
})

const server = app.listen(port, () => {
    console.log(`DEBUG: Solciety Node listening at http://localhost:${port}`)
})

Gun({web: server})
