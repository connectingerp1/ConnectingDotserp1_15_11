// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');
// // const { renderToString } = require('react-dom/server');
// // const App = require('../src/App').default; // Adjust based on your export
// // const seoData = require('../src/seoData.json');


// // // Helper function to replace {city} placeholders with actual city values
// // const replacePlaceholders = (text, city) => {
// //   return text.replace(/\{city\}/g, city).replace(/\{city.toLowerCase\}/g, city.toLowerCase());
// // };

// // // SSR handler
// // const ssrHandler = (req, res) => {
// //   const pageId = req.path.split('/').pop(); // Get the pageId from the URL
// //   const city = req.query.city || 'defaultCity'; // Use 'defaultCity' if no city is passed
// //   const seo = seoData.pages[pageId] || seoData.pages['default']; // Fallback to default SEO data if not found

// //   // Read the base HTML template (the build index.html file)
// //   const filePath = path.resolve(__dirname, '../build/index.html');
// //   fs.readFile(filePath, 'utf8', (err, htmlData) => {
// //     if (err) {
// //       return res.status(500).send('An error occurred');
// //     }

// //     // Render the app to a string
// //     const reactApp = renderToString(<App />);

// //     // Inject SEO and rendered app HTML into the base template, replacing {city} placeholders
// //     const renderedHtml = htmlData
// //       .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
// //       .replace('<title></title>', `<title>${replacePlaceholders(seo.metaTitle, city)}</title>`)
// //       .replace(
// //         /<meta name="description".*\/>/,
// //         `<meta name="description" content="${replacePlaceholders(seo.metaDescription, city)}" />`
// //       )
// //       .replace(
// //         /<meta name="keywords".*\/>/,
// //         `<meta name="keywords" content="${replacePlaceholders(seo.metaKeywords, city)}" />`
// //       )
// //       .replace(
// //         /<meta name="robots".*\/>/,
// //         `<meta name="robots" content="${seo.robots}" />`
// //       )
// //       .replace(
// //         /<meta name="author".*\/>/,
// //         `<meta name="author" content="${seo.author}" />`
// //       )
// //       .replace(
// //         /<meta name="viewport".*\/>/,
// //         `<meta name="viewport" content="${seo.viewport}" />`
// //       )
// //       // Open Graph Tags
// //       .replace(
// //         /<meta property="og:title".*\/>/,
// //         `<meta property="og:title" content="${replacePlaceholders(seo.ogTags['og:title'], city)}" />`
// //       )
// //       .replace(
// //         /<meta property="og:description".*\/>/,
// //         `<meta property="og:description" content="${replacePlaceholders(seo.ogTags['og:description'], city)}" />`
// //       )
// //       .replace(
// //         /<meta property="og:url".*\/>/,
// //         `<meta property="og:url" content="${replacePlaceholders(seo.ogTags['og:url'], city)}" />`
// //       )
// //       // Twitter Tags
// //       .replace(
// //         /<meta name="twitter:title".*\/>/,
// //         `<meta name="twitter:title" content="${replacePlaceholders(seo.twitterTags['twitter:title'], city)}" />`
// //       )
// //       .replace(
// //         /<meta name="twitter:description".*\/>/,
// //         `<meta name="twitter:description" content="${replacePlaceholders(seo.twitterTags['twitter:description'], city)}" />`
// //       )
// //       // Schema Markup
// //       .replace(
// //         /<script type="application\/ld\+json">.*<\/script>/,
// //         `<script type="application/ld+json">${JSON.stringify(seo.schemaMarkup)}</script>`
// //       );

// //     // Send the final response with rendered HTML
// //     res.send(renderedHtml);
// //   });
// // };

// // // Create Express server
// // const app = express();

// // // Serve static files from the 'build' directory
// // app.use(express.static(path.resolve(__dirname, '../build')));

// // // Route handler for all GET requests, handled by SSR
// // app.get('*', ssrHandler);

// // // Start the server on port 5002
// // const PORT = 5002;
// // app.listen(PORT, () => {
// //   console.log(`SSR server is running on port ${PORT}`);
// // });

// const express = require('express');
// const path = require('path');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const fs = require('fs').promises; // Use promises API for async file operations
// const cors = require('cors');
// const app = express();

// // Serve static assets (like JS/CSS files)
// app.use(express.static(path.resolve(__dirname, 'build')));

// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: ['GET', 'POST'], // Allowed methods
//   credentials: true // Allow credentials (if needed)
// }));

