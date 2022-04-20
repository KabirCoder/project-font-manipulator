var left_wrist= 0;
var right_wrist= 0;
var difference= 0;
function preload(){



}

function setup(){

    canvas= createCanvas(500, 408.977);
    canvas.position(560, 248.64);
    
    video= createCapture(VIDEO);
    video.size(481.59, 500)
     
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses)


}


function modelloaded(){

    console.log ("poseNet model is initialized")
}

function gotPoses(results){

    if (results.length>0) {
        console.log(results);
        left_wrist_x= results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference= floor(left_wrist_x-right_wrist_x);
        console.log("The difference is..."+ difference);
    }


}

function draw(){

background("#50BFE6");
document.getElementById("square_sides").innerHTML="The size of the Notice is..."+difference;

fill("yellow");
stroke("white");
textSize(difference);
text('Kabir', 50, 400);

}

