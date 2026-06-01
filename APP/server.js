const express = require('express');
const path = require('path');

const app = express();

const deploymentTime = new Date().toISOString();

app.use(express.static('public'));

app.get('/api/info', (req, res) => {
    res.json({
        applicationName: process.env.WEBSITE_SITE_NAME || "Unknown",
        region: process.env.REGION || "Unknown",
        resourceGroup: process.env.RESOURCE_GROUP || "Unknown",
        frontDoorName: process.env.FRONTDOOR_NAME || "Unknown",
        hostname: process.env.WEBSITE_HOSTNAME || "Unknown",
        instanceId: process.env.WEBSITE_INSTANCE_ID || "Unknown",
        version: process.env.APP_VERSION || "1.0.0",
        deploymentTime: deploymentTime,
        currentTimeUTC: new Date().toISOString(),
        status: "Healthy"
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});