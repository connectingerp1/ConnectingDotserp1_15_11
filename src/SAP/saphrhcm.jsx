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


const SAPHRHCM = () => {
  

  return (
   

      <main>
        <ScrollToTop />
        <Header pageId="HRHCMHeader" pageType="hrhcmheader" />
        <Why pageId="WhyHRHCM" pageType="Whyhrhcm" />
        <SAPMOD pageId="SAPHRHCM" />
        <Councelor />
        <Trustus />
        <Certificate pageId="sap-hrhcmCERT" />
        <Program />
        <Description pageId="sap-hrhcm" />
        <FAQ pageId="HRHCMFAQ" pageType="hrhcmfaq" />
        <RelatedCourses pageId="HRHCMrelcourses" />
      </main>
   
  );
};

export default SAPHRHCM;
