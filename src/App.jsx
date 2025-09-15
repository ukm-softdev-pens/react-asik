import './App.css';
import { useState } from 'react';

function Profile() {
  return (
    <img className='imagezahrin'
      src="src/images/animasi_zahrin2.jpg"
      alt="Zahrin Savana"
    />
  );
}

const toy = [
  { title: 'Loopy', isToy: false, id: 1 },
  { title: 'Pororo', isToy: false, id: 2 },
  { title: 'Crong', isToy: true, id: 3 },
];

export default function MyApp() {
  const listItems = toy.map(toy =>
    <li
      key={toy.id}
      style={{
        color: toy.isToy ? 'brown' : 'black'
      }}
    >
      {toy.title}
    </li>
  );

  return (
    <div>
      <section>
        <h1 className='fontzahrin'>Zahrin Savana</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>

      <MyButton />
      <MyButton />

      <section>
        <ul>{listItems}</ul>
      </section>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="button" onClick={handleClick}>
      Diklik {count} kali
    </button>
  );
}
