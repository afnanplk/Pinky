/* 
*/

const MyPnky = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

if (config.STANDPLK == 'off' || config.STANDPLK == 'OFF') {
   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'EN') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'turn on and turn of bgm. -bot owner command'        
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off'
    }
 else {
        l_dsc = 'turn on and turn of bgm. -bot owner command'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
    }
    MyPnky.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: l_dsc, usage: '.bgm on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BGM_FILTER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));

 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''

    if (config.LANG == 'ML') {
      
      plk_desc = 'മറുപടി bgm മോഡ് മാറ്റാൻ'
      BGM_ONE = '𝐁𝐆𝐌 തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'
      BGM_TWO = '𝐁𝐆𝐌 തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'
    }
    if (config.LANG == 'EN') {  
    plk_desc = 'change reply message BGM mode'
    BGM_ONE = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 𝟭𝘀𝘁 𝐦𝐨𝐝𝐞'
    BGM_TWO = '𝐁𝐆𝐌 𝐭𝐲𝐩𝐞 𝐜𝐡𝗮𝐧𝐠𝐞𝐝 𝐭𝐨 2nd 𝐦𝐨𝐝𝐞'
    }


 MyPnky.addCommand({pattern: 'bgm ?(.*)', fromMe: true, desc: plk_desc, usage: '.bgm one / two' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE)
        }
    }));

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        succ_on = 'Antilink Başarıyla Açıldı!'
        succ_off = 'Antilink Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'Antilink alətini aktivləşdirir.'
        alr_on = 'Antilink hazırda açıqdır!'
        alr_off = 'Antilink hazırda bağlıdır!'
        succ_on = '*Antilink Uğurla Açıldı!*'
        succ_off = '*Antilink Uğurla Bağlandı!*'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        succ_on = 'एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = 'एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = 'ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = 'ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        succ_on = 'Антилинк успешно открыт!'
        succ_off = 'Антилинк успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '¡Antilink ya está abierto!'
        alr_off = '¡Antilink está cerrado actualmente!'
        succ_on = '¡Antilink se abrió con éxito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    MyPnky.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'false'
                    } 
                });
                await message.sendMessage(succ_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTİ_LİNK']: 'true'
                    } 
                });
                await message.sendMessage(succ_on)
        }
    }));


   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var TLINK_on = ''
    var TLINK_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = '.antilink does not ban all links but mlink does'
        alr_on = '!'
        alr_off = '!'
        LINKT_on = '*M_LINK TURNED ON*'
        LINKT_off = '*M_LINK TURNED OFF*'
    }
    if (config.LANG == 'ML') {
        l_dsc = '.antilink എല്ലാ ലിങ്കുകളും നിരോധിക്കുന്നില്ല, പക്ഷേ mlink ചെയ്യുന്നു'
        alr_on = '!'
        alr_off = '!'
        LINKT_on = 'M_LINK TURNED ON'
        LINKT_off = 'M_LINK TURNED Off'
    }
   
    MyPnky.addCommand({pattern: 'mlink ?(.*)', fromMe: true, desc: l_dsc, usage: '.mlink on / of' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'false'
                    } 
                });
                await message.sendMessage(LINKT_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'true'
                    } 
                });
                await message.sendMessage(LINKT_on)
        }
    }));


 var plk_desc = ''
 var BGM_ONE = ''
 var BGM_TWO = ''

    if (config.LANG == 'ML') {
      
      plk_desc = 'ഓട്ടോ സ്റ്റിക്കർ ഓണാക്കാനും ഓഫാക്കാനും'
      BGM_ONE = 'ഓട്ടോ സ്റ്റിക്കർ ഓണാക്കി'
      BGM_TWO = 'ഓട്ടോ സ്റ്റിക്കർ ഓഫാക്കി'
    }
    if (config.LANG == 'EN') {
    
    plk_desc = 'to turn on and off auto sticker'
    STR_ON = '🇦​🇺​🇹​🇴​ 🇸​🇹​🇮​🇨​🇰​🇪​🇷​ 🇹​🇺​🇷​🇳​🇪​🇩​ 🇴​🇳​'
    STR_OFF = '🇦​🇺​🇹​🇴​ 🇸​🇹​🇮​🇨​🇰​🇪​🇷​ 🇹​🇺​🇷​🇳​🇪​🇩​ 🇴​🇫​🇫​'
    }


 MyPnky.addCommand({pattern: 'austick ?(.*)', fromMe: true, desc: plk_desc, usage: '.austick on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'true'
                    } 
                });
                await message.sendMessage(STR_ON)
        } else if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STICKER_REPLY']: 'false'
                    } 
                });
                await message.sendMessage(STR_OFF)
        }
    }));

    
 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {
    
    W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ' 
    W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
    W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    if (config.LANG == 'ML') {
      
      W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ'
      W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
      W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    MyPnky.addCommand({pattern: 'work ?(.*)', fromMe: true,dontAddCommandList: true, }, (async (message, match) => {
        if (match[1] == 'public') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'admin'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));

    
var plk_STN = ''
var AFN_STN = ''
 
  if (config.LANG == 'EN') {
    
    plk_STN = 'make your bot standby'
    AFN_STN = 'make your bot not standby'  
    }

    if (config.LANG == 'ML') {
      
      plk_STN = 'നിങ്ങളുടെ ബോട്ട് സ്റ്റാൻഡ്ബൈ ആക്കുക'
      AFN_STN = 'സ്റ്റാൻഡ്ബൈയിൽ നിന്ന് നിങ്ങളുടെ ബോട്ട് മാറ്റുക' 
    }

MyPnky.addCommand({pattern: 'standby ?(.*)', fromMe: true, desc: plk_STN }, (async (message, match) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STANDBY_MODE']: 'on'
                    } 
                });
     await message.sendMessage('your bot is standby now')
    }));
}
MyPnky.addCommand({pattern: 'run again ?(.*)', fromMe: true, desc: AFN_STN }, (async (message, match) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STANDBY_MODE']: 'off'
                    } 
                });
    await message.sendMessage('your bot will start running in 1 to 2 minute')
    }));

