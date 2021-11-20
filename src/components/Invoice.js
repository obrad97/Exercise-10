import arrowRight from "../images/icon-arrow-right.svg";
import { Link } from "react-router-dom";
const Invoice = ({data}) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const formatedDate = data.paymentDue.split("-");
    const sum = data.total.toFixed(2)
    let status;
    let background;
    if (data.status === "paid"){
        status = "#33D69F";
        background = "rgba(51, 214, 159, 0.06)"
    } else if (data.status === "pending"){
        status = "#FF8F00";
        background = "rgba(255, 143, 0, 0.06)"
    } else {
        status = '#373B53';
        background = "rgba(55, 59, 83, 0.06)"
    }
    return (
        <div className="invoice">
            <div className="invoice-info">
                <div className="invoice-id">
                <h3><span>#</span>{data.id}</h3>
                </div>
                <div className="invoice-date">
                <p>Due {formatedDate[2]} {months[Number(formatedDate[1])-1]} {formatedDate[0]}</p>
                </div>
                <div className="invoice-name">
                <p>{data.clientName}</p>
                </div>
                <div className="invoice-sum">
                <h2>£ {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>
            </div>
            <div className= "invoice-status">
                <div style={{background:background}} className="status-container">
                    <div style={{background:status}} className="status-dot"></div>
                    <p style={{color: status}}>{data.status}</p>
                </div>
                <Link to={`invoice/${data.id}`}>
                <img src={arrowRight} alt="arrow right"></img>
                </Link>
            </div>
        </div>
    )
}

export default Invoice
