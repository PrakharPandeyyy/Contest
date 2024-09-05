

function App() {
  const handleClick = async () => {
    window.location.href = 'http://localhost:3000/auth/google';
    
    
    
  };
  return (
    <div className="App">
      <h1>Hii</h1>
      <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;