function _0x440b(_0x199178,_0x1b8e4a){const _0x528d9e=_0x528d();return _0x440b=function(_0x440bae,_0x30533f){_0x440bae=_0x440bae-0x154;let _0x3c0198=_0x528d9e[_0x440bae];return _0x3c0198;},_0x440b(_0x199178,_0x1b8e4a);}const _0x119af0=_0x440b;(function(_0x1c5b06,_0x4c772c){const _0x233a6e=_0x440b,_0x4a06ce=_0x1c5b06();while(!![]){try{const _0x2e0b76=parseInt(_0x233a6e(0x15e))/0x1*(-parseInt(_0x233a6e(0x174))/0x2)+parseInt(_0x233a6e(0x165))/0x3*(-parseInt(_0x233a6e(0x185))/0x4)+-parseInt(_0x233a6e(0x164))/0x5+parseInt(_0x233a6e(0x156))/0x6*(-parseInt(_0x233a6e(0x173))/0x7)+-parseInt(_0x233a6e(0x16d))/0x8+-parseInt(_0x233a6e(0x15c))/0x9*(-parseInt(_0x233a6e(0x15d))/0xa)+parseInt(_0x233a6e(0x161))/0xb;if(_0x2e0b76===_0x4c772c)break;else _0x4a06ce['push'](_0x4a06ce['shift']());}catch(_0xab9f26){_0x4a06ce['push'](_0x4a06ce['shift']());}}}(_0x528d,0xdb835),MyPnky[_0x119af0(0x175)]({'pattern':_0x119af0(0x15b)+_0x119af0(0x16b),'fromMe':!![],'desc':'changes\x20su'+_0x119af0(0x179),'usage':_0x119af0(0x16f)+_0x119af0(0x176)},async(_0xf1661b,_0x5a855e)=>{const _0x24ce82=_0x119af0;if(config[_0x24ce82(0x163)]==_0x24ce82(0x172)||config[_0x24ce82(0x163)]==_0x24ce82(0x168)){if(_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)]!==![]&&_0x5a855e[0x1]==''){let _0x188d20=_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)][_0x24ce82(0x189)][_0x24ce82(0x17a)+'t'];await heroku[_0x24ce82(0x17f)](baseURI+(_0x24ce82(0x167)+'rs'),{'body':{['SUDO']:config[_0x24ce82(0x177)]+','+_0x188d20[_0x24ce82(0x178)](_0x24ce82(0x180)+_0x24ce82(0x15f),',0')}}),await _0xf1661b['sendMessag'+'e'](_0x24ce82(0x18a)+_0x24ce82(0x169)+_0x24ce82(0x154));}else{if(_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)]==![]&&_0x5a855e[0x1]!==''){if(_0x5a855e[0x1]==_0x24ce82(0x15a))await heroku[_0x24ce82(0x17f)](baseURI+('/config-va'+'rs'),{'body':{[_0x24ce82(0x177)]:config[_0x24ce82(0x177)]+','+_0x5a855e[0x1]+',0'}}),await _0xf1661b[_0x24ce82(0x182)+'e'](_0x24ce82(0x16c)+_0x24ce82(0x16a)+_0x24ce82(0x159)+_0x24ce82(0x187));else _0x5a855e[0x1]!=='clean'&&(await heroku[_0x24ce82(0x17f)](baseURI+(_0x24ce82(0x167)+'rs'),{'body':{[_0x24ce82(0x177)]:config[_0x24ce82(0x177)]+','+_0x5a855e[0x1]+',0'}}),await _0xf1661b['sendMessag'+'e'](_0x24ce82(0x18a)+_0x24ce82(0x183)+_0x24ce82(0x17e)+'G'));}else await _0xf1661b[_0x24ce82(0x182)+'e'](_0x24ce82(0x166)+'NUMBER\x20OR\x20'+'REPLY\x20TO\x20S'+_0x24ce82(0x158)+_0x24ce82(0x17c)+_0x24ce82(0x170)+_0x24ce82(0x171)+_0x24ce82(0x181)+_0x24ce82(0x188)+_0x24ce82(0x184)+_0x24ce82(0x186)+_0x24ce82(0x17d)+_0x24ce82(0x157));}}else await _0xf1661b[_0x24ce82(0x182)+'e']('thise\x20feat'+'ure\x20is\x20cre'+_0x24ce82(0x16e)+_0x24ce82(0x160)+_0x24ce82(0x162));}));function _0x528d(){const _0x43f5ea=['clean','addsudo\x20?(','27eCOsex','1904790QbKCKC','93187hPShrf','p.net','inky\x20and\x20j','37562305AaMcBf','ulie','BOTCREATOR','1181240pKUNfb','2721267xWtJvg','```NEED\x20A\x20','/config-va','farhandqz','DDED\x0a\x20BOT\x20','O\x20REMOVED.','.*)','```ALL\x20SUD','813624OrWftS','ated\x20for\x20p','.sudo\x20*you','AKE\x20THEM\x20S','UDO\x20\x0a\x0a\x20com','afnanplk','140hINLty','2VwLpJE','addCommand','r\x20number*','SUDO','replace','do\x20numbers','participan','reply_mess','SSAGE\x20TO\x20M','move\x20all\x20s','\x20RESTARTIN','patch','@s.whatsap','mand\x20:\x20.ad','sendMessag','DDED\x20\x0a\x20BOT','n\x20\x0a\x20descri','4jSPtzN','ption\x20:\x20re','ARTING```','dsudo\x20clea','data','NEW\x20SUDO\x20A','RESTARTING','age','524652gLOnQo','udo','OMEONES\x20ME','\x20\x0aBOT\x20REST'];_0x528d=function(){return _0x43f5ea;};return _0x528d();}
