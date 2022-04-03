video="";


function preload(){
video= createVideo('video.mp4');
video.hide();

}
function setup()  {
canvas= createcanvas(480, 380);
canvas.center();

}

function draw() {

image(video, 0, 0, 480, 380);

}
function start()
{

    objectdetecter=ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML=
}

function  modelLoaded() {
console.log("ModelLoaded!")
status = true;
video.loop();
video.speed(1);
video.volume(0);
}