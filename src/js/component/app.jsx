import React, { useState } from 'react';
import PickWeaponScreen from './PickWeaponScreen';
import GameBoard from './GameBoard';



function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleWeaponPick = (weapon) => {
    setGameStarted(true);
    if (weapon === 'X') {
      setPlayer1(player1 || 'Player 1');
      setPlayer2(player2 || 'Player 2');
    } else {
      setPlayer1(player2 || 'Player 1');
      setPlayer2(player1 || 'Player 2');
    }
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
