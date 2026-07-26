function PriorityBadge({ days }) {

    let priority = "";
    let className = "";

    if (days >= 3) {
        priority = "High";
        className = "priority high";
    }
    else if (days >= 1) {
        priority = "Medium";
        className = "priority medium";
    }
    else {
        priority = "Low";
        className = "priority low";
    }

    return (
        <span className={className}>
            {priority} Priority
        </span>
    );
}

export default PriorityBadge;