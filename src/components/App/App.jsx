// add useState
// add useEffect
import React, {useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
// Variable to store 
let [ShoppingList, setShoppingList] = useState([])


// fetching shopping list
const fetchShoppingList = () => {
    axios.get('/list')
    .then(response => {
        setShoppingList(response.data)
    console.log('This is the shopping list, setShoppingList')

    }).catch(err => {
        alert('err Adding List');
        console.log(err);
    })
}

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
