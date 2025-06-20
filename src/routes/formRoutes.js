;import express from "express"
;import formSubmission from "../controller/formController.js"
;import verifyAccount from "../controller/verifyEmail.js"


const router = express.Router()
;router.post("/:email", formSubmission)
;router.get("/verify",verifyAccount);


export default router;
