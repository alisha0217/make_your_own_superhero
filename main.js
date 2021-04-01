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