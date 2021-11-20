import React from 'react';
import {useContext, useState} from "react";
import { useParams } from 'react-router';
import { InvoiceContext } from "../context/InvoiceContext";

function InvoiceDetails() {
    const [invoices, setInvoices] = useContext(InvoiceContext);
    const {id} = useParams();
    const invoiceIndex = invoices.findIndex((invoice)=> invoice.id === id);
    const [invoice, setInvoice] = useState(invoices[invoiceIndex]);
    
    
    return (
        <div>
            
        </div>
    )
}

export default InvoiceDetails
