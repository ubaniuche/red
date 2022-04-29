import express, {json} from 'express'
import 'dotenv/config'
import routes from './api/v1/routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(json())

app.use('/api/v1', routes)

app.get('/', async (req, res) => {
    res.status(200).json({ status: 200, message: "Welcome to dreliver" })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));