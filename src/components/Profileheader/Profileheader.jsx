import "./Profileheader.scss";
import Button from "../button/Button";
import { useState, useEffect } from "react";
import Field from "../Field/Field";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../store/user.slice";

function Profileheader({ userName, firstName, lastName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserName, setEditedUserName] = useState(userName);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    setEditedUserName(userName);
  }, [userName]);

  useEffect(() => {
    if (status === "succeeded") {
      setIsEditing(false);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUserProfile({
        token,
        userData: { userName: editedUserName },
      })
    );
  };

  return (
    <div className="profile-header">
      {!isEditing ? (
        <>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>

          <Button onClick={() => setIsEditing(true)}>Edit Name</Button>
        </>
      ) : (
        <>
          <h1>Edit user info</h1>

          <form className="profile-header__form" onSubmit={handleSubmit}>
            <Field
              id="username"
              label="User name"
              value={editedUserName}
              onChange={(e) => setEditedUserName(e.target.value)}
            />
            <Field
              id="firstname"
              label="First name"
              value={firstName}
              disabled
            />
            <Field id="lastname" label="Last name" value={lastName} disabled />

            <div className="profile-header__actions">
              <Button
                type="submit"
                className=""
                disabled={editedUserName === "" || editedUserName === userName}
              >
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
            {status === "failed" && <p>{error}</p>}
          </form>
        </>
      )}
    </div>
  );
}
export default Profileheader;
