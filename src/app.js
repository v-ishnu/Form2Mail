;import express from "express"
;import axios from "axios"
;import compression from 'compression';
;import path from 'path'
;import { fileURLToPath } from 'url'
;import formRoutes from "./routes/formRoutes.js"

;const app = express()


// Get __dirname equivalent in ES Modules
;const __filename = fileURLToPath(import.meta.url)
;const __dirname = path.dirname(__filename)

// Set EJS as view engine
;app.set('view engine', 'ejs')
;app.set('views', path.join(__dirname, 'views'))


// Middleware (optional)
;app.set("trust proxy", true)
;app.use(express.json())
;app.use(express.static("public"))
;app.use(express.urlencoded({ extended: true }))


if (process.env.NODE_ENV === 'production') {
    app.use(compression());
}


// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handler for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});


// app.get("/", (req, res) => {
//     res.render('landing-page', {
//         title: "My Custom Page",
//         status: "Running",
//         features: ["Fast", "Secure", "Reliable"]
//     });
// });

;app.use('/api/v.01',formRoutes)


export default app;
