import "./Profileheader.scss";
import Button from "../button/Button";

function Profileheader({ firstName, lastName }) {
  return (
    <div className="profile-header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}
      </h1>
      <Button className="profile-header__button">Edit Name</Button>
    </div>
  );
}
export default Profileheader;
