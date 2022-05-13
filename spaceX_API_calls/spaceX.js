const url = "https://api.spacexdata.com/v2/launchpads";

function checkData(data)  {
    console.log(data);
};

d3.json(url).then(spaceXResults => {
    spaceXResults.forEach(pad => {
        console.log(pad.location.latitude);
        console.log(pad.location.longitude);
    });
});
