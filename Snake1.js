let x = 0;
let y = 0;
let z = 0;
let r = 0;
let g = 0;
let b = 0;
let rx = 0;
let rz = 0;
let c = 0;

function setup() {
    createCanvas(1420, 780, WEBGL);
}

function draw() {
    background(220);

    //perspective(c);

    orbitControl();

    //rotateX(c);
    //rotateY(c);
    //rotateZ(c);
    //c+= 0.01

    if (r == 0) {
        r = random(255);
        g = random(255);
        b = random(255);
    }

    for (let pz = 200; pz > -1000; pz-=40) {
        for (let px = -300; px < 350; px+= 40) {
            push();
            noStroke();
            r = random(255);
            g = random(255);
            b = random(255);
            emissiveMaterial(0, 0,0);
            translate(px, 100, pz);
            box(40);

            pop();
        }
    }

    push();
    directionalLight(255, 255, 255, 0, 100, -100);

    translate(0, 100, 0);
    noStroke();
    ambientMaterial(255);


    if (keyIsPressed && keyCode == LEFT_ARROW) {
        x -= 5;
    } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
        x += 5;
    }
    if (keyIsPressed && keyCode == DOWN_ARROW) {
        z += 5;
        y += 1;
    } else if (keyIsPressed && keyCode == UP_ARROW) {
        z -= 5;
        y -= 1;
    }

    push();
    r = random(255);
    g = random(255);
    b = random(255);
    emissiveMaterial(r, g, b);
    translate(rx, 0, rz);
    sphere();
    pop();

    push();
    translate(x, 0, z);
    sphere();
    pop();

    pop();

    if (abs(x-rx) <= 50 && abs(z-rz) <= 50) {
        rx = random(-100, 100);
        rz = random(-800, 200);
        c = random(1, 2.5);
    }
}