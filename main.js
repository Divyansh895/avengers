canvas=new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_img_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}


