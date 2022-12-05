import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/handyman/">
                    <img src={require('../src/assets/img/logo.png')} className="rounded-circle border border-2" alt="readyHands logo" style={{width: '75px'}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                    <Link className="nav-link text-light active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/category">Category</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">Log In</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;