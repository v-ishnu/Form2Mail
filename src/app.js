;import express from "express"
;import formRoutes from "./routes/formRoutes.js"

;const app = express()

;app.set("trust proxy", true)
;app.use(express.json())
;app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));



;app.get("/",(req,res)=>{
    res.send({status: "Started"})
})


;app.use('/api/v.01',formRoutes)


export default app;
