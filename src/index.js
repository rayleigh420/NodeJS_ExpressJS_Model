import express from "express"
import initTestRoute from './routes/testRoute'
import initRoutes from './routes/routes'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

// app.use(cors())
// app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

initRoutes(app)

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})