import express, {json} from 'express'
import 'dotenv/config'

const app = express()

app.use(json())

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    res.status(200).json({ status: 200, message: "Our node.js app works" })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));