import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import "./Login.scss";

import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/button/Button";
import Field from "../../components/Field/Field";

import { loginUser } from "../../store/auth.slice";
import { getUserProfile } from "../../store/user.slice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, remember }));
  };

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile(token));
      navigate("/profile", { replace: true });
    }
  }, [token, dispatch, navigate]);

  return (
    <section className="sign-in">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in__icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <Field
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={remember}
          onChange={setRemember}
        />
        <Button className="button-block" type="submit">
          Sign In
        </Button>
        {status === "failed" && <p>{error}</p>}
      </form>
    </section>
  );
}
export default Login;
