import React, { useState } from 'react';
import '../../styles/index.css';  
import '../../styles/bootstrap.min.css'; 

function PickWeaponScreen({ onWeaponPick }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleWeaponPick = (weapon) => {
    onWeaponPick(weapon);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="text-light">Pick Your Weapon</h1>
      <h3 className="mt-3 text-light">CHOOSE YOUR WEAPON</h3>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="form-control mb-3 mr-2"
              placeholder="Player 1 Username"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3 ml-2"
              placeholder="Player 2 Username"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#007BFF' }}
              onClick={() => handleWeaponPick('X')}
            >
              X
            </button>
            <button
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: '#FFC107' }}
              onClick={() => handleWeaponPick('O')}
            >
              O
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickWeaponScreen;
