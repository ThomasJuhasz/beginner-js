alma();
// hoisting1();
// hoisting2();

function alma () {
    if (true) {
        var num = 5;
        // let num = 5;
        // const num = 5;
    }

    if (num == "5") {
        log(num);
    } else {
        log('nope ' + num);
    }
}

function hoisting1 () {
    if (num) {
        log(num);
    } else {
        log('nope ' + num);
    }
    
    var num = 5;
}

function hoisting2() {
    lala();

    function lala() {
        log("lala");
    }
}