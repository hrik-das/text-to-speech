const input = document.querySelector("#text");

function textToSpeech(){
    const message = new SpeechSynthesisUtterance(input.value);
    message.voice = speechSynthesis.getVoices()[1];
    speechSynthesis.speak(message);
}

document.getElementById("clear").onclick = () => {
    document.getElementById("text").value = "";
}