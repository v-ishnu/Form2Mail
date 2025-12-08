import dotenv from "dotenv"
;import connectDB from "./src/config/config.db.js"
;import app from "./src/app.js"

;dotenv.config()
;connectDB()

;app.listen(process.env.PORT, ()=> {
    console.log(`✅ Server running on port ${process.env.PORT}`);
})
