## Thanks for Everything
### We will always remember you..

<div align="center">
  <img border-radius: 15px src="IMG-20211208-WA0237.jpg" width="200" height="200"/>
  <p align="center">
<a href="#"><img title="Fortunatusmokaya" src="https://img.shields.io/badge/Fortunatus?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
  <p align="center">
<a href="https://chat.whatsapp.com/IKZF6W9hb6K25jC1mRheRq"><img title="join support" src="https://img.shields.io/badge/join_support-Fortunatus/mokayabot?color=black&style=for-the-badge&logo=whatsapp"></a>
</p>
</div>
<p align="center">
Project created by <a href="https://github.com/Fortunatusmokaya">Fortunatusmokaya</a> to make it public
    <br>
       | © |
        Reserved |
    <br> 
</p>

----

  <p align="center">
  <a href="https://github.com/afnanplk/pinkymwol ">
    <img src="https://img.shields.io/github/repo-size/afnanplk/lastpink?color=green&label=Repo%20total%20size&style=plastic">
<p align="center">
<a href="https://github.com/Fortunatusmokaya/followers"><img title="Followers" src="https://img.shields.io/github/followers/Fortunatusmokaya?color=red&style=flat-circle"></a>
<a href="https://github.com/Fortunatusmokaya/lastpink/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Fortunatusmokaya/lastpink?color=red&style=flat-square"></a>
<a href="https://github.com/Fortunatusmokaya/lastpink/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Fortunatusmokaya/lastpink?color=red&style=flat-square"></a>
<a href="https://github.com/Fortunatusmokaya/lastpink/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Fortunatusmokaya/lastpink?label=Watchers&color=red&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/UNMAINTENED-YES-blue.svg"</a>

```
  
mokayabot- mokaya Userbot is Open Source software open to development. 
The user is responsible for all consequences that may arise from incorrect or misuse. 
Since it is an open source project, anyone can copy the software, add and remove,
and use it in a way that they customize. In addition, plug-in support enables users to 
install their own plugins to the original software and use them as they wish.
Using the bot out of purpose will explicitly ban you.
Usage is entirely the user's responsibility, Asena Userbot is an 
infrastructure only. Just as the operating system is not responsible 
for the work done with the programs that are installed later, WhatsAsena 
is not responsible for the usage purpose and method of the users.
Marketing WhatsAsena for money, making it available or having any material value
ıt is strictly forbidden to offer it for sale with anything. All legal investigations that may arise
the user is responsible.
```


## Setup
<div align="center">

  ### Simple Method
  
[![Deploy](https://www.brainswig.com/imgs/ai/clickhere.gif)](https://pinkybot.yolasite.com/)
  
[![Run on Repl.it](https://repl.it/badge/github/quiec/Fortunatusmokaya)](https://replit.com/@afnanplk/PinkyMwol-QR)
  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fortunatusmokaya/mokayabot)  
     </div>
<br>
<br >
If Repl.it not working Try Termux for Qr scanning.Just Copy the Link Below in Termux
```
bash <(curl -L https://t.ly/tHxh)
``` 

## F.A.Q
Answer a few frequently asked questions;
### Can you read my messages?
This project is open source so all the codes are clear. Neither less nor more; you can look what you want. **We absolutely do not have access to your accounts.**

### What about our security?
If you are concerned about security, you can install it on your own computer. If you think someone else has captured your data, simply click on **Whatsapp> Three Dots> Whatsapp Web> Logout** from all sessions button.

### Is it paid?
**Of course not.** It will never happen. But you can donate to us. You can reach me via [Telegram](https://t.me/fusuf) .

### ⚠️ Warning! 
```
Due to Userbot; Your WhatsApp account may be banned.
This is an open source project, you are responsible for everything you do. 
Absolutely, Asena executives do not accept responsibility.
By establishing the Asena, you are deemed to have accepted these responsibilities.
```
  
## Developers
  <div align="center">
    
  [![Fortunatus](https://github.com/Fortunatusmokaya.png?size=100)](https://github.com/Fortunatusmokaya) |  [![Mokaya](https://github.com/Fortunatusmokaya.png?size=100)](https://github.com/Fortunatusmokaya) | [![Mokaya](https://github.com/Fortunatusmokaya.png?size=100)](https://github.com/Fortunatusmokaya) 
----|----|----
[Fortunatusmokaya](https://github.com/Fortunatusmokaya)  | [MOKAYA](https://github.com/Fortunatusmokaya) | [Mokaya](https://github.com/Fortunatusmokaya)
Base, Bug Fixes, Modules | Modifiying  as   public | Bug Fixes, Modules
  </div>


## License
This project is protected by `GNU General Public Licence v3.0` license.

### Disclaimer
`WhatsApp` name, its variations and the logo are registered trademarks of Facebook. We have nothing to do with the registered trademark
  
### thanks for your help and support guys
    `Chebet Blessed Morgan,Justice`

### when forking  
```
add your own heroku button
  
  example :
  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fortunatusmokaya/mokayabot)
  
  change it into your repo link
```
  
```
 If you want add bgm (voice auto reply),sticker (auto reply)

 create 3 files name them bgmone,bgmtwo,stick
 upload your mp3/sticker to created folder

 open plugins/filter.js , change path    
     for bgm one 
        change line 133 in filter.js to 

          await message.client.sendMessage(message.jid, fs.readFileSync('./bgmone/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true}) //dont forget to add in const array ['mp3 name']
    
     for bgm two
        change line 165 in filter.js into

          await message.client.sendMessage(message.jid, fs.readFileSync('./bgmtwo/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})  //dont forget to add in const array ['mp3 name']

    for sticker
        change line 193 in filter.js

          await message.client.sendMessage(message.jid, fs.readFileSync('./stick/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})  //dont forget to add in const array ['sticker name']
```
