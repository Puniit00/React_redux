import './App.css';
import FruitContainer from './component/FruitContainer';
import {Provider} from 'react-redux';//rpovides the redux store to the react application
import store from './Redux/Store';

function App() {
  return (
   <Provider store= {store}>
     <div>
     <FruitContainer/>
   </div>
   </Provider>// store= {store} is in app.js because it will allow almost all component to access store from redux.
   
  );
}

export default App;
