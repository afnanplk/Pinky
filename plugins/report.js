/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const MyPnky = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {
    MyPnky.addCommand({pattern: 'report ?(.*)', fromMe: false, desc: 'to report someone'}, (async (message, match) => {
        if (match[1] == '') {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.jid);
                }
            });
           await message.client.sendMessage(message.jid,'ℝ𝔼ℙ𝕆ℝ𝕋 \n'+ mesaj , MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,'ℝ𝔼ℙ𝕆ℝ𝕋\n' + mesaj  + '\n\nℝ𝔼𝔸𝕊𝕆ℕ :  ' + `${match[1]}`,  MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,'Please Respond to Users Message to Report', MessageType.text);
        }
}));
}
else if (Config.WORKTYPE == 'public') {
    MyPnky.addCommand({pattern: 'report ?(.*)', fromMe: false, desc: 'to report someone'}, (async (message, match) => {
        if (match[1] == '') {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.jid);
                }
            });
           await message.client.sendMessage(message.jid,'ℝ𝔼ℙ𝕆ℝ𝕋 \n'+ mesaj , MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,'ℝ𝔼ℙ𝕆ℝ𝕋\n' + mesaj  + '\n\nℝ𝔼𝔸𝕊𝕆ℕ :  ' + `${match[1]}`,  MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,'Please Respond to Users Message to Report', MessageType.text);
        }
}));
}
}