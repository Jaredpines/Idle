if(localStorage.getItem("bKey") != null){
    broccoli = Number(localStorage.getItem("bKey"))
}else{
    broccoli = 0
}

if(localStorage.getItem("bCIKey") != null){
    broccoliClickIncrease = Number(localStorage.getItem("bCIKey"))
}else{
    broccoliClickIncrease = 1
}

if(localStorage.getItem("bPSIKey") != null){
    broccoliPerSecIncrease = Number(localStorage.getItem("bPSIKey"))
}else{
    broccoliPerSecIncrease = 0
}

if(localStorage.getItem("uCKey") != null){
    UpgradeAC = Number(localStorage.getItem("uCKey"))
}else{
    UpgradeAC = 2
}

if(localStorage.getItem("uPSKey") != null){
    UpgradeAPS = Number(localStorage.getItem("uPSKey"))
}else{
    UpgradeAPS = 2
}

if(localStorage.getItem("sCKey") != null){
    showC = Number(localStorage.getItem("sCKey"))
}else{
    showC = 2
}

if(localStorage.getItem("sPSKey") != null){
    showPS = Number(localStorage.getItem("sPSKey"))
}else{
    showPS = 2
}

UpgradeS = false
UpgradeS2 = false

document.getElementById("broccoliAmount").innerHTML = broccoli
document.getElementById("broccoliClickAmount").innerHTML = broccoliClickIncrease
document.getElementById("broccoliPerSecAmount").innerHTML = broccoliPerSecIncrease

function updateButtons(){
    if(broccoli >= UpgradeAC/2 && UpgradeS == false && broccoliClickIncrease < showC){
        var x = document.createElement("BUTTON")
        var t = document.createTextNode("Upgrade click - " + UpgradeAC + " broccoli")
        x.appendChild(t)
        x.addEventListener("click", deleteCB);
        x.id = "Upgrade"
        document.body.appendChild(x);
        UpgradeS = true
        document.body.insertBefore(document.getElementById("Upgrade"), document.getElementById("reset"));
    }

    if(broccoli >= (UpgradeAPS)/2 && UpgradeS2 == false && broccoliPerSecIncrease < showPS){
        var x = document.createElement("BUTTON")
        var t = document.createTextNode("Upgrade per second - " + UpgradeAPS + " broccoli")
        x.appendChild(t)
        x.addEventListener("click", deletePSB);
        x.id = "Upgrade2"
        document.body.appendChild(x);
        UpgradeS2 = true
        document.body.insertBefore(document.getElementById("Upgrade2"), document.getElementById("reset"));
    }
    
}



function createBroccoli() {
    broccoli += broccoliClickIncrease
    document.getElementById("broccoliAmount").innerHTML = broccoli
    document.getElementById("broccoliClickAmount").innerHTML = broccoliClickIncrease
    localStorage.setItem("bKey", broccoli);
}

function broccoliPS() {
    broccoli += broccoliPerSecIncrease
    document.getElementById("broccoliAmount").innerHTML = broccoli
    document.getElementById("broccoliPerSecAmount").innerHTML = broccoliPerSecIncrease
    localStorage.setItem("bKey", broccoli);
}


//b = document.getElementById("Upgrade")
//b.disabled = true
function deleteCB(){  
    if(broccoli >= UpgradeAC){
        document.getElementById("Upgrade").parentNode.removeChild(document.getElementById("Upgrade"))
        broccoli -= UpgradeAC
        localStorage.setItem("bKey", broccoli);
        broccoliClickIncrease += 1
        UpgradeAC *= 2
        showC += 1
        UpgradeS = false
        localStorage.setItem("bCIKey", broccoliClickIncrease);
        localStorage.setItem("uCKey", UpgradeAC);
        localStorage.setItem("sCKey", showC);
        document.getElementById("broccoliAmount").innerHTML = broccoli
        document.getElementById("broccoliClickAmount").innerHTML = broccoliClickIncrease
        return false
    }
}

function deletePSB(){  
    if(broccoli >= UpgradeAPS){
        document.getElementById("Upgrade2").parentNode.removeChild(document.getElementById("Upgrade2"))
        broccoli -= UpgradeAPS
        localStorage.setItem("bKey", broccoli);
        broccoliPerSecIncrease += 1
        UpgradeAPS **= 2
        showPS += 1
        UpgradeS2 = false
        localStorage.setItem("bPSIKey", broccoliPerSecIncrease);
        localStorage.setItem("uPSKey", UpgradeAPS);
        localStorage.setItem("sPSKey", showPS);
        document.getElementById("broccoliAmount").innerHTML = broccoli
        document.getElementById("broccoliPerSecAmount").innerHTML = broccoliPerSecIncrease
        return false
    }
}

function reset(){
    broccoli = 0
    broccoliClickIncrease = 1
    broccoliPerSecIncrease = 0
    UpgradeAC = 2
    UpgradeAPS = 2
    showC = 2
    showPS = 2
    UpgradeS = false
    UpgradeS2 = false
    if(document.getElementById("Upgrade") != null){
        document.getElementById("Upgrade").parentNode.removeChild(document.getElementById("Upgrade"))
    }
    if(document.getElementById("Upgrade2") != null){
        document.getElementById("Upgrade2").parentNode.removeChild(document.getElementById("Upgrade2"))
    }
    document.getElementById("broccoliAmount").innerHTML = broccoli
    document.getElementById("broccoliClickAmount").innerHTML = broccoliClickIncrease
    document.getElementById("broccoliPerSecAmount").innerHTML = broccoliPerSecIncrease
    localStorage.setItem("bKey", broccoli);
    localStorage.setItem("uCKey", UpgradeAC);
    localStorage.setItem("uPSKey", UpgradeAPS);
    localStorage.setItem("sCKey", showC);
    localStorage.setItem("sPSKey", showPS);
    localStorage.setItem("bCIKey", broccoliClickIncrease);
    localStorage.setItem("bPSIKey", broccoliPerSecIncrease);
}

setInterval(updateButtons, 0);
setInterval(broccoliPS, 1000);