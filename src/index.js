import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path : './env'
})

connectDB()
.them(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
    app.on("Error",(error) => {
        console.log("Error : ", error)
        throw error
    })
})
.catch((err) => {
    console.log('MONGODB connection is failed!!!', err)
})