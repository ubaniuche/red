import { Client } from "pg";
import dbConfig from "../../../config/database";

const client = new Client(dbConfig)

export function dbConnect() {
    client.connect((err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log("Connected to database")
    })
}

export function dbDisconnect() {
    client.end((err) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log("Disconnected from database")
    })
}