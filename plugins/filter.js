/* Copyright (C) 2020 farhan-dqz.
re codded by afnan plk
PINKY
*/
const fs = require('fs')
const MyPnk = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const Pinky = require('../pinky')
const pallikkel = require('../uploads/bgmlist');
const { AfnanPLK, addplk } = require("./sql/tryplk");
const afnp = Pinky.PLKAFN !== false ? Pinky.PLKAFN.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');



if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {



MyPnk.addCommand({pattern: 'filter ?(.*)', fromMe: true,plkadmin: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
MyPnk.addCommand({pattern: 'stop ?(.*)', fromMe: true,plkadmin: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
//===========start of bgm reply ================ 
    const barray = pallikkel //edit list from https://github.com/afnanplk/uploads/blob/master/bgmlist.js
    const path = './uploads/media/'; // change path here 
    
var _0x57a199=_0x5759;(function(_0x384270,_0x48c1e8){var _0x54ca90=_0x5759,_0x356dc9=_0x384270();while(!![]){try{var _0x56b2b6=-parseInt(_0x54ca90(0xdc))/0x1*(-parseInt(_0x54ca90(0xd0))/0x2)+parseInt(_0x54ca90(0xea))/0x3*(parseInt(_0x54ca90(0xe6))/0x4)+-parseInt(_0x54ca90(0xde))/0x5+parseInt(_0x54ca90(0xe0))/0x6*(-parseInt(_0x54ca90(0xf3))/0x7)+parseInt(_0x54ca90(0xce))/0x8*(parseInt(_0x54ca90(0xcf))/0x9)+parseInt(_0x54ca90(0xe5))/0xa*(-parseInt(_0x54ca90(0xdd))/0xb)+-parseInt(_0x54ca90(0xe8))/0xc;if(_0x56b2b6===_0x48c1e8)break;else _0x356dc9['push'](_0x356dc9['shift']());}catch(_0x1c4e92){_0x356dc9['push'](_0x356dc9['shift']());}}}(_0x84ae,0x7889f));function _0x5759(_0x324587,_0x1cdff2){var _0x84aec3=_0x84ae();return _0x5759=function(_0x57596b,_0x33e496){_0x57596b=_0x57596b-0xc7;var _0x158815=_0x84aec3[_0x57596b];return _0x158815;},_0x5759(_0x324587,_0x1cdff2);}function _0x84ae(){var _0xfe3a22=['floor','jid','toUpperCas','readFileSy','35rudVBR','addCommand','@g.us','text','sendMessag','random','{bgm}','map','224ZTVJti','252243IXJzXl','2YxfkBo','afnanplk','client','.mp3','toLocaleLo','media/ment','farhandqz','audio','ion.mp3','AFNN','includes','9190727905','284891mMwzVe','22UvczxE','1308395BukrtQ','message','1033926drnkgO','87@s.whats','test','mp4Audio','./uploads/','420470yVddUc','4KXENEd','endsWith','943668verbLs','data','2130291duzilL','PM_BGM','mention','app.net','charAt'];_0x84ae=function(){return _0xfe3a22;};return _0x84ae();}(Config['BOTCREATOR']==_0x57a199(0xd1)||Config['BOTCREATOR']==_0x57a199(0xd6))&&(MyPnk[_0x57a199(0xc7)]({'on':_0x57a199(0xc9),'fromMe':![]},async(_0x255586,_0x248a51)=>{var _0x4557cc=_0x57a199;if(_0x255586[_0x4557cc(0xf0)][_0x4557cc(0xe7)](_0x4557cc(0xc8))){var _0x28b6f6=await addplk(_0x255586['jid']);_0x28b6f6[_0x4557cc(0xdf)][_0x4557cc(0xda)](_0x4557cc(0xcc))&&(!!_0x255586['mention']&&_0x255586[_0x4557cc(0xec)][0x0]==_0x4557cc(0xdb)+_0x4557cc(0xe1)+_0x4557cc(0xed)&&await _0x255586[_0x4557cc(0xd2)][_0x4557cc(0xca)+'e'](_0x255586['jid'],fs[_0x4557cc(0xf2)+'nc'](_0x4557cc(0xe4)+'media/tran'+'ce.mp3'),MessageType[_0x4557cc(0xd7)],{'mimetype':Mimetype['mp4Audio'],'quoted':_0x255586[_0x4557cc(0xe9)],'ptt':!![]}),!!_0x255586[_0x4557cc(0xec)]&&_0x255586[_0x4557cc(0xec)][0x0]==Config[_0x4557cc(0xd9)]&&await _0x255586[_0x4557cc(0xd2)][_0x4557cc(0xca)+'e'](_0x255586['jid'],fs[_0x4557cc(0xf2)+'nc']('./uploads/'+_0x4557cc(0xd5)+_0x4557cc(0xd8)),MessageType[_0x4557cc(0xd7)],{'mimetype':Mimetype[_0x4557cc(0xe3)],'quoted':_0x255586['data'],'ptt':!![]}),barray[_0x4557cc(0xcd)](async _0x2bab83=>{var _0x4acedc=_0x4557cc;let _0x4423e7=new RegExp('\x5cb'+_0x2bab83+'\x5cb','ig');if(_0x4423e7[_0x4acedc(0xe2)](_0x255586[_0x4acedc(0xdf)])){var _0x23b84b=_0x2bab83[_0x4acedc(0xd4)+'werCase'](),_0x5ad4f4=_0x23b84b[_0x4acedc(0xee)](0x0)[_0x4acedc(0xf1)+'e']()+_0x23b84b['slice'](0x1),_0x3b562b=new Array();_0x3b562b[0x0]=path+_0x23b84b+'.mp3',_0x3b562b[0x1]=path+_0x5ad4f4+_0x4acedc(0xd3);var _0x1e1321=Math['floor'](0x2*Math['random']());await _0x255586[_0x4acedc(0xd2)][_0x4acedc(0xca)+'e'](_0x255586[_0x4acedc(0xf0)],fs[_0x4acedc(0xf2)+'nc'](''+_0x3b562b[_0x1e1321]),MessageType['audio'],{'mimetype':Mimetype['mp4Audio'],'quoted':_0x255586[_0x4acedc(0xe9)],'ptt':!![]});}}));}}),Config[_0x57a199(0xeb)]=='true'&&MyPnk[_0x57a199(0xc7)]({'on':_0x57a199(0xc9),'fromMe':![]},async(_0xf56fc3,_0x86273)=>{var _0x3e3740=_0x57a199;!_0xf56fc3[_0x3e3740(0xf0)][_0x3e3740(0xe7)](_0x3e3740(0xc8))&&barray[_0x3e3740(0xcd)](async _0x551043=>{var _0x1610f9=_0x3e3740;let _0xb37fa9=new RegExp('\x5cb'+_0x551043+'\x5cb','ig');if(_0xb37fa9[_0x1610f9(0xe2)](_0xf56fc3[_0x1610f9(0xdf)])){var _0x5b2433=_0x551043[_0x1610f9(0xd4)+'werCase'](),_0x964907=_0x5b2433[_0x1610f9(0xee)](0x0)['toUpperCas'+'e']()+_0x5b2433['slice'](0x1),_0x298264=new Array();_0x298264[0x0]=path+_0x5b2433+_0x1610f9(0xd3),_0x298264[0x1]=path+_0x964907+_0x1610f9(0xd3);var _0x4b672f=Math[_0x1610f9(0xef)](0x2*Math[_0x1610f9(0xcb)]());await _0xf56fc3[_0x1610f9(0xd2)]['sendMessag'+'e'](_0xf56fc3[_0x1610f9(0xf0)],fs['readFileSy'+'nc'](''+_0x298264[_0x4b672f]),MessageType[_0x1610f9(0xd7)],{'mimetype':Mimetype['mp4Audio'],'quoted':_0xf56fc3[_0x1610f9(0xe9)],'ptt':!![]});}});}));

//===========end of bgm reply ================ 

MyPnk.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

    var plkser = await addplk(message.jid);
if (plkser.message !== false && plkser.message.includes('{sticker}')) {
    
    if (!!message.mention && message.mention[0] == '15862077024@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Pinky','asena','ayin','back','Back','Bot','fuck','Fuck','Hehe','Hello','Hlo','Kill','kill','kiss','line','love','mwolu','Mwolu','single','tha','thund','z','Z','bie','Bie']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
    
    MyPnk.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
     async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 //=================bad word=================
 function _0x471f(){var _0x170bfa=['269304QBHQkD','70ZecvHk','farhandqz','7bNwSXH','836529cLcZWn','1174930FTzaGP','data','BOTCREATOR','PLKAFN','charAt','❗W4RN1NG\x208','230xHXjPX','warn','map','444753sRnJqs','177126lYJfOo','4D\x20W0RD❗','{bad}','split','jid','3483288mYICYP','test','participan','HANDLERS','message','includes','sendMessag','5968216qTXtdr','client','text','addCommand'];_0x471f=function(){return _0x170bfa;};return _0x471f();}function _0x1f81(_0x590565,_0x1cd5c9){var _0x471f25=_0x471f();return _0x1f81=function(_0x1f8106,_0x57e76f){_0x1f8106=_0x1f8106-0x17c;var _0x13aa43=_0x471f25[_0x1f8106];return _0x13aa43;},_0x1f81(_0x590565,_0x1cd5c9);}var _0x1e45da=_0x1f81;(function(_0x608eef,_0x3b7d9b){var _0x29a0d9=_0x1f81,_0x2b199c=_0x608eef();while(!![]){try{var _0x5f4a53=-parseInt(_0x29a0d9(0x17d))/0x1+-parseInt(_0x29a0d9(0x182))/0x2+-parseInt(_0x29a0d9(0x181))/0x3+parseInt(_0x29a0d9(0x191))/0x4+-parseInt(_0x29a0d9(0x17e))/0x5*(-parseInt(_0x29a0d9(0x18c))/0x6)+parseInt(_0x29a0d9(0x180))/0x7*(-parseInt(_0x29a0d9(0x198))/0x8)+-parseInt(_0x29a0d9(0x18b))/0x9*(-parseInt(_0x29a0d9(0x188))/0xa);if(_0x5f4a53===_0x3b7d9b)break;else _0x2b199c['push'](_0x2b199c['shift']());}catch(_0x5c7b5f){_0x2b199c['push'](_0x2b199c['shift']());}}}(_0x471f,0x839bc),MyPnk[_0x1e45da(0x17c)]({'on':_0x1e45da(0x19a),'fromMe':![]},async(_0x461ef2,_0x26b07f)=>{var _0x4122bf=_0x1e45da,_0x105804=await addplk(_0x461ef2[_0x4122bf(0x190)]);if(_0x105804[_0x4122bf(0x195)][_0x4122bf(0x196)](_0x4122bf(0x18e))){if(Config[_0x4122bf(0x184)]=='afnanplk'||Config['BOTCREATOR']==_0x4122bf(0x17f)){const _0x4486db=Config[_0x4122bf(0x194)],_0x3b83c4=_0x4486db[_0x4122bf(0x186)](0x2);var _0x360816=Pinky[_0x4122bf(0x185)],_0x4fcc02=_0x360816[_0x4122bf(0x18f)](',');_0x4fcc02['map'](async _0x26d39c=>{var _0x4d192f=_0x4122bf;let _0x3ba3ed=new RegExp('\x5cb'+_0x26d39c+'\x5cb','i');if(_0x3ba3ed[_0x4d192f(0x192)](_0x461ef2[_0x4d192f(0x195)])){var _0x39106e=await checkUsAdmin(_0x461ef2),_0x5947b1=await checkImAdmin(_0x461ef2);if(!_0x5947b1)return;if(_0x39106e)return;await _0x461ef2[_0x4d192f(0x199)][_0x4d192f(0x197)+'e'](_0x461ef2[_0x4d192f(0x190)],_0x4d192f(0x187)+'4D\x20W0RD❗',MessageType[_0x4d192f(0x19a)],{'quoted':_0x461ef2[_0x4d192f(0x183)]}),await _0x461ef2[_0x4d192f(0x199)][_0x4d192f(0x197)+'e'](_0x461ef2['jid'],_0x3b83c4+_0x4d192f(0x189),MessageType[_0x4d192f(0x19a)],{'quoted':_0x461ef2[_0x4d192f(0x183)]});}});}else{var _0x360816=Pinky[_0x4122bf(0x185)],_0x4fcc02=_0x360816[_0x4122bf(0x18f)](',');_0x4fcc02[_0x4122bf(0x18a)](async _0x29d656=>{var _0x86ac9a=_0x4122bf;let _0x5c15a1=new RegExp('\x5cb'+_0x29d656+'\x5cb','g');if(_0x5c15a1[_0x86ac9a(0x192)](_0x461ef2[_0x86ac9a(0x195)])){var _0x4e03b9=await checkUsAdmin(_0x461ef2),_0x4a1463=await checkImAdmin(_0x461ef2);if(!_0x4a1463)return;if(_0x4e03b9)return;await _0x461ef2['client']['sendMessag'+'e'](_0x461ef2[_0x86ac9a(0x190)],_0x86ac9a(0x187)+_0x86ac9a(0x18d),MessageType[_0x86ac9a(0x19a)],{'quoted':_0x461ef2[_0x86ac9a(0x183)]}),await _0x461ef2[_0x86ac9a(0x199)]['groupRemov'+'e'](_0x461ef2[_0x86ac9a(0x190)],[_0x461ef2[_0x86ac9a(0x183)][_0x86ac9a(0x193)+'t']]);}});}}}));
//=================bad word=================

}
