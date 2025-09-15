import "./App.css";

interface WorldProps {
  name: string;
}

function Child({ name }: WorldProps) {
return <p className="text-7xl text-center bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer hover:text-8xl"><i>Hello World</i>
<br /> myName: Adrian Trinata
</p>
}

export default function App() {
  return <Child name="World" />;
}
