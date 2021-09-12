/* TeenuhX Re Moded by Shahid shazz
*/

const Shazz = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="എന്തെങ്കിലും type ചെയ്യൂ 🧚"
const Ln = "▷🧞𝚂𝙾𝙼𝙴 𝚂𝙾𝙼𝙴𝙾𝙽𝙴𝚂𝙰𝚈 𝙰𝙽𝙳 𝚃𝚁𝙾𝙻𝙻𝙿𝙰𝙲𝙺 𝙻𝙸𝚂𝚃 🤗◁ "
const code = "╔════◉ 𝙻𝚄𝚃𝚃𝙰𝙿𝙸 ◉════╗\n\n            ❖═List═❖\n*🔮.miasay       ❴text❵\n🔮.innocent    ❴text❵\n🔮.jagathy          ❴text❵\n🔮.yeah            ❴text❵\n🔮.disaster         ❴text❵\n🔮.cry         ❴text❵\n🔮.amboo             ❴text❵\n🔮.animesay          ❴text❵\n🔮.changesay       ❴text❵\n🔮.trumpsay    ❴text❵\n╚═══❖══▣══▣══❖═══╝\n\n▷Re Moded By: 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙷𝙰𝚉𝚉*\n*▷Specιal Thanks to ιnѕane вoy*"

if (Config.WORKTYPE == 'public') {
      
      Shazz.addCommand({pattern: 'mmpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
      message.jid,code, MessageType.text, {quoted: message.data});
   



