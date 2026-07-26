import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";

import Dashboard from "./pages/Dashboard";
import SampleRegistry from "./pages/SampleRegistry";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import ReportCenter from "./pages/ReportCenter";
import Settings from "./pages/Settings";

function App() {

    return (

        <BrowserRouter>

            <Sidebar />

            <Topbar />

            <main
                style={{
                    marginLeft: "270px",
                    marginTop: "80px",
                    padding: "30px",
                    background: "#f8fafc",
                    minHeight: "100vh",
                    transition: "0.3s"
                }}
            >

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/samples" element={<SampleRegistry />} />

                    <Route path="/analytics" element={<Analytics />} />

                    <Route path="/ai-insights" element={<AIInsights />} />

                    <Route path="/reports" element={<ReportCenter />} />

                    <Route path="/settings" element={<Settings />} />

                </Routes>

            </main>

        </BrowserRouter>

    );

}

export default App;