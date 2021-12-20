moustacheX = 0;
moustacheY = 0;

function preload() {
    clown_nose = loadImage ('Moustache.png')
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill(255, 0, 0);
    stroke(255, 0, 0);
  //  circle(moustacheX, moustacheY, 20);
    image(clown_nose,moustacheX-200,moustacheY-320,400,400);
}

function take_snapshot() {
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log('PoseNet Is Intialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        moustacheX = results[0].pose.nose.x
        moustacheY = results[0].pose.nose.y
        console.log("moustache x = " + results[0].pose.nose.x);
        console.log("moustache y = " + results[0].pose.nose.y);

    }
}