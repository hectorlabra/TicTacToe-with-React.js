import React from 'react';

function PickWeaponScreen() {
  return (
    <div className="container text-center mt-5">
      <h1>Pick Your Weapon</h1>
      <h3 className="mt-3">CHOOSE YOUR WEAPON</h3>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <input type="text" className="form-control mb-3" placeholder="Player 1 Username" />
          <input type="text" className="form-control mb-3" placeholder="Player 2 Username" />
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">X</button>
            <button className="btn btn-primary">O</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickWeaponScreen;
