let farePrice;

function distanceFromHqInBlocks(location) {
    let distance = Math.abs(location-42)
    return (distance)
}
function distanceFromHqInFeet(location) {
    let distanceinFeet = Math.abs((location-42)*264)
    return distanceinFeet
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelledinFeet = Math.abs((start-destination)*264)
    return distanceTravelledinFeet
}



function calculatesFarePrice(start,destination) {
    const test = distanceTravelledInFeet(start,destination);
    if (test <= 400) {
        farePrice = 0
        return farePrice;
    }
    else if (test <= 2000) {
        return farePrice = (test-400)* .02
    }
    else if (test <= 2500) {
        return farePrice = 25
    }
    else { return 'cannot travel that far'}
    }




// function calculatesFarePrice(distanceTravelledInFeet) {
//     if (distance > 2500) {
// response = 'No can do.'
// }
//     else if (distance > 2000) {
// response = 'I will gladly take your 25 dollars.'
// }
//     else if (distance > 400) { 
// response = 'It is 2 cents per mile'
// };
//     return response;
// }


//free sample?


// navigate the last question? 