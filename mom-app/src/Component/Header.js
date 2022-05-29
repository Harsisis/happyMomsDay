import { Link } from 'react-router-dom';

import mainLogo from '../logo.png';
import "../Style/Header.css"

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img className="logo" src={mainLogo} alt="home"></img>
        </Link>
        <Link to="/mom" className="header-button">
            <div className="button-title">
                # pour maman #
            </div>
        </Link>
        <br></br>
        <Link to="/grand-mom" className="header-button">
        <div className="button-title">
                # pour mamie #
            </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
