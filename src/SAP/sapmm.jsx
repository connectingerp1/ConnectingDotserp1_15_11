import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';


const SAPMM = ({ city = 'defaultCity' }) => {
  
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>SAP FICO Training | SAP Certification Courses in {city}</title>
          <meta
            name="description"
            content={`Join our SAP FICO course in ${city} to gain expertise in Financial Accounting and Controlling and enhance your career opportunities.`}
          />
          <meta
            name="keywords"
            content={`SAP FICO Course in ${city}, SAP FICO Training Institute in ${city}, Best SAP FICO Training Institute in ${city}, SAP FICO Jobs, SAP FICO Certificate in ${city}, SAP FICO Certificate Course in ${city}, SAP FICO Course Fees, SAP FICO Training Fees in ${city}, SAP FICO Interview Preparation, SAP FICO Mock Interview, SAP FICO Tutorial, SAP FICO Summer Training, SAP FICO Training in ${city}, SAP FICO Industrial Training, SAP FICO Internship, How to become SAP FICO expert in ${city}, SAP FICO course Syllabus`}
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Connecting Dots ERP SAP Training Institute" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph meta tags */}
          <meta property="og:title" content={`SAP FICO Training | SAP Certification Courses in ${city}`} />
          <meta
            property="og:description"
            content={`Enroll in our comprehensive SAP FICO training in ${city} with expert guidance and placement support.`}
          />
          <meta
            property="og:image"
            content="/Navbar/connecting dot erp logo.avif"
          />
          <meta
            property="og:url"
            content={`https://www.connectingdotserp.com/sap-fico-course-in-${city.toLowerCase()}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Connecting Dots ERP" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`SAP FICO Training in ${city} | Connecting Dots ERP`} />
          <meta
            name="twitter:description"
            content={`Get recognized SAP FICO training at Connecting Dots ERP in ${city}. Start your career in Finance with expert guidance.`}
          />
          <meta name="twitter:site" content="@CD_ERP" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                "name": "Connecting Dots ERP SAP Training Institute",
                "url": "https://www.connectingdotserp.com",
                "logo": "/Navbar/connecting dot erp logo.avif",
                "sameAs": [
                  "https://www.facebook.com/sapinstallation.pune.9",
                  "https://x.com/CD_ERP",
                  "https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+919004002958",
                  "contactType": "Customer Support",
                  "areaServed": "IN",
                  "availableLanguage": ["English"]
                },
                "description": "At Connecting Dots ERP, our certifications are globally accredited and recognized by leading multinational companies. We offer expert-led training in SAP, Software Development, Digital Marketing, and HR courses with strong placement support for your career.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor, 101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad",
                  "addressLocality": "Pune",
                  "addressRegion": "MH",
                  "postalCode": "411027",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "18.586532821424697",
                  "longitude": "73.78137250928907"
                },
                "foundingDate": "2013",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Nitendra Singh"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.7",
                  "reviewCount": "185"
                },
                "openingHours": "Mo-Sun 24 hours",
                "priceRange": "$$",
                "paymentAccepted": ["Cash", "Credit Card"],
                "currenciesAccepted": "INR",
                "telephone": "+919004002958"
              }
            `}
          </script>
        </Helmet>
  
      <main>
        <ScrollToTop />
        <Header pageId="MMHeader" pageType="mmheader" />
        <Why pageId="WhyMM" pageType="Whymm" />
        <SAPMOD pageId="SAPMM" />
        
        <Councelor />
        <Modules pageId="MMmodule" />
        <Trustus />
        <Certificate pageId="sap-mmCERT" />
        <Program />
        <Description pageId="sap-mm" />
        <FAQ pageId="MMFAQ" pageType="mmfaq" />
        <RelatedCourses pageId="MMrelcourses" />
      </main>
      </div>
      </HelmetProvider>
    
  );
};

export default SAPMM;
