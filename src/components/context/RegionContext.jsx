import React, { createContext, useState, useContext } from "react";

// Create Context
const RegionContext = createContext();

// Custom Hook to use Region Context
export const useRegion = () => useContext(RegionContext);

// Provider Component
export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState("NorthIndia"); // Default

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
