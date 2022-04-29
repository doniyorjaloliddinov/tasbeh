
let counter = document.querySelector("#js-count-label");
let countBtn = document.getElementById("js-count-btn");
let clearBtn = document.getElementById("js-clear-btn");
let elOutput = document.getElementById("js-output");

let message = "";
let count = 0;

countBtn.onclick  = function() {
    count += 1;
    counter.innerHTML = count;

    if (count <= 33) {
        message = "Субханаллох";
    } 
    else if (count <= 66){
        message = "Алхамдулиллах";
    }
    else if (count <= 99) {
        message = "Аллоху Акбар";
    }
    else {
        message = "Ла илаҳа иллалоҳу вахдаҳу ла шарика лаҳ лаҳул мулку ва лаҳул ҳамд йуҳйи ва йумит ва ҳува ҳаййул ла йамут бийадиҳил хойр ва ҳува ъала кулли шайъин қодир";
    }
    elOutput.textContent = message;
}

clearBtn.onclick = function() {
    window.location.reload();
}




