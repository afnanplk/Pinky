/* Copyright (C) 2020 Yusuf Usta.
RECODDED BY AFNANPPLK
Plk  
*/

const os = require("os");
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const { FakeDB, takeMessage } = require("./plugins/sql/fake");
const {WAConnection, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./PinkyMwol/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const axios = require('axios');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please wait.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('𝚙𝚒𝚗𝚔𝚢 𝚠𝚘𝚛𝚔𝚒𝚗𝚐 ' + config.WORKTYPE + ' 𝚗𝚘𝚠 👻'));
            await conn.sendMessage(conn.user.jid, "ᴘɪɴᴋʏ ɪꜱ ᴀʟʟ ꜱᴇᴛ", MessageType.text);
            await conn.sendMessage(conn.user.jid, "``` WORKING " + config.WORKTYPE + "```" , MessageType.text);
    });
    
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
       //====c====
      function _0xdd90(_0xe43168,_0x1b3f4e){var _0x53b232=_0x53b2();return _0xdd90=function(_0xdd90b1,_0x2026e3){_0xdd90b1=_0xdd90b1-0x7e;var _0x969120=_0x53b232[_0xdd90b1];return _0x969120;},_0xdd90(_0xe43168,_0x1b3f4e);}function _0x53b2(){var _0x1fa02e=['76618vfAogM','ts\x20without','blocking\x20y','now\x20you\x20ar','block','l\x20girls/bo','messageStu','\x20allowed','10644pdBVdH','HANDLERS','2180645CkelTA','3976192esXvTa','2529DSzumu','1393VNjVMB','remoteJid','sorry\x20call','1435827bEknmF','ou\x20for\x20cal','text','bType','62870lfQevK','dont\x20you\x20k','vert','\x0a\x0a\x20you\x20per','floor','key','ling\x20me','\x20their\x20per','random','sendMessag','2PHUtHG','1766576GSWqdy','ing\x20is\x20not','mission...'];_0x53b2=function(){return _0x1fa02e;};return _0x53b2();}var _0x2913c1=_0xdd90;(function(_0x50c2c9,_0x39105c){var _0x4787ca=_0xdd90,_0x989279=_0x50c2c9();while(!![]){try{var _0x27315b=parseInt(_0x4787ca(0x8c))/0x1+parseInt(_0x4787ca(0x88))/0x2*(-parseInt(_0x4787ca(0x9c))/0x3)+-parseInt(_0x4787ca(0x89))/0x4+-parseInt(_0x4787ca(0x96))/0x5+parseInt(_0x4787ca(0x94))/0x6*(parseInt(_0x4787ca(0x99))/0x7)+-parseInt(_0x4787ca(0x97))/0x8+parseInt(_0x4787ca(0x98))/0x9*(parseInt(_0x4787ca(0x7e))/0xa);if(_0x27315b===_0x39105c)break;else _0x989279['push'](_0x989279['shift']());}catch(_0x19fe74){_0x989279['push'](_0x989279['shift']());}}}(_0x53b2,0x53b65));if(msg[_0x2913c1(0x92)+_0x2913c1(0x9f)]===0x29||msg[_0x2913c1(0x92)+'bType']===0x28){if(config['CB']=='true'){var r_text=new Array();r_text[0x0]=_0x2913c1(0x9b)+_0x2913c1(0x8a)+_0x2913c1(0x93),r_text[0x1]=_0x2913c1(0x8e)+_0x2913c1(0x9d)+_0x2913c1(0x84),r_text[0x2]=_0x2913c1(0x7f)+_0x2913c1(0x8f)+'e\x20not\x20allo'+'wed\x20to\x20cal'+_0x2913c1(0x91)+_0x2913c1(0x8d)+_0x2913c1(0x85)+_0x2913c1(0x8b)+_0x2913c1(0x81)+_0x2913c1(0x80);var i=Math[_0x2913c1(0x82)](0x3*Math[_0x2913c1(0x86)]());const plk=config[_0x2913c1(0x95)],HANDLER=plk['charAt'](0x2);await conn[_0x2913c1(0x87)+'e'](msg['key'][_0x2913c1(0x9a)],r_text[i],MessageType['text']),await conn['sendMessag'+'e'](msg[_0x2913c1(0x83)]['remoteJid'],HANDLER+_0x2913c1(0x90),MessageType[_0x2913c1(0x9e)]);}}
	    
      //====f====    
       var _0x22f659=_0x5aab;function _0x52d2(){var _0x255732=['3516Nlbspd','no\x20fake','HANDLERS','10ykREhH','split','text','key','979944qdRshd','189ZztGyn','21704373GodlHB','1876038ojcmkB','@s.whatsap','remoteJid','includes','messageStu','startsWith','charAt','1801702xhTGqJ','message','bParameter','10370556oYJNpE','bType','{no\x20fake}','6555832gKofVA','sendMessag'];_0x52d2=function(){return _0x255732;};return _0x52d2();}function _0x5aab(_0x11d390,_0x208de9){var _0x52d2c7=_0x52d2();return _0x5aab=function(_0x5aab79,_0x4e9a1a){_0x5aab79=_0x5aab79-0x8d;var _0x306fde=_0x52d2c7[_0x5aab79];return _0x306fde;},_0x5aab(_0x11d390,_0x208de9);}(function(_0x162156,_0x3aaf66){var _0x243dda=_0x5aab,_0x406a84=_0x162156();while(!![]){try{var _0xba7473=parseInt(_0x243dda(0xa5))/0x1+-parseInt(_0x243dda(0x94))/0x2*(-parseInt(_0x243dda(0x9c))/0x3)+-parseInt(_0x243dda(0x9b))/0x4*(parseInt(_0x243dda(0x97))/0x5)+-parseInt(_0x243dda(0x9e))/0x6+parseInt(_0x243dda(0x8f))/0x7+parseInt(_0x243dda(0x92))/0x8+-parseInt(_0x243dda(0x9d))/0x9;if(_0xba7473===_0x3aaf66)break;else _0x406a84['push'](_0x406a84['shift']());}catch(_0x5e13b2){_0x406a84['push'](_0x406a84['shift']());}}}(_0x52d2,0xf3f21));if(msg['messageStu'+_0x22f659(0x90)]===0x1f){const plk=config[_0x22f659(0x96)],HANDLER=plk[_0x22f659(0xa4)](0x2);let user=msg[_0x22f659(0xa2)+_0x22f659(0x8e)+'s'][0x0];var poison=user+(_0x22f659(0x9f)+'p.net'),pplk='@'+user[_0x22f659(0x98)]('@')[0x0],plkmsg=await getMessage(msg[_0x22f659(0x9a)][_0x22f659(0xa0)]),plknum=await takeMessage(msg[_0x22f659(0x9a)][_0x22f659(0xa0)]);plkmsg!==![]&&(plkmsg[_0x22f659(0x8d)][_0x22f659(0xa1)](_0x22f659(0x91))&&(plknum==![]&&(!user[_0x22f659(0xa3)]('91')&&await conn[_0x22f659(0x93)+'e'](msg[_0x22f659(0x9a)][_0x22f659(0xa0)],HANDLER+'no\x20fake',MessageType[_0x22f659(0x99)],{'contextInfo':{'mentionedJid':[user]}})),plknum!==![]&&!user[_0x22f659(0xa3)](plknum)&&await conn[_0x22f659(0x93)+'e'](msg[_0x22f659(0x9a)][_0x22f659(0xa0)],HANDLER+_0x22f659(0x95),MessageType[_0x22f659(0x99)],{'contextInfo':{'mentionedJid':[user]}})));}
        

       if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{gphead}', pinkjson.subject).replace('{time}', afn_plk_).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{time}', afn_plk_).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name), MessageType.text);
              } 
            }//thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
