// Coding Challange 

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];
const tips = [];
const totals = [];

const calcTip = function(calcValue) {
    if (calcValue >= 50 && calcValue <= 300) {
        return calcValue * 0.15;
    } else {
        return calcValue * 0.20;
    }
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    totals.push(`${bills[i] + tip}`);
}
console.log(tips);
console.log(totals);
