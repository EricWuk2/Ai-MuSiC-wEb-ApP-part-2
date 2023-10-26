
song1 = "";
song2 = "";

 function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }

 function setup(){
    Canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
 }

 function draw() {
    image(video, 0, 0, 600, 500);
 }