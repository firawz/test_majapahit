import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './screen/home';

function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default App;
