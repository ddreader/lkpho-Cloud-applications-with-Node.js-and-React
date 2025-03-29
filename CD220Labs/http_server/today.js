/*
// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return aestTime; // Return the formatted date and time
};
*/
module.exports = {
    getDate: function getDate() {
        return new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    },
    getHours: function getHour() {
        let dateObj = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        let tempDate = new Date(dateObj);
        return tempDate.getHours();
    },
    getDateObject: function getDateObject() {
        let dateObj = new Date();
        let aestTime = new Date(dateObj.toLocaleString('en-US', { timeZone: 'America/New_York' }));
        return aestTime;
    }
};
