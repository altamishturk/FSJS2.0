// import { Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
// import Tables from './components/TableCard';
// import Maps from './pages/Maps';
// import Footer from './components/Footer';

// Tailwind CSS Style Sheet
// import './assets/styles/index.css';

function Admin() {
    // const navigator = useNavigate();
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                {/* <Router> */}
                    {/* <Route exact path="/" component={Dashboard} /> */}
                    {/* <Route exact path="/settings" component={Settings} /> */}
                    {/* <Route exact path="/tables" component={Tables} /> */}
                    {/* <Route exact path="/maps" component={Maps} /> */}
                    {/* <Redirect from="*" to="/" /> */}
                {/* </Router> */}
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Admin;
