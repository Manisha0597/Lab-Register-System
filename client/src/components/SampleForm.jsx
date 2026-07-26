import { useState, useEffect } from "react";
import "./SampleForm.css";

function SampleForm({ sample, onSave, onClose }) {

    const [formData, setFormData] = useState({
        patient: "",
        test: "",
        technician: "",
        collected: "",
        status: "Pending",
        days: 0,
    });

    useEffect(() => {
        if (sample) {
            setFormData(sample);
        }
    }, [sample]);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        onSave({
            ...formData,
            id: sample ? sample.id : Date.now(),
            days: Number(formData.days),
        });

        onClose();
    }

    return (
        <form className="sample-form" onSubmit={handleSubmit}>

            <div className="form-grid">

                <div className="form-group">
                    <label>Patient Name</label>
                    <input
                        name="patient"
                        value={formData.patient}
                        onChange={handleChange}
                        placeholder="Enter patient name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Test Name</label>
                    <input
                        name="test"
                        value={formData.test}
                        onChange={handleChange}
                        placeholder="Blood Test"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Technician</label>
                    <input
                        name="technician"
                        value={formData.technician}
                        onChange={handleChange}
                        placeholder="Technician Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Collection Date</label>
                    <input
                        type="date"
                        name="collected"
                        value={formData.collected}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Waiting Days</label>
                    <input
                        type="number"
                        name="days"
                        value={formData.days}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Completed</option>
                    </select>
                </div>

            </div>

            <div className="form-buttons">

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={onClose}
                >
                    Cancel
                </button>

                <button type="submit">
                    {sample ? "Update Sample" : "Add Sample"}
                </button>

            </div>

        </form>
    );
}

export default SampleForm;