import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [ activatePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activatePlayer === 'X' }/>
          <Player initialName="Player 2" symbol="O" isActive={activatePlayer === 'O' }/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activatePlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
