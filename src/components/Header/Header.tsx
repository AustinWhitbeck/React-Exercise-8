import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <h1><Link to="/">Menu</Link></h1>
            <p><Link to="/search">Search</Link></p>
        </header>
    );
}

export default Header;