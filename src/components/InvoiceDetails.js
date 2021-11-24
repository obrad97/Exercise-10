import React from 'react';
import {useContext, useState, useEffect} from "react";
import { useParams } from 'react-router';
import { InvoiceContext } from "../context/InvoiceContext";
import { Link } from 'react-router-dom';
import arrowBack from "../images/icon-arrow-left.svg";

function InvoiceDetails() {
    const {invoices, modal} = useContext(InvoiceContext);
    const [invoicesData, setInvoicesData] = invoices;
    const [modalValue, setModalValue] = modal;
    const {id} = useParams();
    const invoiceIndex = invoicesData.findIndex((invoice)=> invoice.id === id);
    const [invoice, setInvoice] = useState(invoicesData[invoiceIndex]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const createdDate = invoice.createdAt.split("-");
    const dueDate = invoice.paymentDue.split("-");
    let status;
    let background;

    const addCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        return () => {
            setInvoice([])
        }
    }, [id]);

    if (invoice.status === "paid"){
        status = "#33D69F";
        background = "rgba(51, 214, 159, 0.06)"
    } else if (invoice.status === "pending"){
        status = "#FF8F00";
        background = "rgba(255, 143, 0, 0.06)"
    } else {
        status = '#373B53';
        background = "rgba(55, 59, 83, 0.06)"
    }
    
    
    return (
        <main className="invoice-details">
            <Link to="/" style={{textDecoration:"none"}}>
            <h4 className="go-back-btn"><img src={arrowBack} alt="arrow-left"/> Go back</h4>
            </Link>
            <section className="invoice-details-head">
                <div className="invoice-details-status">
                    <p>Status</p>
                    <div style={{background:background}} className="status-container">
                        <div style={{background:status}} className="status-dot"></div>
                        <p style={{color: status}}>{invoice.status}</p>
                    </div>
                </div>
                <div className="invoice-details-buttons">
                    <button className="edit-btn" type="button">Edit</button>
                    <button className="delete-btn" type="button">Delete</button>
                    <button className="paid-btn" type="button">Mark as Paid</button>
                </div>
            </section>
            <section className="invoice-details-main">
                <div className="id-and-sender-address">
                    <div className="id-and-project-name">
                        <h3><span>#</span>{invoice.id}</h3>
                        <p>{invoice.description}</p>
                    </div>
                    <div className="sender-address">
                        <p>{invoice.senderAddress.street}</p>
                        <p>{invoice.senderAddress.city}</p>
                        <p>{invoice.senderAddress.postCode}</p>
                        <p>{invoice.senderAddress.country}</p>
                    </div>
                </div>
                <div className="recipient-info">
                    <div className="dates">
                        <div className="date-created">
                            <p>Inovice date</p>
                            <h3>{createdDate[2]} {months[Number(createdDate[1])-1]} {createdDate[0]}</h3>
                        </div>
                        <div className="payment-due">
                            <p>Payment Due</p>
                            <h3>{dueDate[2]} {months[Number(dueDate[1])-1]} {dueDate[0]}</h3>
                        </div>
                    </div>
                    <div className="bill-to">
                        <p>Bill To</p>
                        <h3>{invoice.clientName}</h3>
                        <p>{invoice.clientAddress.street}</p>
                        <p>{invoice.clientAddress.city}</p>
                        <p>{invoice.clientAddress.postCode}</p>
                        <p>{invoice.clientAddress.country}</p>
                    </div>
                    <div className="sent-to">
                        <p>Sent to</p>
                        <h3>{invoice.clientEmail}</h3>
                    </div>
                </div>
                <div className="pricing">
                    <div className="items">
                        <div className="item-labels item-grid">
                            <p className="item-names">Item Name</p>
                            <p className="item-quantities">QTY.</p>
                            <p className="item-prices">Price</p>
                            <p className="item-total-prices">Total</p>
                        </div>
                        {invoice.items.map((item, i)=> 
                            <div className="item item-grid" key={i}>
                                <h3 className="item-name">{item.name}</h3>
                                <h3 className="item-quantity">{item.quantity}</h3>
                                <h3 className="item-price">&pound; {addCommas(item.price.toFixed(2))}</h3>
                                <h3 className="item-total">&pound; {addCommas(item.total.toFixed(2))}</h3>
                            </div>
                        )}
                    </div>
                    <div className="amount-due">
                        <p>Amount Due</p>
                        <h1>&pound; {addCommas(invoice.total.toFixed(2))}</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default InvoiceDetails
