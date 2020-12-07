---
layout: page
title: Setting up and getting started
---

* Table of Contents
{:toc}


--------------------------------------------------------------------------------------------------------------------

## Setting up the project in your computer

### About

There are two versions of our project. Each of them has its own strengths and short-comings.
<br>
<br>
Version 1: https://nacvigation.azurewebsites.net
Version 2: ec2-54-254-182-176.ap-southeast-1.compute.amazonaws.com:3000
<br>
<br>
Version 2 github repository: https://github.com/BILLXYR/Orbital_naCVigation
<br>
<br>
Both versions can use a webcam to capture image on the spot and then download the image which users can use for text extraction in this website. Both versions also have voice control mechanism which is friendly for visually impaired people, allowing users to use its functionalities without the need to click different buttons. but the voice control mechanism of the two version is used under different conditions.
<br>
<br>
For version 1, users can directly use voice control on the website. However, the text extraction from images is not so accurate as compared to version 2.
<br>
<br>
Version 2 has a much better performance in terms of text extraction from images as comapred to version 1. However, as we do not have a domain and SSL certificate, we are not able to set up "https" for version 1 website. Therefore, the browser would not grant access to webcam and micphone and voice control cannot be used by users. As such, it is recommended to run version 2 locally so that users can use voice control in this website.

### Detail Usage

**prerequisite**

Node.js and npm
<br>
python

**procedure**

1. Clone this repository in terminal https://github.com/BILLXYR/Orbital_naCVigation
<br>
   command used: git clone https://github.com/BILLXYR/Orbital_naCVigation
<br>   
2. In terminal, run
<br>
npm install
<br>
3. If not successful, run
<br>
npm install express ejs multer gtts body-parser iconv-lite.
<br>
4. n terminal, run
<br>
pip install opencv-python pytesseract googletrans
<br>
5. To start the server, run
<br>
node app.js
<br>
then open a browser and go to http://localhost:8080/