// // Helper function to replace {city} placeholder with actual city
// const replacePlaceholders = (text, city) => {
//   return text
//     .replace(/\{city\}/g, city)
//     .replace(/\{city.toLowerCase\}/g, city.toLowerCase());
// };

// // Handle SSR for the root route or any dynamic routes
// app.get('/*', async (req, res) => {
//   console.log('SSR Request received for path:', req.path); // Log the path being requested
  
//   const appPath = path.resolve(__dirname, 'build', 'index.html');
  
//   // Get the pageId from the URL
//   const pageId = req.path.split('/').pop(); // or use another method to determine the pageId
//   console.log('Page ID:', pageId); // Log the pageId to ensure it's being parsed correctly

//   const city = req.query.city || 'defaultCity'; // You can pass the city via query params or any other method
//   console.log('City:', city); // Log the city (or default) to ensure it's being picked up

//   // console.log(`Page ID: ${pageId}, City: ${city}`); // Log the pageId and city

//   try {
//     // Fetch SEO data from the JSON file
//     const seoData = await fs.readFile(path.resolve(__dirname, 'src', 'SeoData.json'), 'utf8');
//     const seo = JSON.parse(seoData).pages[pageId] || JSON.parse(seoData).pages['default']; // Fallback to default SEO if not found
//     console.log(`SEO Data for Page ID ${pageId}:`, seo); // Log the fetched SEO data

//     const htmlData = await fs.readFile(appPath, 'utf8');
//     console.log('App Path:', appPath); // Log the appPath

//     // Import your React App component (path may vary based on your structure)
//     const App = require('./src/App').default;  // Adjust path to your main App component
    
//     // Render the React app to a string
//     let jsx;
//     try {
//       jsx = ReactDOMServer.renderToString(React.createElement(App));  // Use React.createElement for CommonJS
//       console.log('SSR JSX:', jsx); // Log the rendered JSX
//     } catch (renderError) {
//       console.error('Error rendering SSR:', renderError); // Log any SSR rendering errors
//     }

//     // Inject the rendered React component into the HTML template
//     const finalHtml = htmlData
//       .replace('<div id="root"></div>', `<div id="root">${jsx}</div>`)
//       .replace('<title></title>', `<title>${replacePlaceholders(seo.metaTitle, city)}</title>`)
//       .replace(
//         /<meta name="description".*\/>/,
//         `<meta name="description" content="${replacePlaceholders(seo.metaDescription, city)}" />`
//       )
//       .replace(
//         /<meta name="keywords".*\/>/,
//         `<meta name="keywords" content="${replacePlaceholders(seo.metaKeywords, city)}" />`
//       )
//       .replace(
//         /<meta name="robots".*\/>/,
//         `<meta name="robots" content="${seo.robots}" />`
//       )
//       .replace(
//         /<meta name="author".*\/>/,
//         `<meta name="author" content="${seo.author}" />`
//       )
//       .replace(
//         /<meta name="viewport".*\/>/,
//         `<meta name="viewport" content="${seo.viewport}" />`
//       )
//       // Open Graph Tags
//       .replace(
//         /<meta property="og:title".*\/>/,
//         `<meta property="og:title" content="${replacePlaceholders(seo.ogTags['og:title'], city)}" />`
//       )
//       .replace(
//         /<meta property="og:description".*\/>/,
//         `<meta property="og:description" content="${replacePlaceholders(seo.ogTags['og:description'], city)}" />`
//       )
//       .replace(
//         /<meta property="og:url".*\/>/,
//         `<meta property="og:url" content="${replacePlaceholders(seo.ogTags['og:url'], city)}" />`
//       )
//       // Twitter Tags
//       .replace(
//         /<meta name="twitter:title".*\/>/,
//         `<meta name="twitter:title" content="${replacePlaceholders(seo.twitterTags['twitter:title'], city)}" />`
//       )
//       .replace(
//         /<meta name="twitter:description".*\/>/,
//         `<meta name="twitter:description" content="${replacePlaceholders(seo.twitterTags['twitter:description'], city)}" />`
//       )
//       // Schema Markup
//       .replace(
//         /<script type="application\/ld\+json">.*<\/script>/,
//         `<script type="application/ld+json">${JSON.stringify(seo.schemaMarkup)}</script>`
//       );

//     console.log('Final HTML:', finalHtml); // Log the final HTML before sending the response

//     // Send the final response
//     res.send(finalHtml);
//   } catch (err) {
//     console.error('Error processing request', err); // Log any errors
//     res.status(500).send('An error occurred');
//   }
// });

// // Start the SSR server on a different port, e.g., 5002
// app.listen(5002, () => {
//   console.log('SSR server is running on port 5002');
// });
