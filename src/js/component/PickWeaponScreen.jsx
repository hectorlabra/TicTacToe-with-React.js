import React, { useState } from 'react';

function PickWeaponScreen() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-light">Pick Your Weapon</h1>
      <h3 className="mt-3 text-light">CHOOSE YOUR WEAPON</h3>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center">
            <input type="text" className="form-control mb-3 mr-2" placeholder="Player 1 Username" />
            <input type="text" className="form-control mb-3 ml-2" placeholder="Player 2 Username" />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#007BFF' }}>X</button>
            <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#FFC107' }}>O</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickWeaponScreen;
