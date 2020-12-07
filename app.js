
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let spawn = require('child_process').spawn;
let gtts = require('gtts');
let path = require('path');
let multer = require('multer');

let fs = require('fs');
const {createWorker} = require('tesseract.js');

const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');



const translate = require('@k3rn31p4nic/google-translate-api');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: '-uRmzMr4iPt1OGX7PIJzlAVMCu3x_ALMX6hMqFKm0oWu',
  }),
  url: 'https://api.us-east.speech-to-text.watson.cloud.ibm.com',
});

let port = process.env.PORT || 8080;


app.set('views', path.join(__dirname, './views'));

var imgName = "";
var imgDiretory = "./public/upload/";
var audioDiretory = "./public/audio/";


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});


let upload = multer({
	storage: storage,
	limits: {fileSize: 10000000},
	fileFilter: function(req, file, cb) {
		checkFileType(file,cb);
	}
}).single('myImage');

let c = 'filename'
function checkFileType(file, cb) {
	let filetypes = /jpeg|jpg|png|gif/;
	let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	let mimetype = filetypes.test(file.mimetype);
	c = file.fieldname + '-' + path.extname(file.originalname);
    imgName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
	
	if (extname && mimetype) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

console.log('lisening to port 8080')


let say = require('say');

let urlencodedParser =  bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');

app.use(express.static('./public'))


let b = "Internet Connection problem, please refresh and upload your image again "

const worker = createWorker({
  logger: m => console.log(m)
});


app.get('/submitForm', function(req,res){
	res.render('submit');
});

var audio_dir_and_name = ''

app.get('/', function(req,res){

	// res.render('form');
   res.render('camera', {qs: req.query});
});

app.engine('html', require('ejs').renderFile);


app.get('/speech', function(req,res){

  res.render('speech');
  // res.sendFile(path.join(__dirname+'/speech.html'));

});

app.get('/trial', function(req,res){

  res.render('trial');

});



app.get('/camera', function(req,res){

  res.render('camera');

});

app.post('/translatedWeb', urlencodedParser, function(req,res){

       


      upload(req, res, (err) => {
        if (err) {
            // res.render('submit',  {
            //     msg: err,

            // });
            res.render("translated", {
                                resultt: err,
                            });
        } else {
            if (req.file == undefined) {
            // res.render('submit',  {
            //     msg: 'Error: no file selected',
            // });
            msg = 'Error: no file selected'
            res.render("translated", {
                                resultt: msg,
                            });
            } else {

                      console.log("uploading");
    
      upload(req, res, err => {
           fs.readFile(`./public/uploads/${req.file.originalname}`, (err, imagee) => {
              console.log("reading file");
               if (err) return console.log("this is your error", err);
            
               (async () => {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imagee);
  console.log(text);
  let output = text;
  let english = text;

  translate(output, { from: 'en', to: 'zh-cn' }).then(res => {
  console.log(res.text); // OUTPUT: Je vous remercie
  output = english + res.text ;
  console.log(output);
  toTrans(output);
  // res.render("translated", {
  //                               resultt: output,
  //                           });
}).catch(err => {
  console.error(err);
});

   function toTrans(output){
     res.render("translated", {
                                resultt: output,
                            });
   }
// console.log(req.body.lang);

// res.render("translated", {
//                                 resultt: output,
//                             });
                   
 

})();


           });
      });

            }
        }
     });

});




app.post('/uploaded', function(req, res){
     upload(req, res, (err) => {
        if (err) {
              res.render("translated", {
                                resultt: err,
                            });
        } else {
            if (req.file == undefined) {
            // res.render('submit',  {
            //     msg: 'Error: no file selected',
            // });
             msg = 'Error: no file selected'
            res.render("translated", {
                                resultt: msg,
                            });
            } else {

                      console.log("uploading");
    
      upload(req, res, err => {
           fs.readFile(`./public/uploads/${req.file.originalname}`, (err, imagee) => {
              console.log("reading file");
               if (err) return console.log("this is your error", err);
            
               (async () => {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imagee);
  console.log(text);
  dataToSend = text;
                    console.log("datatosend: " + dataToSend);

                    // create speech audio using gtts and save under ./public/audio
                    var speech = new gtts(dataToSend);
                    var audio_dir_and_name = `./public/audio/${imgName}.mp3`;

                    console.log("before save");
                    speech.save(audio_dir_and_name, function(err, result){
                        console.log('saving');
                        if(err){
                            console.log('gtts error: ' + err);
                        }
                        else{
                            // render
                             console.log("translated text: " + b);
                console.log("audio saved: " + `audio/${imgName}.mp3`);

                            res.render("voiceOut", {
                                resultt: text,
                                audio_dir_and_name: `audio/${imgName}.mp3`
                            });
                            console.log('gtts success!!!!!!');
                        }
                    });
                    console.log('after save');
})();


           });
      });

            }
        }
     });
});


console.log("before submit");
console.log(b);



  // let transUrl = 'https://nodejs.org/en/';
  // translate.getPage(transUrl).then(function(htmlStr){
  //   console.log(htmlStr);
  //   console.log(htmlStr.length)
  // });



app.listen(port)