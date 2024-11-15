import React, { useContext } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Import Helmet
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


const SAPNET = () => {
  

  return (
    

      <main>
        <ScrollToTop />
        <Header pageId="NetHeader" pageType="netheader" />
        <Why pageId="WhyNet" pageType="Whynet" />
        <SAPMOD pageId="SAPNETWEAVER" />
        
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-netweaverCERT" />
        <Program />
        <Description pageId="sap-netweaver" />
        <FAQ pageId="NetFAQ" pageType="netfaq" />
        <RelatedCourses pageId="netrelcourses" />
      </main>
   
  );
};

export default SAPNET;
