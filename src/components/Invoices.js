import arrowDown from "../images/icon-arrow-down.svg";
import plusIcon from "../images/icon-plus.svg";
import {useContext} from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import Invoice from "./Invoice";

function Invoices() {
    const [invoices, setInvoices] = useContext(InvoiceContext);
    console.log(invoices);
    return (
        <main className="invoices">
            <section className="invoices-head">
                <div className="invoices-head-left">
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                </div>
                <div className="invoices-head-right">
                    <p className="filter">Filter by status <img src={arrowDown} alt="arrow down"/></p>
                    <div className="new-invoice">
                        <div>
                            <img src={plusIcon} alt="plus icon"/>
                        </div>
                        <p>New Invoice</p>
                    </div>
                </div>
            </section>
            <section className="invoices-list">
                {invoices.map((invoice)=>
                    <Invoice data={invoice} key={invoice.id}/>
                )}
            </section>
        </main>
    )
}

export default Invoices