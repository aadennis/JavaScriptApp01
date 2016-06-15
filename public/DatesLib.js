// http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
}
