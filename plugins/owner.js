const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝕃𝕦𝕥𝕥𝕒𝕡𝕚😈═════╗*\n           \n*⚜═😈𝕃𝕦𝕥𝕥𝕒𝕡𝕚😈═⚜*\n\n*💘𝕆𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫 - http://Wa.me/+916282185054*\n*            *\n*╚══════😈𝕃𝕦𝕥𝕥𝕒𝕡𝕚😈═════╝*\n\n*▷Creator: 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝕃𝕦𝕥𝕥𝕒𝕡𝕚 𝕠𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕 𝕤𝕙𝕒𝕫𝕫═💥*\n\n*💘𝕡𝕣𝕚𝕧𝕒𝕥𝕖 𝕒𝕒𝕟 𝕧𝕣𝕠𝕠 😁*\n*     
    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    
    }
    
    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {
    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝕃𝕌𝕋𝕋𝔸ℙ𝕀😈═════╗*\n           \n*⚜═😈𝕃𝕦𝕥𝕥𝕒𝕡𝕚😈═⚜*\n\n*💘𝕠𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫 - http://Wa.me/+916282185054*\n*            *\n*╚══════😈𝕃𝕦𝕥𝕥𝕒𝕡𝕚😈═════╝*\n\n*▷Creator: 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "*Git links*\n           *\n💥═𝕃𝕦𝕥𝕥𝕒𝕡𝕚 𝕠𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕 𝕤𝕙𝕒𝕫𝕫═💥*\n\n*💘𝕡𝕣𝕚𝕧𝕒𝕥𝕖 𝕒𝕒𝕟 𝕧𝕣𝕠𝕠 😁*\n*     

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
