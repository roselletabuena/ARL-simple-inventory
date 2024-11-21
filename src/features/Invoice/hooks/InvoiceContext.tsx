import { createContext, useContext } from "react";
import { InvoiceConfig } from "../../../types/user-configs";
import { useInvoiceConfig } from "../../../api/config/user-config";

type AppContextType = {
  invoiceConfig: InvoiceConfig;
};

const InvoiceContext = createContext<AppContextType | undefined>(undefined);

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error("useInvoiceContext must be used within a InvoiceProvider");
  }
  return context;
};

export const InvoiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data } = useInvoiceConfig();

  if (!data) {
    return null;
  }

  return (
    <InvoiceContext.Provider value={{ invoiceConfig: data }}>
      {children}
    </InvoiceContext.Provider>
  );
};
