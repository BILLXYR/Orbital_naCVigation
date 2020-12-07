// 'use strict';

// let video = document.getElementById('video');
// let  canvas = document.getElementById('canvas');
// let snap = document.getElementById('snap');
// // let errorMsgElement = document.getElementById('spanErrorMsg');

// let constraints = {
// 	audio: true,
// 	video: {
// 		width: 1280, height:720
// 	}
// };

// async function init() {
// 	try {
// 		const stream = await navigator.mediaDevices.getUserMedia(constraints);
// 		handleSuccess(stream);
// 	} 

// 	catch(e) {
// 		errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
// 	}
// }

// var handleSuccess = function(stream){
// 	// window.stream = stream;
// 	videoo.srcObject = stream;
// }

// init();



// snap.addEventListener("click", function() {
// 	let context = canvass.getContext('2d');
// 	context.drawImage(videoo, 0, 0, 640, 480)
// })



var snapshotCanvas = document.getElementById('snapshot');

var submitCapBtn = document.getElementById('submitCapture')


var captureButton = document.getElementById('capture');

let constraints = {
	audio: true,
	video: {
		width: 1280, height:720
	}
};


async function init() {
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		handleSuccess(stream);
	} 

	catch(e) {
		errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
	}
}

var handleSuccess = function(stream) {
	window.stream = stream;
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

init();

captureButton.addEventListener('click', function() {
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, 640, 480);

      const myCanvas = document.querySelector("#snapshot");
        const dataURI = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=dataURI;

});