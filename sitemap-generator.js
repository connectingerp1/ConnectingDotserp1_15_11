const fs = require('fs');
const path = require('path');
const { generateSlug } = require('./utils/slugHelper');

// Your sitemap generation logic here
 // Adjust this import based on your project structure

const city = 'your-default-city'; // Replace with your default city or dynamically obtain it

// Define all your routes here
const routes = [
  '/',
  `/${generateSlug("Data-science-course", city)}`,
  `/${generateSlug("Data-Analytics-course", city)}`,
  `/${generateSlug("Business-Analytics-course", city)}`,
  `/${generateSlug("chatGPT-course", city)}`,
  `/${generateSlug("Full-Stack-developer-course", city)}`,
  `/${generateSlug("Java-course", city)}`,
  `/${generateSlug("Mern-stack-course", city)}`,
  `/${generateSlug("Python-course", city)}`,
  `/${generateSlug("Salesforce-training", city)}`,
  `/${generateSlug("UI-UX-course", city)}`,
  `/${generateSlug("SAP-EWM-course", city)}`,
  `/${generateSlug("SAP-ABAP-course", city)}`,
  `/${generateSlug("SAP-BASIS-course", city)}`,
  `/${generateSlug("SAP-BWBI-course", city)}`,
  `/${generateSlug("SAP-FICO-course", city)}`,
  `/${generateSlug("SAP-S4-HANA-course", city)}`,
  `/${generateSlug("SAP-HCM-course", city)}`,
  `/${generateSlug("SAP-MM-course", city)}`,
  `/${generateSlug("SAP-NET-course", city)}`,
  `/${generateSlug("SAP-PM-course", city)}`,
  `/${generateSlug("SAP-PP-course", city)}`,
  `/${generateSlug("SAP-PS-course", city)}`,
  `/${generateSlug("SAP-QM-course", city)}`,
  `/${generateSlug("SAP-SCM-course", city)}`,
  `/${generateSlug("SAP-SD-course", city)}`,
  `/${generateSlug("SAP-SUCCESSFACTORS-course", city)}`,
  `/${generateSlug("POWERBI-course", city)}`,
  `/${generateSlug("SQL-course", city)}`,
  `/${generateSlug("TABLEAU-training", city)}`,
  `/${generateSlug("Digital-Marketing-course", city)}`,
  `/${generateSlug("HR-Analytics-course", city)}`,
  `/${generateSlug("Core-HR-course", city)}`,
  `/${generateSlug("HR-Management-course", city)}`,
  `/${generateSlug("HR-Payroll-course", city)}`,
  `/${generateSlug("SAP-HR-HCM-course", city)}`,
];

// Generate sitemap XML content
const generateSitemap = (routes) => {
  const urlsetStart = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">`;
  const urlsetEnd = `</urlset>`;

  const urlEntries = routes.map(route => {
    return `
      <url>
        <loc>${`https://www.Connectingdotserp.com${route}`}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join('');

  return `${urlsetStart}${urlEntries}${urlsetEnd}`;
};

// Write the sitemap to a file
const sitemap = generateSitemap(routes);
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at', sitemapPath);