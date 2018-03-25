//alert("hello")
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();
 recognition.interimResults = true;
 recognition.lang = 'en-US';

 let p = document.createElement('p');
 const words = document.querySelector('.words');
 words.appendChild(p);
 recognition.addEventListener('result', e => {

   console.log(e)
   const transcript = Array.from(e.results)
     .map(result => result[0])
     .map(result => result.transcript)
     .join('');
     const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
     p.textContent = poopScript;
     if (e.results[0].isFinal) {
       p = document.createElement('p');
       words.appendChild(p);
     }
 });
 recognition.addEventListener('end', recognition.start);
 recognition.start();
//access built in microphone
 var player = document.getElementById('player');

   var handleSuccess = function(stream) {
     if (window.URL) {
       player.src = window.URL.createObjectURL(stream);
     } else {
       player.src = stream;
     }
   };
//do something with that audio
   navigator.mediaDevices.getUserMedia({ audio: true, video: false })
       .then(handleSuccess);
         var handleSuccess = function(stream) {
           var context = new AudioContext();
           var source = context.createMediaStreamSource(stream);
           var processor = context.createScriptProcessor(1024, 1, 1);

           source.connect(processor);
           processor.connect(context.destination);

           processor.onaudioprocess = function(e) {
             // Do something with the data, i.e Convert this to WAV
             console.log(e.inputBuffer);
           };
         };
