import sys
import pytesseract
from PIL import Image
import pyttsx3

directory = './public/uploads/' + (sys.argv[1])
# img = Image.open('screenshot2.png')

# img = Image.open('./public/uploads/myImage-.png')

# directory = './public/uploads/' + sys.argv[1]
img = Image.open(directory)

text = pytesseract.image_to_string(img)

with open('translated.text', 'w') as file:
    file.write(text)
    print(" ")
    print("Done Translation")
print(text)

# print(directory)
# print('helloword' + sys.argv[1])
# print('hellowordddsssssssddd' )