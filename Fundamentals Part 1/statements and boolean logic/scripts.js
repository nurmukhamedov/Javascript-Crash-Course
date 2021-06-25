
let height = 0;

if (height == 0) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}

const favorite = Number(prompt('What is your favorite number'));

if (favorite === 23) {
    console.log('Super 23 is an amazing number');
} else if (favorite === 9) {
    console.log('Super 9 is also an amazing number');
}

if (favorite !== 23) {
    console.log('Why not 23');
}


//Boolean Logic

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
