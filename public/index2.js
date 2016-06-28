var book = {};
book.title = "Beginning JSON"
book.publishDate = new Date("12/10/2015"); //US format
book.publisher = "Apress";
book.topic = "JSON Data Interchange Format"
var stringifiedData = JSON.stringify(book);
console.log(stringifiedData);
// ["value held by index 0","2015-01-01T05:00:00.000Z","value held by index 2","value held by index 3"]
/* var dateReviver = function (k, v) {
    var ISOregExp = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    if (typeof v === "string") {
        if (ISOregExp.test(v)) {
            return new Date(v);
        }
    }
    return v;
} 
var revivedValues = JSON.parse(stringifiedData, dateReviver);
console.log(revivedValues); */