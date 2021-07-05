/*
* @author: Muhammad Waris
*/

class Station {
    /**
     * @param {string} stationName
     * @param {[Number, Number]} stationCord
     */
    constructor(stationName, stationCord) {
        this.stationName = stationName;
        if (isNaN(parseInt(stationCord[0])) || isNaN(parseInt(stationCord[1])))
            throw "There is something fishy in the provided data";
        else
            this.stationCord = stationCord;
    }

    /**
     * findDistance(): Calculate distance b/w
     * two stations
     * @param {Station} suggestedStation
     * @param {Station} currentStation
     * @returns {Number} distance
     * : Distance between two stations
     */
     static findDistance(suggestedStation, currentStation) {
        return Math.sqrt(
            Math.pow(suggestedStation.stationCord[0]-currentStation.stationCord[0], 2) + 
            Math.pow(suggestedStation.stationCord[1]-currentStation.stationCord[1], 2)
        );
    }
}

module.exports = Station