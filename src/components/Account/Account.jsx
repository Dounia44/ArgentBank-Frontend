import Button from "../button/Button";
import "./Account.scss";

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__description">{description}</p>
      </div>

      <div className="account__content-wrapper cta">
        <Button className="button-block">View transactions</Button>
      </div>
    </section>
  );
}
export default Account;
