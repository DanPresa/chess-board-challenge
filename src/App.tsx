import { FC } from 'react';
import './App.css';

const App: FC<{}> = () => {
  const board: boolean[][] = Array(8)
    .fill(0)
    .map((_, i) =>
      Array(8)
        .fill(0)
        .map((_, j) => i % 2 === j % 2)
    );

  return (
    <div className='board'>
      {board.map((row, i) => (
        <div key={i} className='row'>
          {row.map((val, j) => (
            <div key={j} className={`item ${val ? 'black' : 'white'}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
