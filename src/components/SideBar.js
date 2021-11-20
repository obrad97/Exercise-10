import sideBarLogo from "../images/logo.svg";
import moonIcon from "../images/icon-moon.svg"
import userImg from "../images/image-avatar.jpg"

function SideBar() {
    return (
        <aside className="side-bar">
            <div className="side-bar-logo">
                <div className="side-bar-logo-bg"></div>
                <img src={sideBarLogo} alt="logo"></img>
            </div>
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
