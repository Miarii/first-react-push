import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  const handleClick = () => {
    alert('Button clicked');
    console.log('Button clicked');
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core Concepts 2</h1>
      {/* <Users /> */}
      <Friends></Friends>
      <Counter />
      <Team />

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert('Button clicked2');
          console.log('Button clicked2');
        }}
      >
        Click2
      </button>
      <button onClick={() => addToFive(4)}>Four</button>
    </>
  );
}

export default App;
