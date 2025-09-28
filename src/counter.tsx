import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="font-bold">Hasil Jumlah {count}</h1>
      <p className="mb-4">Simple Counter dengan React</p>
      <div className="flex flex-row justify-center gap-4">
        <button onClick={() => setCount(count + 1)}>Tambah +</button>
        <button onClick={() => setCount(count - 1)}>Kurang -</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
