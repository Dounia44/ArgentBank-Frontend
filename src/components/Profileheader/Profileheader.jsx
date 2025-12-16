import "./Profileheader.scss";
import Button from "../button/Button";
import { useState } from "react";
import Field from "../Field/Field";

function Profileheader({ firstName, lastName }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-header">
      {!isEditing ? (
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}
        </h1>
      ) : (
        <h1>Edit user info</h1>
      )}

      {isEditing && (
        <form className="profile-header__form">
          <Field id="username" label="User name" />
          <Field id="firstname" label="First name" disabled />
          <Field id="lastname" label="Last name" disabled />
        </form>
      )}

      {!isEditing ? (
        <Button onClick={() => setIsEditing(true)}>Edit Name</Button>
      ) : (
        <div className="profile-header__actions">
          <Button type="submit" className="">
            Save
          </Button>

          <Button
            type="button"
            className=""
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
export default Profileheader;
