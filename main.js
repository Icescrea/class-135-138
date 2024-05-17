function setup()
{
    canvas=createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){

    console.log(' Model Loaded ')
}

function draw(){

    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult)
}

old_results = '';

function gotResult(error,results){
if (error) {
    console.error(error)
}
else {
if
    ((results[0].confidence > 0.5) && (old_results != results[0].label))
{
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    document.getElementById("result_object_name").innerHTML=results[0].label
}
}
}