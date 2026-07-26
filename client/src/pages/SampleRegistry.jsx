import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import SampleCard from "../components/SampleCard";
import SampleDetailsDrawer from "../components/SampleDetailsDrawer";
import DashboardStats from "../components/DashboardStats";
import SmartAlert from "../components/SmartAlert";
import AnalyticsCharts from "../components/AnalyticsCharts";
import FloatingButton from "../components/FloatingButton";
import Modal from "../components/Modal";
import SampleForm from "../components/SampleForm";
import LabHealthCenter from "../components/LabHealthCenter";
import AIRecommendationPanel from "../components/AIRecommendationPanel";
import OperationsCenter from "../components/OperationsCenter";
import PredictiveRiskPanel from "../components/PredictiveRiskPanel";
import AIChatAssistant from "../components/AIChatAssistant";

import { recommendTechnician } from "../utils/technicianAI";

import API from "../api/sampleApi";

function SampleRegistry() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedSample, setSelectedSample] = useState(null);
    const [samples, setSamples] = useState([]);
    const [editingSample, setEditingSample] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        loadSamples();
    }, []);

    async function loadSamples() {
        try {
            // ✅ Fixed API call
            const res = await API.get("/");

            console.log("Loaded Samples:", res.data);

            setSamples(res.data);
        } catch (error) {
            console.error("Failed to load samples:", error);
        }
    }

    const filteredSamples = samples.filter((sample) => {
        const matchesSearch =
            sample.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sample.test.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sample.id.toString().includes(searchTerm);

        const matchesStatus =
            statusFilter === "All" ||
            sample.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const suggestedTechnician = recommendTechnician(samples);

    async function saveSample(sample) {
        try {
            if (editingSample) {
                await API.put(`/${sample.id}`, sample);
            } else {
                await API.post("/", sample);
            }

            setShowForm(false);
            setEditingSample(null);

            loadSamples();
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteSample(id) {
        try {
            await API.delete(`/${id}`);
            loadSamples();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="sample-registry">

            <h2>🧪 Sample Registry</h2>

            <div
                style={{
                    background: "#dcfce7",
                    padding: "15px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    borderLeft: "6px solid green"
                }}
            >
                🤖 <strong>AI Recommendation</strong>
                <br />
                Assign the next sample to
                <strong> {suggestedTechnician}</strong>
                {" "}because this technician currently has the lowest workload.
            </div>

            <DashboardStats samples={samples} />

            <LabHealthCenter samples={samples} />

            <AIRecommendationPanel samples={samples} />

            <OperationsCenter samples={samples} />

            <PredictiveRiskPanel samples={samples} />

            <SmartAlert samples={samples} />

            <AnalyticsCharts samples={samples} />

            <AIChatAssistant samples={samples} />

            <div className="toolbar">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <FilterDropdown
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            </div>

            <p>
                Status Filter :
                <strong> {statusFilter}</strong>
            </p>

            <p>
                Searching for :
                <strong> {searchTerm || " All Samples"}</strong>
            </p>

            <h3>
                Showing {filteredSamples.length} Sample(s)
            </h3>

            <div className="sample-grid">
                {filteredSamples.map((sample) => (
                    <SampleCard
                        key={sample.id}
                        sample={sample}
                        onViewDetails={setSelectedSample}
                        onEdit={(sample) => {
                            setEditingSample(sample);
                            setShowForm(true);
                        }}
                        onDelete={deleteSample}
                    />
                ))}
            </div>

            <SampleDetailsDrawer
                sample={selectedSample}
                onClose={() => setSelectedSample(null)}
            />

            <FloatingButton
                onClick={() => {
                    setEditingSample(null);
                    setShowForm(true);
                }}
            />

            {showForm && (
                <Modal
                    title={
                        editingSample
                            ? "Edit Sample"
                            : "Add Sample"
                    }
                    onClose={() => {
                        setShowForm(false);
                        setEditingSample(null);
                    }}
                >
                    <SampleForm
                        sample={editingSample}
                        onSave={saveSample}
                        onClose={() => {
                            setShowForm(false);
                            setEditingSample(null);
                        }}
                    />
                </Modal>
            )}

        </div>
    );
}

export default SampleRegistry;