import React from 'react';

export default function Register() {
  return (
    <main>
      <div className="signUpLoginBox">
        <div className="slContainer">
          <div className="formBoxLeftSignup"></div>
          <div className="formBoxRight">
            <div className="formContent">
              <h2>Inscription</h2>
              <form action="">
                <div className="inputBox">
                  <label htmlFor="pseudo">Pseudo</label>
                  <input type="text" id="pseudo" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" id="password" required />
                </div>
                <div className="inputBox">
                  <label htmlFor="confirmPassword">
                    Confirmer le mot de passe
                  </label>
                  <input type="password" id="confirmPassword" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
