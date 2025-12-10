import accounts from "../../data/Account";
import Account from "../../components/Account/Account";

function Profile() {
  return (
    <>
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
