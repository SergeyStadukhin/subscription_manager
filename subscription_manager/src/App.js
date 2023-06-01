import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
let isLogging = true;

const App = () => {
  return (
    <div className="App">
      {isLogging 
      ?<LoginPage />
      :<MainPage />}
      
    </div>
  );
}

export default App;
