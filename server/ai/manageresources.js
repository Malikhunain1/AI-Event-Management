

function manageResources(resourcesUsed, totalResources) {
    const usageReport = {};
    totalResources.forEach(resource => {
        const used = resourcesUsed.includes(resource);
        usageReport[resource] = used ? "used" : "available";
    });
    return usageReport;
}

module.exports = manageResources;
