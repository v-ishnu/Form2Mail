;import express from "express"
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



// ✅ Serve static files from the correct public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// ✅ Serve landing.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'landing.html'));
});



;app.use('/api/v.01',formRoutes)


export default app;
