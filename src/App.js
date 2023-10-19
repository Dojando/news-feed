import React from 'react';
import NewsList from './components/NewsList/NewsList';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Dernières News</h1>
            </header>
            <NewsList />
        </div>
    );
}

export default App;
