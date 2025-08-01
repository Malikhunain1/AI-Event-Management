

function analyzeFeedback(comment) {
    const lower = comment.toLowerCase();
    if (lower.includes("excellent") || lower.includes("great") || lower.includes("amazing")) {
        return "positive";
    }
    if (lower.includes("bad") || lower.includes("worst") || lower.includes("poor")) {
        return "negative";
    }
    return "neutral";
}

module.exports = analyzeFeedback;
