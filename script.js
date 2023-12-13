let indexMaual = 0, indexAuto = 0;
function changeColorManually() {
    ++indexMaual;
    if (indexMaual == 1) {
        document.getElementById('b1').style.background = "rgb(216, 219, 30)";
    } else if (indexMaual == 2) {
        document.getElementById('b1').style.background = "rgb(37, 179, 2)";
    } else {
        document.getElementById('b1').style.background = "rgb(219, 30, 30)";
        indexMaual = 0;
    }
}

function startAutoCycle() {
    setInterval(changeColorAutomatically, 10000);
    function changeColorAutomatically() {
        ++indexAuto;
        if (indexAuto == 1) {
            document.getElementById('b2').style.background = "rgb(216, 219, 30)";
        } else if (indexAuto == 2) {
            document.getElementById('b2').style.background = "rgb(37, 179, 2)";
        } else {
            document.getElementById('b2').style.background = "rgb(219, 30, 30)";
            indexAuto = 0;
        }
    }
}

