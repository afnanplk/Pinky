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
const { AfnanPLK, addplk } = require("./sql/tryplk");
const afnp = Pinky.PLKAFN !== false ? Pinky.PLKAFN.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {

MyPnk.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
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
MyPnk.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
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
MyPnk.addCommand({on: 'text', fromMe: false }, (async (message, match) => {

    var plkser = await addplk(message.jid);
if (plkser.message !== false && plkser.message.includes('{bgm}')) {
    
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','King','Kooi','Tuttu','Azaru','Ramos','Tentacion','baby','Love','nirthada','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','ayilla','bie','Chiri','colony','enth','entha','Fuck','Goal','Hambada','Kanja','Killedi','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','sed','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss',,'Haters','ayn','Kgf','😎','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','sneham','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','lub','recharge','Recharge','Pinky','chill','Chill','help','Help','kunda','Kunda','povano','Povano','sthalam','Sthalam','tholvi','Tholvi','vannu','Vannu']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }
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
}
else if (Config.WORKTYPE == 'public') {

MyPnk.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
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
MyPnk.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
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
    
if (Config.PLKBGM == 'one') {  
    
MyPnk.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        
    var plkser = await addplk(message.jid);
if (plkser.message !== false && plkser.message.includes('{bgm}')) {
    
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/media/trance.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.AFNN) {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/media/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','King','Kooi','Love','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','sed','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss',,'Haters','ayn','Kgf','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Umbi','umbi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','sneham','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','Chill','chill','help','Help','Kunda','kunda','povano','sthalam','Sthalam','tholvi','Tholvi','vannu','Vannu','Pinkymol','malayalam','Malayalam','vaa','Vaa','lub','Ayin','thyr','Thyr','Sad','sad','Sed','kiss','Kiss','baby','Baby','hi','voice','love','Admin','admin','Remove','remove','boss','sorry','Sorry','Owner','owner','Gud nyt','dream','Dream','Avastha','Bye','bye']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/media/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

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
}
    if (Config.PLKBGM == 'two') {    
    MyPnk.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   

        var plkser = await addplk(message.jid);
if (plkser.message !== false && plkser.message.includes('{bgm}')) {
        
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/uploads/trance.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.AFNN) {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/bgmone/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Hi','Fek','Ariyo','Ayn','Aysheri','Ayye','Baby','Bot','Chill','Da','Delete','Enth','Eppadi','Ethi','Happy','Hehe','Hello','Help','Hlo','How','Kali','Kd','King','Kollum','Kopp','Kundan','Life','Line','Love','Lover','Muthe','Myr','Nallath','Nice','Orakkam','Paatt','Para','Poda','Povoola','Pro','Pwoli','Remove','Sad','Scene','Sed','Sheri','Sherikkum','Single','Thanne','Thund','Vaa','Vanno','Vannu','Vere bot','Wait','Why','ariyo','ayn','aysheri','ayye','baby','kando','Kando','chill','da','delete','enth','eppadi','ethi','happy','hehe','hello','help','hlo','how','kali','kd','king','kollum','kopp','kundan','leave','life','line','love','mrng','muthe','myr','nallath','nice','njan','orakkam','paatt','para','poda','podo','povoola','pro','pwoli','remove','sad','scene','sed','sheri','sherikkum','single','tagall','thanne','thund','vaa','vanno','vannu','vere bot','wait','why','Pinky','hi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/bgmone/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

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
}
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
 
 function _0x471f(){var _0x170bfa=['269304QBHQkD','70ZecvHk','farhandqz','7bNwSXH','836529cLcZWn','1174930FTzaGP','data','BOTCREATOR','PLKAFN','charAt','❗W4RN1NG\x208','230xHXjPX','warn','map','444753sRnJqs','177126lYJfOo','4D\x20W0RD❗','{bad}','split','jid','3483288mYICYP','test','participan','HANDLERS','message','includes','sendMessag','5968216qTXtdr','client','text','addCommand'];_0x471f=function(){return _0x170bfa;};return _0x471f();}function _0x1f81(_0x590565,_0x1cd5c9){var _0x471f25=_0x471f();return _0x1f81=function(_0x1f8106,_0x57e76f){_0x1f8106=_0x1f8106-0x17c;var _0x13aa43=_0x471f25[_0x1f8106];return _0x13aa43;},_0x1f81(_0x590565,_0x1cd5c9);}var _0x1e45da=_0x1f81;(function(_0x608eef,_0x3b7d9b){var _0x29a0d9=_0x1f81,_0x2b199c=_0x608eef();while(!![]){try{var _0x5f4a53=-parseInt(_0x29a0d9(0x17d))/0x1+-parseInt(_0x29a0d9(0x182))/0x2+-parseInt(_0x29a0d9(0x181))/0x3+parseInt(_0x29a0d9(0x191))/0x4+-parseInt(_0x29a0d9(0x17e))/0x5*(-parseInt(_0x29a0d9(0x18c))/0x6)+parseInt(_0x29a0d9(0x180))/0x7*(-parseInt(_0x29a0d9(0x198))/0x8)+-parseInt(_0x29a0d9(0x18b))/0x9*(-parseInt(_0x29a0d9(0x188))/0xa);if(_0x5f4a53===_0x3b7d9b)break;else _0x2b199c['push'](_0x2b199c['shift']());}catch(_0x5c7b5f){_0x2b199c['push'](_0x2b199c['shift']());}}}(_0x471f,0x839bc),MyPnk[_0x1e45da(0x17c)]({'on':_0x1e45da(0x19a),'fromMe':![]},async(_0x461ef2,_0x26b07f)=>{var _0x4122bf=_0x1e45da,_0x105804=await addplk(_0x461ef2[_0x4122bf(0x190)]);if(_0x105804[_0x4122bf(0x195)][_0x4122bf(0x196)](_0x4122bf(0x18e))){if(Config[_0x4122bf(0x184)]=='afnanplk'||Config['BOTCREATOR']==_0x4122bf(0x17f)){const _0x4486db=Config[_0x4122bf(0x194)],_0x3b83c4=_0x4486db[_0x4122bf(0x186)](0x2);var _0x360816=Pinky[_0x4122bf(0x185)],_0x4fcc02=_0x360816[_0x4122bf(0x18f)](',');_0x4fcc02['map'](async _0x26d39c=>{var _0x4d192f=_0x4122bf;let _0x3ba3ed=new RegExp('\x5cb'+_0x26d39c+'\x5cb','i');if(_0x3ba3ed[_0x4d192f(0x192)](_0x461ef2[_0x4d192f(0x195)])){var _0x39106e=await checkUsAdmin(_0x461ef2),_0x5947b1=await checkImAdmin(_0x461ef2);if(!_0x5947b1)return;if(_0x39106e)return;await _0x461ef2[_0x4d192f(0x199)][_0x4d192f(0x197)+'e'](_0x461ef2[_0x4d192f(0x190)],_0x4d192f(0x187)+'4D\x20W0RD❗',MessageType[_0x4d192f(0x19a)],{'quoted':_0x461ef2[_0x4d192f(0x183)]}),await _0x461ef2[_0x4d192f(0x199)][_0x4d192f(0x197)+'e'](_0x461ef2['jid'],_0x3b83c4+_0x4d192f(0x189),MessageType[_0x4d192f(0x19a)],{'quoted':_0x461ef2[_0x4d192f(0x183)]});}});}else{var _0x360816=Pinky[_0x4122bf(0x185)],_0x4fcc02=_0x360816[_0x4122bf(0x18f)](',');_0x4fcc02[_0x4122bf(0x18a)](async _0x29d656=>{var _0x86ac9a=_0x4122bf;let _0x5c15a1=new RegExp('\x5cb'+_0x29d656+'\x5cb','g');if(_0x5c15a1[_0x86ac9a(0x192)](_0x461ef2[_0x86ac9a(0x195)])){var _0x4e03b9=await checkUsAdmin(_0x461ef2),_0x4a1463=await checkImAdmin(_0x461ef2);if(!_0x4a1463)return;if(_0x4e03b9)return;await _0x461ef2['client']['sendMessag'+'e'](_0x461ef2[_0x86ac9a(0x190)],_0x86ac9a(0x187)+_0x86ac9a(0x18d),MessageType[_0x86ac9a(0x19a)],{'quoted':_0x461ef2[_0x86ac9a(0x183)]}),await _0x461ef2[_0x86ac9a(0x199)]['groupRemov'+'e'](_0x461ef2[_0x86ac9a(0x190)],[_0x461ef2[_0x86ac9a(0x183)][_0x86ac9a(0x193)+'t']]);}});}}}));


}
}
