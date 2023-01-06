function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(450,450);
    canvas.position(600,130);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Intialized');
}

function gotPoses(results) 
{
   if(results.length > 0)
   {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    console.log("leftWristX ="+leftWristX + "rightWristX ="+ rightWristX +"difference ="+ difference);

   }
}
function draw() {
    background('#969A97');

    textSize(difference);
    Fill('#FFE787');
    text('Bhavesh',50,400);
}
