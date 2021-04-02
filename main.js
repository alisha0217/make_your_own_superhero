var canvas = new fabric.Canvas("myCanvas");

block_image_height = 30;
block_image_width = 30;

playerX = 10;
playerY = 10;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
            top: player_y,
            left: player_x
            });
            
            canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_objects = Img;
        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);
        
        block_image_objects.set({

                top:player_y,
                left:player_x

            });

            canvas.add(block_image_objects);
    });
}

window.addEventListener("keydown" my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        

        console.log("p and Shift pressed together");
        block_image_height += 10;
        block_image_width += 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if (keyPressed == '38') {
        
        up();
        console.log("up");

    }

    if (keyPressed == '40') {
        
        down();
        console.log("down");

    }

    if (keyPressed == '39') {
        
        right();
        console.log("right");

    }

    if (keyPressed == '37') {
        
        left();
        console.log("left");

    }

    if (keyPressed == '70') {
        
        new_image("thor_face.png");
        console.log("f");

    }

    if (keyPressed == '66') {
        
        new_image("ironman_body.png");
        console.log("b");

    }

    if (keyPressed == '76') {
        
        new_image("spiderman_legs.png");
        console.log("l");

    }

    if (keyPressed == '82') {
        
        new_image("thor_right_hand.png");
        console.log("r");

    }

    if (keyPressed == '72') {
        
        new_image("captain_america_left_hand.png");
        console.log("h");

    }