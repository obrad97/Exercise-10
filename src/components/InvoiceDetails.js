import React from 'react';
import {useContext, useState, useEffect} from "react";
import { useParams } from 'react-router';
import { InvoiceContext } from "../context/InvoiceContext";

function InvoiceDetails() {
    const [invoices, setInvoices] = useContext(InvoiceContext);
    const {id} = useParams();
    const invoiceIndex = invoices.findIndex((invoice)=> invoice.id === id);
    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
            setInvoice(invoices[invoiceIndex])
        return () => {
            setInvoice([])
        }
    }, [id]) 
    return (
        <div>
            <h1>{invoice.id}</h1>
        </div>
    )
}

export default InvoiceDetails
