/*
* @author: Muhammad Waris
*/

const fs = require('fs');
const Station = require('./Station');

let SWVLSystem = [];
let suggestedRoute = [];
let finalString = '';

try {
    if (process.argv.length < 3) {
        throw "Input file path required. Usage: node main.js E:/Test/input.txt";
    }

    const filePath = process.argv[2];
    parseDataFromFile(filePath);

    // console.time('Calculation');

    suggestedRoute.forEach(
        (suggestedStation) => {
            let closestStation = '', minDistance = Infinity, distance;
            SWVLSystem.forEach((route) => {
                for (let station = 0; station < route.length; station++) {
                    distance = Station.findDistance(suggestedStation, route[station]);
                    if (minDistance > distance) {
                        minDistance = distance;
                        closestStation = route[station].stationName;
                    }
                }
            });
            finalString += `${suggestedStation.stationName} ${closestStation}\n`;
        }
    );
    // console.timeEnd('Calculation');

    // console.time('FileWrite')
    try {
        fs.writeFileSync('output.txt', finalString.substr(0, finalString.length-1));
        console.log('Done! Output file path: ' + __dirname + "\\output.txt" );;
    } catch (error) {
        throw error;
    }

    // console.timeEnd('FileWrite')

    // const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

} catch (error) {
    console.log(error)
}

/**
 * parseDataFromFile(): Read and parse data
 * from input file
 * @param {string} filePath
 */
function parseDataFromFile(filePath) {
    // console.time('fileRead')
    try {
        const inputData = fs.readFileSync(filePath, 'utf-8').split('\n');
        let tempRoute = [];
        let tempStation = 0;
        for (let route = 2; route < inputData.length; route++) {
            if (SWVLSystem.length >= inputData[0]) { 
                tempStation = inputData[route].split(' ');
                suggestedRoute.push(new Station(tempStation.shift(), tempStation));
            }
            else if (isNaN(parseInt(inputData[route]))) {
                tempStation = inputData[route].split(' ');
                tempRoute.push(new Station(tempStation.shift(), tempStation));
            }
            else {
                SWVLSystem.push(tempRoute);
                tempRoute = [];
            }
        }
    } catch (error) {
        throw error;
    }
    // console.timeEnd('fileRead');
}