var leftwristX = 0;
var rightwristX = 0;
var noseX = 0;
var noseY = 0;
difference = 0;

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(700, 200);

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(100, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        difference = floor(leftwristX - rightwristX);
        console.log("The x coordinates of left wrist are: " + leftwristX + " and the coordinates for right wrist are: " + rightwristX + " and the difference is: " + difference);
    }
}

function draw(){
    background("white");
    fill("black");
    stroke("black");
    textSize(difference);
    text('Anushree Upadhyay', noseX, noseY);
    document.getElementById("font-size").innerHTML = difference;
}


