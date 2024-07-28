import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
    
);
reportWebVitals();
