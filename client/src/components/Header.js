import { Link } from "react-router-dom"
import SearchByName from "./SearchByName"

const Header = () => {
	return (
		<div>
		<nav className="nav navbar navbar-expand-xl navbar-dark ">
            <div className="container">
				<Link to="/" className="navbar-logo order-last order-xl-0">Foodable</Link>
                {/* <a className="navbar-logo order-last order-xl-0" href="./index.html"> Foodable
                </a> */}

                {/* <a className="js-scroll-to-id navbar-link " href="/create_food.html">About</a> */}
				<SearchByName  />
            </div>
        </nav>
		</div>
	)
}

export default Header