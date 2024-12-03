import './App.css';

import 'primeicons/primeicons.css';

import 'primereact/resources/primereact.min.css'; // PrimeReact CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme (optional)
import 'primeflex/primeflex.css'; // PrimeFlex for grid system
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from "./components/MainPage";
import LibraryCatalogPage from "./components/LibraryCatalogPage";
import EventsPage from "./components/EventsPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import LocationHours from "./components/LocationHours";
import ResearchPage from "./components/ResearchPage";
import CheckoutsPage from "./components/CheckoutsPage";
import {AuthProvider} from "./context/AuthContext";
import InterlibraryLoansPage from "./components/InterlibraryLoansPage";

function App() {
    return (
        <AuthProvider>
            <div className="App" style={{overflowX: "hidden", overflowY: "hidden"}}>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/library" element={<LibraryCatalogPage isDigital={false}/>} />
                        <Route path="/library/digital" element={<LibraryCatalogPage isDigital={true}/>} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/locations" element={<LocationHours />} />
                        <Route path="/research" element={<ResearchPage />} />
                        <Route path="/checkouts" element={<CheckoutsPage />} />
                        <Route path="/loans" element={<InterlibraryLoansPage />} />
                    </Routes>
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;
