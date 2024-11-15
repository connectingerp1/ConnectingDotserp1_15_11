import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';
import Description from '../CoursesComponents/Description';
import SAPMOD from '../CoursesComponents/sapmod';

const SAPEWM = () => {
 

  return (
    
      

      <div>
        <main>
          <ScrollToTop />
          <Header pageId="EWMHeader" pageType="ewmheader" />
          <Why pageId="WhyEWM" pageType="Whyewm" />
          <SAPMOD pageId="SAPEWM" />
          <Councelor />
          <Trustus />
          <Certificate pageId="sap-ewmCERT" />
          <Program />
          <Description pageId="sap-ewm" />
          <FAQ pageId="EWMFAQ" pageType="ewmfaq" />
          <RelatedCourses pageId="EWMrelcourses" />
        </main>
      </div>
    
  );
};

export default SAPEWM;
