
//Check if browser supprts Web Speech API by checking is webkitSpeechRecignition exists. 
//Create webkitSpeechRecignition object which provides the speech interface
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var speechRecognition = new webkitSpeechRecognition();


var textbox = $("#textbox")

var instructions = $("#instructions")

//create variable for the content that is spken into the microphone 
var content = ''

//continuosly get input from the user through recogniton 
speechRecognition.continuous = true

//method to start recognition of voice 
speechRecognition.onstart = function() {
    instructions.text("Voice Recogniton running")
}


//method for ending voice recognition  
speechRecognition.speechend = function () {
    instructions.text("No Activity")
}

//method for speech recognition error 
speechRecognition.onerror = function () {
 instructions.text("error")

}

speechRecognition.onresult = function(event) {
    var current = event.resultIndex;

    //Transfer the data that you have spoken through the microphone
    var transcript = event.results[current][0].transcript

    content += transcript
    
    textbox.val(content)
}

//click method to execute event of clicking on the button and start the speech recogniton by checking the content.length (content that is spoken into the microphone) 
$("#button").click(function (event) {
    if(content.length){
        content += ''
     }
     speechRecognition.start()

}) 
  }


