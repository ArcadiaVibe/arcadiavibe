module.exports = async function (context, req) {
    context.log("Hello API endpoint triggered.");

    return {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            message: "API is working",
            app: "ArcadiaVibe",
            timestamp: new Date().toISOString()
        }
    };
};