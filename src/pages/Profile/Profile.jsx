import accounts from "../../data/Account";
import Account from "../../components/Account/Account";
import Profileheader from "../../components/profileheader/profileheader";

function Profile() {
  const firstName = "Tony";
  const lastName = "Jarvis";
  return (
    <>
      <Profileheader firstName={firstName} lastName={lastName} />
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
