function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/j2Wxcnns_/model.json",model_ready);
}
 
function model_ready(){
    classifier.classify(gotResults);
}