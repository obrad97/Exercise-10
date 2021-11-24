import sideBarLogo from "../images/logo.svg";
import moonIcon from "../images/icon-moon.svg"
import userImg from "../images/image-avatar.jpg"
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <aside className="side-bar">
            <Link to="/">
            <div className="side-bar-logo">
                <div className="side-bar-logo-bg"></div>
                <img src={sideBarLogo} alt="logo"></img>
            </div>
            </Link>
            <div className="side-bar-bottom">
                <img src={moonIcon} alt="moon icon"/>
                <div className="user-img">
                    <img src={userImg} alt="user img"/>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
