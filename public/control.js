const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");
const submitForm = document.querySelector("#submit-form");
const chooseForm = document.querySelector("#img");
const cameraButton = document.querySelector("#capture");
const submitTForm = document.querySelector("#subTform");
const chooseTForm = document.querySelector("#imggg");
const goback = document.querySelector("#goback");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  // recognition.lang = "en-US";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }


// function performClick(elemId) {
//    var elem = document.getElementById(elemId);
//    if(elem && document.createEvent) {
//       var evt = document.createEvent("MouseEvents");
//       evt.initEvent("click", true, false);
//       elem.dispatchEvent(evt);
//    }
// }


  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    console.log("get transcript");
    
    if(transcript.toLowerCase().trim()==="stop recording") {
      recognition.stop();
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      // if(transcript.toLowerCase().trim()==="go") {
      //   searchForm.submit();
      // }
      // else if(transcript.toLowerCase().trim()==="reset input") {
      //   searchFormInput.value = "";
      // }

      if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
      }

      else if(transcript.toLowerCase().trim()==="yes") {
        submitForm.submit();
      }

      else if(transcript.toLowerCase().trim()==="go") {
        console.log("reach choose file");
        chooseForm.click();
        // document.getElementById("img").click();
      }

      else if(transcript.toLowerCase().trim()==="hi") {
        console.log("reach camera");
        cameraButton.click();
        // document.getElementById("img").click();
      }

      else if(transcript.toLowerCase().trim()==="no") {
        console.log("reach translate submit")
        submitTForm.submit();
        // document.getElementById("subTform").click();
      }

      else if(transcript.toLowerCase().trim()==="hey") {
        console.log("reach translate choose file");
        chooseTForm.click();
        // document.getElementById("img").click();
      }

      else if(transcript.toLowerCase().trim()==="hello") {
        console.log("go back");
        goback.click();
        // document.getElementById("img").click();
      }




      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }
  
  // info.textContent = 'Voice Commands: "stop recording", "reset input", "go", "yes", "hi", "no" ';
  info.textContent = 'Voice Commands: "stop recording", "reset input", "yes: submit the file", "go: choose the file", "hi: capture the image", "hey: choose the translate file", "no: submit the translate file", "hello: back to the previous page" ';
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}