import '../styles/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <aside id = "navbarText">
            <ul id = "NavbarList">
                <li className = "NavbarListItem"><Link to = "/AboutMe">&lt;About Me /&gt;</Link></li>
                <li className = "NavbarListItem"><Link to = "/Skills">&lt;Skills /&gt;</Link></li>
                <li className = "NavbarListItem"><Link to = "/RecentWork">&lt;Recent Work /&gt;</Link></li>
                <li className = "NavbarListItem"><Link to = "/Contact">&lt;Contact Me /&gt;</Link></li>
            </ul>
        </aside>
    )
}