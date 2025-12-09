import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button";

import "./Login.scss";

function Login() {
  return (
    <section className="sign-in">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in__icon" />
      <h1>Sign In</h1>

      <Input id="username" label="Username" />
      <Input id="password" label="Password" type="password" />

      <Checkbox id="remember-me" label="Remember me" />
      <Button className="button-block">Sign In</Button>
    </section>
  );
}
export default Login;
