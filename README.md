# firebase-functions-termux


By using this modules you can easily deploy your firebase functions or host your site on firebase hosting using Android .

Steps for Deploy your First Firebase Functions / Site using Android

1. Download Termux from Google Play Store.
2. Click Open 
3. After opening Termux type:  pkg install git
4. Hit Enter . This will install git on your Android
5. After installing 
6. Open any file explorer which you like 
7.  Click External Storage 
8. Then  Go to Android and click data 
9. create a folder named as "com.termux". 
10. Then again open termux app 
11. Type: cd/storage/YourExternalStorageName/Android/data/com.termux

12. And Hit Enter 
13. Type: git clone https://github.com/somitrasr/firebase-functions-termux.git

14. After cloning repository 
15. Type: pkg install nodejs 
16. Hit Enter 
17. Then Type:  npm i -g firebase-tools
18. Hit Enter , this will install firebase on your device
19. Type: firebase login 
20. Hit Enter , This will give you a login url. Copy that url and paste it to your chrome browser . Now enter your firebase username and password for login. Come back termux you will see logged in . 

For Initiating : firebase init
For deploy : firebase deploy
Files storage location: Your External SD card/Android/data/com.termux

# Advantage

You can easily code or deploy your firebase function and website same as Computer.

# Disadvantage

Every time you  need to enter cd/storage/YourFileStorageLocation 

For setting file location !!!

# Any Help

Don't know firebase I highly recommend to watch this video by Google 
https://www.youtube.com/user/Firebase

If you want any kind of help just let me know on Facebook https://www.facebook.com/SomitraSR


Enjoy your Coding !!




# What is Termux ?

Termux is a Linux command line tool app for Android .  

Features 

• Enjoy the bash and zsh shells.
• Edit files with nano and vim.
• Access servers over ssh.
• Develop in C with clang, make and gdb.
• Use the python console as a pocket calculator.
• Check out projects with git and subversion.
• Run text-based games with frotz.
• Much More

For more information about Termux read this article link https://bit.ly/2kh6vCK or download apk from Google play store link https://bit.ly/2jnIowb up
