import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart} from './redux/action';

function App() {
  const dispatch = useDispatch()

  const productData = {
    "Name":"I phone",
    "Price":1000,
    "Quantity":2
  }

  return (
    <div className="App">
        <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/a1b55eb7-3c80-46ad-bdd9-1d55b0032d0e">
</iframe>

    </div>
  );
}

export default App;
