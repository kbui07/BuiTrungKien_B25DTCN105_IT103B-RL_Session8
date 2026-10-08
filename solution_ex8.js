const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

let index = portIds.indexOf('S01');
portStatuses[index] = 'CHARGING';

index = portIds.indexOf('S03');
portStatuses[index] = 'AVAILABLE';

let availableCount = 0;
let maxPower = 0;
let maxPort = '';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
        if (portPowersKw[i] > maxPower) {
            maxPower = portPowersKw[i];
            maxPort = portIds[i];
        }
    }
}

console.log('===== BÁO CÁO TRẠM SẠC =====');
for (let i = 0; i < portIds.length; i++) {
    console.log(
        portIds[i] + ' - ' +
        portStatuses[i] + ' - ' +
        portPowersKw[i] + ' kW'
    );
}

console.log('Tổng số trụ AVAILABLE:', availableCount);
console.log('Trụ AVAILABLE có công suất lớn nhất:', maxPort);
console.log('Công suất:', maxPower + ' kW');