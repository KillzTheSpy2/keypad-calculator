document.getElementById("submit").addEventListener('click', () => {
    let btn1 = Number(document.getElementById("fbutton").value);
    let btn2 = Number(document.getElementById("sbutton").value);
    let btn3 = Number(document.getElementById("tbutton").value);
    let btn4 = Number(document.getElementById("lbutton").value);
    let x = 0;
    let y = 0;
    let z = 0;
    let order;

    // X calc

    // btn 1 calc
    if (btn1 < 10) {
        x = 15;
    } else if (btn1 < 20 && btn1 > 10) {
        x = 20;
    } else if (btn1 < 80 && btn1 > 20) {
        x = 30;
    } else {
        x = 10;
    }

    // btn 2 calc
    if (btn2 < 10) {
        x += 10;
    }else if (btn2 < 20 && btn2 > 10) {
        x *= 2;
    }else if (btn2 < 80 && btn2 > 20) {
        x *= 3;
    } else {
        x -= 10;
    }

    // btn 3 calc
    if (btn3 < 10) {
        x *= 2;
    } else if (btn3 < 20 && btn3 > 10) {
        x *= 3;
    } else if (btn3 < 80 && btn3 > 20) {
        x -= 5;
    } else {
        x = x;
    }

    // btn 4 calc
    if (btn4 < 10) {
        x *= 2;
    } else if (btn4 < 20 && btn4 > 10) {
        x += 20;
    } else if (btn4 < 80 && btn4 > 20) {
        x += 50;
    } else {
        x *= 3;
    }

    // Y calc
    y = Number((btn1 + btn2 + btn3 + btn4));
    y /= 2;


    // Z calc
    z = Number((x - y));

    // Pattern Logic
    if (z <= 0) {
        order = "1234";
    } else if (0.5 <= z && z <= 19.5) {
        order = "1243";
    } else if (20 <= z && z <= 49.5) {
        order = "4321";
    } else if (50 <= z && z <= 89.5) {
        order = "2413";
    } else if (z >= 90) {
        order = "3124";
    }

    
    document.getElementById("order").textContent = order
})
