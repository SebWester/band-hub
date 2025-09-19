import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ReactNode } from "react";

type PageContextType = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState("start");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
