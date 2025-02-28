import React, { createContext, useContext, ReactNode } from "react";
import { SiteData } from "../types/data";

const DataContext = createContext<SiteData | null>(null);

interface DataProviderProps {
  children: ReactNode;
  data: SiteData;
}

export function DataProvider({ children, data }: DataProviderProps) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData(): SiteData {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
