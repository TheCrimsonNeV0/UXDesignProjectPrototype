import './App.css';

import 'primeicons/primeicons.css';

import 'primereact/resources/primereact.min.css'; // PrimeReact CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme (optional)
import 'primeflex/primeflex.css'; // PrimeFlex for grid system
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from "./components/MainPage";
import LibraryCatalogPage from "./components/LibraryCatalogPage";
import EventsPage from "./components/EventsPage";

function App() {
    return (
        <PrimeReactProvider>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/library" element={<LibraryCatalogPage />} />
                        <Route path="/events" element={<EventsPage />} />
                    </Routes>
                </Router>
            </div>
        </PrimeReactProvider>
    );
}

export default App;
