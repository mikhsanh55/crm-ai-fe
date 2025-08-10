import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "./layouts/landing-page/Layout"
import BlankLayout from "./layouts/blank-page/Layout"
import AdminLayout from "./layouts/admin-portal/Layout"
import Home from "./pages/Home"
import LoginPage from "./pages/auth/Login"
import RegisterPage from "./pages/auth/Register"
import NotFoundPage from "./pages/NotFoundPage"
import Dashboard from './pages/dashboard/Dashboard'

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<LandingPageLayout />}>
                    <Route index element={<Home />} />
                </Route>

                {/* Blank Page */}
                <Route path="/" element={<BlankLayout />}>
                    {/* Blank Layout (used for login, register, 404 pages) */}
                    {/* Here we use the children prop to directly pass in the page components */}
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    {/* 404 Catch-all */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                {/* Admin Dashboard */}
                <Route path="/" element={<AdminLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;