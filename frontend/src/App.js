import axios from "axios";

function App() {
  const handleClick = async () => {
    
    
    // await axios.get("http://localhost:3000/auth/google").then((res) => {
    //   console.log(res.data);
    // }).catch((err) => {
    //   console.log(err);
    // });
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
