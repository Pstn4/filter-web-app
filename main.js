nose_x="";
nose_y="";

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',Gotposes);
}
function modelloaded()
{
    console.log("model loaded!");
}
function Gotposes(results)
{
   
   console.log("hello") 
   if (results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y;
        console.log("nose X= "+nose_x);
        console.log("nose y= "+nose_y);
    }
}
function preload()
{
moustache=loadImage("m.png");
}
function draw()
{
image(video,0,0,300,300);
image(moustache,nose_x,nose_y,50,30);
}
function TakeSnap()
{
    save("Clown.png");
}