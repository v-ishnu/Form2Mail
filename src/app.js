;import express from "express"
;import axios from "axios"
// ;import { marked } from "marked";
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



// ;app.get("/", async (req,res)=>{
//     // res.send({status: "Started"})
//     try {
//         // URL to the raw README.md file on GitHub
//         const readmeUrl = 'https://raw.githubusercontent.com/v-ishnu/Form2Mail/refs/heads/v0.1/README.md';
//         // Fetch the README.md content
//         const response = await axios.get(readmeUrl);
//         const markdownContent = response.data;

//         // Convert markdown to HTML
//         const htmlContent = marked.parse(markdownContent);

//         // Create a basic HTML page with styles
//         const fullHtml = `
//             <!DOCTYPE html>
//             <html>
//             <head>
//                 <title>Project README</title>
//                 <style>
//                     body {
//                         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//                         line-height: 1.6;
//                         max-width: 800px;
//                         margin: 0 auto;
//                         padding: 20px;
//                         color: #24292e;
//                     }
//                     pre {
//                         background-color: #f6f8fa;
//                         padding: 16px;
//                         border-radius: 6px;
//                         overflow: auto;
//                     }
//                     code {
//                         font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
//                     }
//                     img {
//                         max-width: 100%;
//                     }
//                     a {
//                         color: #0366d6;
//                         text-decoration: none;
//                     }
//                     a:hover {
//                         text-decoration: underline;
//                     }
//                 </style>
//                 <meta name="viewport" content="width=device-width, initial-scale=1">
//             </head>
//             <body>
//                 ${htmlContent}
//             </body>
//             </html>
//         `;

//         res.send(fullHtml);
//     } catch (error) {
//         console.error('Error fetching README:', error);
//         res.status(500).send(`
//             <h1>Error Loading README</h1>
//             <p>Could not load the README file from GitHub.</p>
//             <p>${error.message}</p>
//         `);
//     }
// })

app.get("/", (req, res) => {
    res.render('landing-page', {
        title: "My Custom Page",
        status: "Running",
        features: ["Fast", "Secure", "Reliable"]
    });
});

;app.use('/api/v.01',formRoutes)


export default app;
