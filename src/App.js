import './App.css';
import Main_game from './components/Main_game'; 
import papierImage from './images/papier.jpg'; 


function App() {
  const appStyle = {
    backgroundImage: `url(${papierImage})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:'100vh',
  };

  return (
    <div className="App" style={appStyle}>
      <Main_game />
    </div>
  );
}

export default App;
