canvas = document.getElementById("parking_canvas");
ctx = canvas.getContext("2d");
car_image_1 = "https://www.pngfind.com/pngs/m/75-750271_car-top-view-png-audi-transparent-png.png";
car_image_1_square = "https://i.pinimg.com/736x/7c/80/84/7c80846930c0a9a6ea1640d602cc913e.jpg";
car_1_x = 483;
car_1_y = 350;
function display_car() {
   car_image_1_tag = new Image();
   car_image_1_tag.onload = upload_car_1_with_square;
   car_image_1_tag.src = car_image_1;

   car_image_1_square_tag = new Image();
   car_image_1_square_tag.onload = upload_car_1_with_square;
   car_image_1_square_tag.src = car_image_1_square;
}
function upload_car_1_with_square() {
    ctx.drawImage(car_image_1_square_tag, 33, 100, 100, 165);
    
    ctx.drawImage(car_image_1_tag, car_1_x, car_1_y, 100, 155);
}
window.addEventListener("keydown", keydown);
function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}
function down() {
    if (car_1_y <= 500) {
        car_1_y = car_1_y + 10;
        console.log("When down arrow is pressed, x = " + car_1_x + " y = " + car_1_y);
        upload_car_1_with_square();
        
    }
}

function up() {
    if (car_1_y >= 0) {
        car_1_y = car_1_y - 10;
        console.log("When up arrow is pressed, x = " + car_1_x + " y = " + car_1_y);
        upload_car_1_with_square();
    }
}
function left() {
    if (car_1_x >= 0) {
        car_1_x = car_1_x - 10;
        console.log("When left arrow is pressed, x = " + car_1_x + " y = " + car_1_y);
        upload_car_1_with_square();
    }
}
function right() {
    if (car_1_x <= 700) {
        car_1_x = car_1_x + 10;
        console.log("When right arrow is pressed, x = " + car_1_x + " y = " + car_1_y);
        upload_car_1_with_square();
    }
}