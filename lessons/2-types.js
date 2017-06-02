var num = 5;
var str = "alma";
var b = true;
var obj = {};
var arr = [];

log(typeof num);
log(typeof str);
log(typeof b);
log(typeof obj);
log(typeof arr)

log(arr instanceof Array);
log(Object.prototype.toString.call(arr));

logHeader("truthy & falsy");

var test = undefined;
if (test) {
    log("it's truthy");
} else {
    log("it's falsy");
}