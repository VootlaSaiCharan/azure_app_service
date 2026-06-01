async function loadInfo() {

    const response = await fetch('/api/info');
    const data = await response.json();

    document.getElementById('appName').innerText = data.applicationName;
    document.getElementById('region').innerText = data.region;
    document.getElementById('resourceGroup').innerText = data.resourceGroup;
    document.getElementById('frontDoor').innerText = data.frontDoorName;
    document.getElementById('hostname').innerText = data.hostname;
    document.getElementById('instanceId').innerText = data.instanceId;
    document.getElementById('version').innerText = data.version;
    document.getElementById('deploymentTime').innerText = data.deploymentTime;
    document.getElementById('currentTime').innerText = data.currentTimeUTC;
    document.getElementById('status').innerText = data.status;
}

loadInfo();

setInterval(loadInfo, 1000);