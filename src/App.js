import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CardComponent } from './components/card';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
    // const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            const resp = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            console.log(resp.data);
            return resp.data;
        };
        getData();
    }, []);

    return (
        <Provider store={store}>
            <div>
                <CardComponent />
            </div>
        </Provider>
    );
}

export default App;
