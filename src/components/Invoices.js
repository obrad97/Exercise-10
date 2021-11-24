import arrowDown from "../images/icon-arrow-down.svg";
import plusIcon from "../images/icon-plus.svg";
import {useContext} from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import Invoice from "./Invoice";

function Invoices() {
    const {invoices, modal} = useContext(InvoiceContext);
    const [invoicesData, setInvoicesData] = invoices;
    const [modalValue, setModalValue] = modal;
    return (
        <main className="invoices">
            <section className="invoices-head">
                <div className="invoices-head-left">
                    <h1>Invoices</h1>
                    <p>There are {invoicesData.length} total invoices</p>
                </div>
                <div className="invoices-head-right">
                    <p className="filter">Filter by status <img src={arrowDown} alt="arrow down"/></p>
                    <div className="new-invoice" onClick={(e)=> {
                        setModalValue(true)
                    }}>
                        <div>
                            <img src={plusIcon} alt="plus icon"/>
                        </div>
                        <p>New Invoice</p>
                    </div>
                </div>
            </section>
            <section className="invoices-list">
                {invoicesData.map((invoice)=>
                    <Invoice data={invoice} key={invoice.id}/>
                )}
            </section>
        </main>
    )
}

export default Invoices