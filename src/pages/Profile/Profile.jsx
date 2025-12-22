import accounts from "../../data/Account";
import Account from "../../components/Account/Account";
import Profileheader from "../../components/Profileheader/Profileheader";
import { useSelector } from "react-redux";

function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return null;
  }

  const { firstName, lastName, userName } = currentUser;

  return (
    <>
      <Profileheader
        userName={userName}
        firstName={firstName}
        lastName={lastName}
      />
      {accounts.map((account) => (
        <Account
          key={account.id}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </>
  );
}

export default Profile;
