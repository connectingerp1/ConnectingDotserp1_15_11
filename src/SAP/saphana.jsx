import React, { useContext } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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

const SAPHANA = () => {
  

  return (
    

      <main>
        <ScrollToTop />
        <Header pageId="HanaHeader" pageType="hanaheader" />
        <Why pageId="WhyHana" pageType="Whyhana" />
        <SAPMOD pageId="SAPHANA" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-hanaCERT" />
        <Program />
        <Description pageId="sap-hana" />
        <FAQ pageId="HanaFAQ" pageType="hanafaq" />
        <RelatedCourses pageId="Hanarelcourses" />
      </main>
    
  );
};

export default SAPHANA;
