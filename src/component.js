function App() {
    const [count, setCount] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    return (
      <div className="App">
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }