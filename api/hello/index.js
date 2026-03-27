module.exports = async function (context, req) {
    context.log("Hello API endpoint triggered.");

    return {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            status: "Online",
            app: "ArcadiaVibe",
            environment: process.env.WEBSITE_SITE_NAME ? "Production" : "Local",
            region: process.env.REGION_NAME || process.env.WEBSITE_REGION || "Unknown",
            appInsights: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ? "Connected" : "Not Configured",
            timestamp: new Date().toISOString()
        }
    };
};