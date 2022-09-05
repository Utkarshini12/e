import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './components/AppRoutes';

function App() {
  // fetch("https://ecommce-be.herokuapp.com/ecomm/api/v1/login").then().catch
  return (
   <AppRoutes />
  );
}

export default App;
