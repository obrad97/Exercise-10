import {useContext, useState, useEffect, useRef} from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function InvoiceEdit() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = yyyy+'-'+mm+'-'+dd;
    const {invoices, modal} = useContext(InvoiceContext);
    const [invoicesData, setInvoicesData] = invoices;
    const [modalValue, setModalValue] = modal;
    const [date, setDate] = useState(today);
    const modalRef = useRef(null);

    useEffect(() => {
        if(modalValue){
            modalRef.current.classList.add('invoice-edit-active')
        }else {
            modalRef.current.classList.remove('invoice-edit-active')
        }
        
    }, [modalValue])
    return (
        <div ref={modalRef} className="invoice-edit-modal" onClick={(e)=> {
            if(e.target !== e.currentTarget){
                return
            } else {
                setModalValue(false)
            }
        }}>
            <div className="inovice-edit">
                <h1>New Invoice</h1>
                <form className="invoice-form">
                    <div className="bill-from">
                        <h5>Bill From</h5>
                        <label>Street Address</label>
                        <input className="bill-from-street" type="text" name="street address"></input>
                        <div className="bill-from-details">
                            <div>
                                <label>City</label>
                                <input type="text" name="city"></input>
                            </div>
                            <div>
                                <label>Post Code</label>
                                <input type="text" name="post code"></input>
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" name="country"></input>
                            </div>
                        </div>
                    </div>
                    <div className="bill-to">
                        <h5>Bill To</h5>
                        <label>Client's Name</label>
                        <input type="text" name="clients-name"></input>

                        <label>Client's Email</label>
                        <input type="text" name="clients-email"></input>

                        <label>Street Address</label>
                        <input type="text" name="clients-street"></input>
                        <div className="bill-to-details">
                        <div>
                                <label>City</label>
                                <input type="text" name="city"></input>
                            </div>
                            <div>
                                <label>Post Code</label>
                                <input type="text" name="post-code"></input>
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" name="country"></input>
                            </div>
                        </div>
                    </div>
                    <div className="bill-date">
                        <input type="date" defaultValue={date}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InvoiceEdit
