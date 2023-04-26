nose_x="";
nose_y="";

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
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
    if (results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose X= "+nose_x);
        console.log("nose y= "+nose_y);
    }
}
function preload()
{

}
function draw()
{
image(video,0,0,300,300);
}
function TakeSnap()
{
    save("Clown.png");
}