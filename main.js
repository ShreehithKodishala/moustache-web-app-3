moustacheX = 0;
moustacheY = 0;


function preload(){

    moustache = loadImage('https://i.postimg.cc/cLtM6Dx8/Daco-5286708.png')

}

function setup() {
canvas = createCanvas(350, 350);
canvas.center();
video = createCapture(VIDEO);
video.size(350, 350);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){

    console.log('PoseNet is initialized');
    
    }
    
    function gotPoses(results){
    
        if(results.length > 0){
    
          console.log(results);
          console.log("moustache x =" + results[0].pose.nose.x);
          console.log("moustache y =" + results[0].pose.nose.y);
          moustacheX = results[0].pose.nose.x-38;
          moustacheY = results[0].pose.nose.y-5;
    
        }
    
        
    
    }

function draw() {

    image(video, 0, 0, 350, 350);
    image(moustache, moustacheX, moustacheY, 75, 45);
}

function take_snapshot(){

save('FilteredImage.jpg');

}