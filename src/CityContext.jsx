// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create the CityContext
// export const CityContext = createContext();

// // Custom hook to use the CityContext
// export const useCity = () => {
//   const context = useContext(CityContext);
//   if (!context) {
//     throw new Error('useCity must be used within a CityProvider');
//   }
//   return context;
// };

// // List of supported metro cities
// const availableCities = [
//   'pune', 'mumbai', 'delhi', 'kolkata', 'chennai', 'bangalore', 
//   'hyderabad', 'ahmedabad', 'jaipur', 'lucknow', 'kanpur', 'nagpur', 
//   'patna', 'indore', 'bhopal', 'visakhapatnam', 'vadodara', 'ludhiana', 
//   'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'varanasi', 
//   'kerala', 'tamil nadu', 'surat', 'ernakulam', 'kottayam', 'aurangabad', 
//   'bhilai', 'dehradun', 'ghaziabad', 'gorakhpur', 'guntur', 'guwahati', 
//   'khammam', 'madurai', 'mysore', 'pondicherry', 'ranchi', 'coimbatore', 
//   'kochi', 'chandigarh', 'bhubaneswar', 'shimoga', 'tirupati', 'thrissur', 
//   'warangal', 'vizag', 'trivandrum', 'salem', 'trichy', 'ameerpet', 
//   'jalandhar', 'jamshedpur', 'marathahalli', 'mohali', 'calicut', 'raipur', 
//   'rohini', 'patiala', 'cochin', 'mangalore', 'velachery', 'jabalpur', 'tambaram'
// ];

// // Function to capitalize the first letter of a city
// const capitalizeCity = (city) => {
//   return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
// };

// // CityProvider component to wrap your app and provide the city data
// export const CityProvider = ({ children }) => {
//   const [city, setCity] = useState('Pune'); // Default city is Pune with proper capitalization

//   useEffect(() => {
//     // Ensure code only runs on the client side
//     if (typeof window !== 'undefined') {
//       const path = window.location.pathname;
//       const citySlug = path.substring(path.lastIndexOf('-') + 1);  // Get the city part after the last '-'

//       // Update city state based on the URL slug if it's valid, else default to Pune
//       if (availableCities.includes(citySlug.toLowerCase())) {
//         setCity(capitalizeCity(citySlug));  // Capitalize the city
//       } else {
//         setCity('Pune'); // Default to Pune if citySlug is not in the list
//       }
//     }
//   }, []);

//   return (
//     <CityContext.Provider value={{ city }}>
//       {children}
//     </CityContext.Provider>
//   );
// };






import React, { createContext, useContext, useState, useEffect } from 'react';

export const CityContext = createContext();

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};

const availableCities = [
  'pune', 'mumbai', 'delhi', 'kolkata', 'chennai', 'bangalore', 
  'hyderabad', 'ahmedabad', 'jaipur', 'lucknow', 'kanpur', 'nagpur', 
  'patna', 'indore', 'bhopal', 'visakhapatnam', 'vadodara', 'ludhiana', 
  'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'varanasi', 
  'kerala', 'tamil nadu', 'surat', 'ernakulam', 'kottayam', 'aurangabad', 
  'bhilai', 'dehradun', 'ghaziabad', 'gorakhpur', 'guntur', 'guwahati', 
  'khammam', 'madurai', 'mysore', 'pondicherry', 'ranchi', 'coimbatore', 
  'kochi', 'chandigarh', 'bhubaneswar', 'shimoga', 'tirupati', 'thrissur', 
  'warangal', 'vizag', 'trivandrum', 'salem', 'trichy', 'ameerpet', 
  'jalandhar', 'jamshedpur', 'marathahalli', 'mohali', 'calicut', 'raipur', 
  'rohini', 'patiala', 'cochin', 'mangalore', 'velachery', 'jabalpur', 'tambaram'
];

const capitalizeCity = (city) => {
  return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
};

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Pune'); // Default city is Pune

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const citySlug = path.substring(path.lastIndexOf('-') + 1);
      if (availableCities.includes(citySlug.toLowerCase())) {
        setCity(capitalizeCity(citySlug));
      } else {
        setCity('Pune');
      }
    }
  }, []);

  return (
    <CityContext.Provider value={{ city }}>
      {children}
    </CityContext.Provider>
  );
};