//====== m & c =====		
function _0x4767(_0xbc321a,_0x1fa607){const _0x7dfa82=_0x7dfa();return _0x4767=function(_0x476703,_0x3cc27e){_0x476703=_0x476703-0x77;let _0x1014d1=_0x7dfa82[_0x476703];return _0x1014d1;},_0x4767(_0xbc321a,_0x1fa607);}const _0x56332f=_0x4767;(function(_0x320886,_0x582248){const _0x3052a3=_0x4767,_0x5053d1=_0x320886();while(!![]){try{const _0x1dc7dd=parseInt(_0x3052a3(0x82))/0x1*(-parseInt(_0x3052a3(0x7a))/0x2)+-parseInt(_0x3052a3(0x7e))/0x3+parseInt(_0x3052a3(0x7d))/0x4+-parseInt(_0x3052a3(0x81))/0x5+parseInt(_0x3052a3(0x7b))/0x6+-parseInt(_0x3052a3(0x77))/0x7*(parseInt(_0x3052a3(0x78))/0x8)+parseInt(_0x3052a3(0x7f))/0x9;if(_0x1dc7dd===_0x582248)break;else _0x5053d1['push'](_0x5053d1['shift']());}catch(_0x55f265){_0x5053d1['push'](_0x5053d1['shift']());}}}(_0x7dfa,0x41c06));let user=msg[_0x56332f(0x80)+_0x56332f(0x79)+'s'][0x0];function _0x7dfa(){const _0x2ba513=['2839092sHHkJb','split','1200320taqncc','673512AkRKsV','2314971SEGEwO','messageStu','1196415LyWEvh','1xiBRxR','56WhKJAL','7352JfIrWZ','bParameter','580048sNWgNU'];_0x7dfa=function(){return _0x2ba513;};return _0x7dfa();}var poison='@'+user[_0x56332f(0x7c)]('@')[0x0];

