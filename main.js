noseX = 0;
noseY = 0;
function preload(){

}
function setup(){
    canvas = createCanvas(300,300);

    canvas.center();

    video = createCapture(VIDEO);

    video.size(300,300);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet Is intalised');
}
function take_snapshot(){
    save('me.png');
}

function draw(){
    image(video , 0 , 0 ,300 , 300);
    circle(noseX, noseY , 20);
    fill(18, 11, 224);
    stroke(9, 232, 69);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
}
}
