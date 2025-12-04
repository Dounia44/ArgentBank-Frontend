import "./Header.scss";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/argentBankLogo.png";
import Logo2x from "../../assets/images/argentBankLogo@2x.png";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav__logo" to="/">
        <img
          className="main-nav__logo-image"
          src={Logo}
          srcSet={`${Logo} 1x, ${Logo2x} 2x`}
          width={200}
          height={54}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav__item" to="/Login">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
        <Link className="main-nav__item" to="/Profile">
          <FontAwesomeIcon icon={faCircleUser} />
          Tony
        </Link>
        <Link className="main-nav__item" to="/Login">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </Link>
      </div>
    </nav>
  );
}

export default Header;
