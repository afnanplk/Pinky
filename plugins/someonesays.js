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
const Ln = "▷🧞𝚂𝙾𝙼𝙴 𝚂𝙾𝙼𝙴𝙾𝙽𝙴𝚂𝙰𝚈 𝙰𝙽𝙳 𝚃𝚁𝙾𝙻𝙻𝙿𝙰𝙲𝙺 𝙻𝙸𝚂𝚃 🤗◁ "
 const code = "╔════◉ 𝙻𝚄𝚃𝚃𝙰𝙿𝙸 ◉════╗\n\n            ❖═List═❖\n*🔮.miasay       ❴text❵\n🔮.innocent    ❴text❵\n🔮.jagathy          ❴text❵\n🔮.yeah            ❴text❵\n🔮.disaster         ❴text❵\n🔮.cry         ❴text❵\n🔮.amboo             ❴text❵\n🔮.animesay          ❴text❵\n🔮.changesay       ❴text❵\n🔮.trumpsay    ❴text❵\n╚═══❖══▣══▣══❖═══╝\n\n▷Re Moded By: 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙷𝙰𝚉𝚉*\n*▷Specιal Thanks to ιnѕane вoy*"

if (Config.WORKTYPE == 'public') {
    
      Shazz.addCommand({pattern: 'morepack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text, {quoted: message.data});
  
  }));

 Shazz.addCommand({ pattern: 'miasay ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phub?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&img=https://www.filmibeat.com/wimgm/500x70/mobi/2017/11/mia-khalifa_1510989398130.jpg&username=Mia%20Khalifa&msg=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

 

  Shazz.addCommand({ pattern: 'innocent ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQkaloSZfYPpDnfiOzGISBYT3fdSc0-6cvg&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

  Shazz.addCommand({ pattern: 'jagathy ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1dEwt3ZO2NU9w0WGKZ5dv74-5glZp6piRQ&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

    

  Shazz.addCommand({ pattern: 'yeah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e7d9e7b-2a0b-4ad3-9629-06752324a276/d9u6k0r-7c70fc35-be17-4c84-83be-fcdb8963d8bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllN2Q5ZTdiLTJhMGItNGFkMy05NjI5LTA2NzUyMzI0YTI3NlwvZDl1Nmswci03YzcwZmMzNS1iZTE3LTRjODQtODNiZS1mY2RiODk2M2Q4YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1YBw1qCghroYfgjxVmslG8zTAuPu2rzSlgfTKMiijO8`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

  

  Shazz.addCommand({ pattern: 'disaster ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoQEefo9pAXD0vAsjf-Qln3h6Os1hH33A5g&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

  

  Shazz.addCommand({ pattern: 'cry ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBE31jIXqsIQdS13c9O5HTmW1NXSNzgLVjg&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

  

  Shazz.addCommand({ pattern: 'amboo ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKLeS-tujy1aVhH2JiyAgSlQHQRvxSM-EjQ&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));

  

  Shazz.addCommand({ pattern: 'animesay ?(.*)', fromMe: false, desc: Lang.ANIME_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*🚀Made by luttapi*' })

    }));

  

    Shazz.addCommand({ pattern: 'changesay ?(.*)', fromMe: true, desc: Lang.CHANGE_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*🚀Made by luttapi*' })

    }));

  

    Shazz.addCommand({ pattern: 'trumpsay ?(.*)', fromMe: true, desc: Lang.TRUMP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '*🚀Made by luttapi*' })

    }));

}
