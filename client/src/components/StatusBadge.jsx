function StatusBadge({ status }) {

    let className = "";

    switch (status) {
        case "Pending":
            className = "status pending";
            break;

        case "Processing":
            className = "status processing";
            break;

        case "Completed":
            className = "status completed";
            break;

        default:
            className = "status";
    }

    return <span className={className}>{status}</span>;
}

export default StatusBadge;