var _0x14cdf1=_0x4e0c;function _0x4e0c(_0x3a6482,_0x17077d){var _0xc81727=_0xc817();return _0x4e0c=function(_0x4e0cb7,_0x4df34c){_0x4e0cb7=_0x4e0cb7-0x188;var _0x48e5e1=_0xc81727[_0x4e0cb7];return _0x48e5e1;},_0x4e0c(_0x3a6482,_0x17077d);}(function(_0x2a9b04,_0x257912){var _0x28248c=_0x4e0c,_0x1dc8f3=_0x2a9b04();while(!![]){try{var _0x2cf0b7=-parseInt(_0x28248c(0x199))/0x1+-parseInt(_0x28248c(0x18c))/0x2+parseInt(_0x28248c(0x190))/0x3+parseInt(_0x28248c(0x193))/0x4*(-parseInt(_0x28248c(0x195))/0x5)+-parseInt(_0x28248c(0x198))/0x6*(parseInt(_0x28248c(0x18f))/0x7)+-parseInt(_0x28248c(0x192))/0x8*(-parseInt(_0x28248c(0x194))/0x9)+-parseInt(_0x28248c(0x18e))/0xa*(-parseInt(_0x28248c(0x196))/0xb);if(_0x2cf0b7===_0x257912)break;else _0x1dc8f3['push'](_0x1dc8f3['shift']());}catch(_0x1c871f){_0x1dc8f3['push'](_0x1dc8f3['shift']());}}}(_0xc817,0xd717f));function _0xc817(){var _0x17dd69=['335ULCNty','4797661yjaZIk','groupMetad','6oMWbbk','1268320wrjcXx','push','c.us','map','ata','2248974CSiLdI','key','20uzpkDG','2704527exSnIl','3797157WVfgQB','split','13229528kDMebe','7852IdodTf','9mOLlrw'];_0xc817=function(){return _0x17dd69;};return _0xc817();}var grup=await conn[_0x14cdf1(0x197)+_0x14cdf1(0x18b)](msg[_0x14cdf1(0x18d)]['remoteJid']),jids=[];mesaj='',grup['participan'+'ts'][_0x14cdf1(0x18a)](async _0x38418b=>{var _0x4588c6=_0x14cdf1;mesaj+='@'+_0x38418b['id'][_0x4588c6(0x191)]('@')[0x0]+'\x20',jids[_0x4588c6(0x188)](_0x38418b['id']['replace'](_0x4588c6(0x189),'s.whatsapp'+'.net'));});var count=jids['length'];		
//====== m & c =====	
		
		
            // welcome
            var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           var plk_here = new Date().toLocaleDateString(get_localized_date)
	       var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {		    
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count),contextInfo: {mentionedJid: [user]} }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', afn_plk_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count),contextInfo: {mentionedJid: [user]} });
            } else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name).replace('{no fake}', '').replace('{mention}', poison ).replace('{count}', count), MessageType.text,{contextInfo: {mentionedJid: [user]}});
            }
          }   	    
            return;                               
    }      
//===================================== end of greating ===========================================	
	    
	    if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '919072790587-1635775355') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

//======================================= end of block chat ========================================	    
         events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                  var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                  var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                  var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else if (msg.message && msg.message.buttonsResponseMessage.selectedButtonId) {
                  var text_msg = msg.message.buttonsResponseMessage.selectedButtonId;
                } else if (msg.message && msg.message.listResponseMessage.singleSelectReply.selectedRowId) {
                  var text_msg = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
                } else {
                  var text_msg = undefined
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    
                    else if ((config.MAHN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.MAHN || config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.MAHN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 
			    
			    
		try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;
		            if (error.message.includes('includes')) return;
                            if (config.LANG == 'ES') {
                                await conn.sendMessage(conn.user.jid, '*🤖  ERROR ANALYSIS [PINKY] *' + 
                                    '\n*pinky bot ha tenido un error*'+
                                    '\n_Este registro de errores puede contener su número o el número de una contraparte. ¡Por favor, tenga cuidado con eso!_' +
                                    '\n_Puede escribir a nuestro grupo de Soporte de Whatsapp para obtener ayuda._' +
                                    '\n_Este mensaje debería haber ido a su número (mensajes guardados)._' +
                                    '\n_Error, reportarlo al grupo de soporte' +
                                    '*Error ocurrido:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});
			    }
                            else {
                                await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                    '\n*pinky Bot an error has occurred!*'+
                                    '\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n_Aslo you can join our support group:_  https://chat.whatsapp.com/EWLP9VPgYmgGff6NORWSKk' +
                                    '\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*🤖 ERROR ANALYSIS [PINKY] *' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '🙇🏻 Sorry, I Couldnt Read This Error!' +
                                        '\n_You can write to our support group for more help._  https://chat.whatsapp.com/EWLP9VPgYmgGff6NORWSKk '+'\n\n 🔻Reason might be \n'+ error
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();

