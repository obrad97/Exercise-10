import React, {useState, createContext} from "react"
import invoicesData from "./data.json";

export const InvoiceContext = createContext();

export const InvoiceProvider = props => {
    const [invoices, setInvoices] = useState(invoicesData)
    return (
        <InvoiceContext.Provider value={[invoices, setInvoices]}>
            {props.children}
        </InvoiceContext.Provider>
    )
}

