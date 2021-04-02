var canvas = new fabric.Canvas("myCanvas");

part_image_height = 30;
part_image_width = 30;

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
        part_image_objects = Img;
        part_image_objects.scaleToWidth(part_image_width);
        part_image_objects.scaleToHeight(part_image_height);
        
        part_image_objects.set({

                top:player_y,
                left:player_x

            });

            canvas.add(part_image_objects);
    });
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        

        console.log("p and Shift pressed together");
        part_image_height += 10;
        part_image_width += 10;

        document.getElementById("current_width").innerHTML = part_image_width;
        document.getElementById("current_height").innerHTML = part_image_height;

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

    function up(){

        if (player_y >= 0) {
            player_y = player_y - part_image_height;
            console.log("part image height = " + part_image_height);
            console.log("When up arrow key is pressed X = " + player_x + " and Y = " + player_y);
            canvas.remove(player_objects);
            player_update();
        }
    }
    
    
    function down(){
    
        if (player_y <= 500) {
            player_y = player_y + part_image_height;
            console.log("part image height = " + part_image_height);
            console.log("When up arrow key is pressed X = " + player_x + " and Y = " + player_y);
            canvas.remove(player_objects);
            player_update();
        }
    }
    
    
    function left(){
    
        if (player_x >= 0) {
            player_x = player_x - part_image_width;
            console.log("part image width = " + part_image_width);
            console.log("When up arrow key is pressed X = " + player_x + " and Y = " + player_y);
            canvas.remove(player_objects);
            player_update();
        }
    }

    function right(){

        if (player_x >= 850) {
            player_x = player_x + block_image_width;
            console.log("block image height = " + block_image_width);
            console.log("When up arrow key is pressed X = " + player_x + " and Y = " + player_y);
            canvas.remove(player_objects);
            player_update();
        }
    }
    
