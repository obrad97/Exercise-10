import {useContext, useState, useEffect, useRef} from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import arrowDown from "../images/icon-arrow-down.svg";

function InvoiceEdit() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = yyyy+'-'+mm+'-'+dd;
    const paymentTerms = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days" ];
    const {invoices, modal} = useContext(InvoiceContext);
    const [invoicesData, setInvoicesData] = invoices;
    const [modalValue, setModalValue] = modal;
    const [date, setDate] = useState(today);
    const [list, setList] = useState(false);
    const [selected, setSelected] = useState('Select a Payment Term');
    const modalRef = useRef(null);
    const listRef = useRef(null);
    const arrowRef = useRef(null);
    useEffect(() => {
        if(modalValue){
            modalRef.current.classList.add('invoice-edit-active')
        }else {
            modalRef.current.classList.remove('invoice-edit-active')
        }
        
    }, [modalValue])

    useEffect(() => {
        if(list) {
            listRef.current.classList.add('active')
        } else {
            listRef.current.classList.remove('active')
        }
        
    }, [list])
    return (
        <div ref={modalRef} className="invoice-edit-modal" onClick={(e)=> {
            if(e.target !== e.currentTarget){
                return
            } else {
                setModalValue(false)
            }
        }}>
            <div className="invoice-edit">
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
                        <div>
                            <label>Invoice Date</label>
                            <input type="date" name="bill-date" defaultValue={date}/>
                        </div>
                        <div>
                            <label>Payment Terms</label>
                            <div className="payment-terms" onClick={(e)=> {
                                if (list) {
                                    setList(false)
                                    e.currentTarget.style.border= "1px solid var(--inputBorder)";
                                    arrowRef.current.classList.remove("arrow-up")
                                }else {
                                    setList(true)
                                    e.currentTarget.style.border= "1px solid var(--purple)";
                                    arrowRef.current.classList.add("arrow-up")
                                }
                                }}>
                                <p>{selected}</p>
                                <img src={arrowDown} alt="arrow-dwon" ref={arrowRef}></img>
                                <ul ref={listRef} onClick={(e)=> {
                                }}>
                                    {paymentTerms.map((term, i)=> 
                                    <li key={i} data-id={i} value={Number(term.split(' ')[1])} onClick={(e)=>{
                                        let id = Number(e.target.getAttribute('data-id'));
                                        setSelected(paymentTerms[id])
                                    }}>{term}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <label>Project Description</label>
                    <input className="project-desc" type="text" name="project-desc"></input>
                    <div className="item-list">
                        <h3>Item List</h3>
                        <div className="item-list-items">
                            <div>
                                <label>Item Name</label>
                                <label>Qty.</label>
                                <label>Price</label>
                                <label>Total</label>
                            </div>
                            <div>
                                <input type="text"></input>
                                <input className="item-list-qty" type="number"></input>
                                <input className="item-list-price"  type="number"></input>
                                <section>
                                    <p>0</p>
                                    <svg className="remove-item" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg>
                                </section>
                            </div>
                        </div>
                        <button>+ Add New Item</button>
                    </div>
                    <div className="from-buttons">
                        <button className="discard">Discard</button>
                        <div>
                            <button className="save-draft">Save as Draft</button>
                            <button className="save-send">Save & Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InvoiceEdit
