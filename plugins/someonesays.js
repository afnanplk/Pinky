/* TeenuhX 
coded by Shahid shazz
LUTTAPI
*/

const Shazz = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*Need some Word*"
const Ln = "*▷🪐നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁* "
 const code = "*╔═════◉   Zara   ◉═════╗*\n           Zara👧\n*❖═List═❖*\n\n*💠.yasai            ❴your text❵*\n*💠.innocent         ❴your text❵*\n*💠.jagathy         ❴your text❵*\n*💠.amboo            ❴your text❵*\n*💠.yeah             ❴your text❵*\n*💠.cry             ❴your text❵*\n*💠.disaster        ❴your text❵*\n*💠.uddika      ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii              ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Translate Credit: Saidali*"

if (Config.WORKTYPE == 'public') {
    
      Shazz.addCommand({pattern: 'morepack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text, {quoted: message.data});
  
  }));
