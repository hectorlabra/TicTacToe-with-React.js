import React, { useState } from 'react';
import PickWeaponScreen from './PickWeaponScreen';
import GameBoard from './GameBoard';



function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleWeaponPick = (player1Name, player2Name) => {
    setPlayer1(player1Name);
    setPlayer2(player2Name);
    setGameStarted(true);
  };

  return (
    <div>
      {gameStarted ? (
        <GameBoard player1={player1} player2={player2} />
      ) : (
        <PickWeaponScreen onWeaponPick={handleWeaponPick} />
      )}
    </div>
  );
}

export default App;
