import '../styles/Navbar.css'
import { Link } from "react-scroll";

export default function Navbar() {
    return(
        <aside id = "navbarText">
            <ul id = "NavbarList">
                    <a href = "#AboutMe" >
                        <li className = "NavbarListItem">
                            &lt;About Me /&gt; 
                        </li>
                    </a>
                <a href = "#Skills"><li className = "NavbarListItem">&lt;Skills /&gt;</li></a>
                <a href = "#RecentWork"><li className = "NavbarListItem">&lt;Recent Work /&gt;</li></a>
                <a href = "#Contact"><li className = "NavbarListItem">&lt;Contact Me /&gt;</li></a>
            </ul>
        </aside>
    )
}