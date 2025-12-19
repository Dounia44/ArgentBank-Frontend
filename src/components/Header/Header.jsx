import "./Header.scss";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/argentBankLogo.png";
import Logo2x from "../../assets/images/argentBankLogo@2x.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth.slice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const userName = useSelector((state) => state.user.currentUser?.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

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
        {!token && (
          <Link className="main-nav__item" to="/Login">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}

        {token && (
          <>
            <Link className="main-nav__item" to="/Profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {userName}
            </Link>
            <Link
              className="main-nav__item"
              to={undefined}
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
