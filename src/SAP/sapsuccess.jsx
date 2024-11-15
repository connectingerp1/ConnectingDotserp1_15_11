import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'
import Trustus from '../CoursesComponents/Trustus'
import Councelor from '../CoursesComponents/Councelor'
import ScrollToTop from '../components/ScrollToTop'
import Program from '../CoursesComponents/ProgramHighlights'
import Description from '../CoursesComponents/Description'
import SAPMOD from '../CoursesComponents/sapmod'
import { CityContext } from '../CityContext' // Import CityContext to access city

const SAPSUCC = () => {
  const { city } = useContext(CityContext) // Access city from context

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          SAP SuccessFactors Training | SAP Certification Courses in {city}
        </title>
        <meta
          name="description"
          content={`Join our SAP SuccessFactors course in ${city} to gain expertise in Human Capital Management and enhance your career opportunities.`}
        />
        <meta
          name="keywords"
          content={`SAP SuccessFactors Course in ${city}, SAP SuccessFactors Training Institute in ${city}, Best SAP SuccessFactors Training Institute in ${city}, SAP SuccessFactors Jobs, SAP SuccessFactors Certificate in ${city}, SAP SuccessFactors Course Fees, SAP SuccessFactors Training Fees in ${city}, SAP SuccessFactors Interview Preparation, SAP SuccessFactors Mock Interview, SAP SuccessFactors Tutorial, SAP SuccessFactors Summer Training, SAP SuccessFactors Training in ${city}, SAP SuccessFactors Industrial Training, SAP SuccessFactors Internship, How to become SAP SuccessFactors expert in ${city}, SAP SuccessFactors course Syllabus`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="Connecting Dots ERP SAP Training Institute"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content={`SAP SuccessFactors Training | SAP Certification Courses in ${city}`}
        />
        <meta
          property="og:description"
          content={`Enroll in our comprehensive SAP SuccessFactors training in ${city} with expert guidance and placement support.`}
        />
        <meta
          property="og:image"
          content="/Navbar/connecting dot erp logo.avif" // Replace with the appropriate image if needed
        />
        <meta
          property="og:url"
          content={`https://www.connectingdotserp.com/sap-successfactors-course-in-${city.toLowerCase()}`} // Dynamic URL
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Connecting Dots ERP" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`SAP SuccessFactors Training in ${city} | Connecting Dots ERP`}
        />
        <meta
          name="twitter:description"
          content={`Get recognized SAP SuccessFactors training at Connecting Dots ERP in ${city}. Start your career in Human Capital Management with expert guidance.`}
        />
        <meta name="twitter:site" content="@CD_ERP" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
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
            "description": "At Connecting Dots ERP, our certifications are globally accredited and recognized by leading multinational companies...",
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
          }`}
        </script>
      </Helmet>

      <main>
        <ScrollToTop />
        <Header pageId="SuccHeader" pageType="succheader" />
        <Why pageId="WhySucc" pageType="Whysucc" />
        <SAPMOD pageId="SAPSUCCESS" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-successfactorCERT" />
        <Program />
        <Description pageId="sap-succ" />
        <FAQ pageId="SuccFAQ" pageType="succfaq" />
        <RelatedCourses pageId="Succrelcourses" />
      </main>
    </HelmetProvider>
  )
}

export default SAPSUCC
