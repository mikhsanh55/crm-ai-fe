import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout"
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<LandingPageLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;