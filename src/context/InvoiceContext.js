import React, {useState, createContext} from "react"
import invoicesData from "./data.json";

export const InvoiceContext = createContext();

export const InvoiceProvider = props => {
    const [invoices, setInvoices] = useState(invoicesData)
    const [modal, setModal] = useState(false)
    return (
        <InvoiceContext.Provider value={{invoices: [invoices, setInvoices], modal: [modal, setModal]}}>
            {props.children}
        </InvoiceContext.Provider>
    )
}

