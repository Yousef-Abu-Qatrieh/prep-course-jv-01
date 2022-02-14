import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <>
            <nav>
                <Link to='/'>  Home </Link>
                <Link to='/about'>  About  </Link>
                <Link to='/memes'>  Memes  </Link>
            </nav>
            
        </>

    );
}

export default Header;