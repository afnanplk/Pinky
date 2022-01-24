const MyPnky = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const { AfnanPLK, addplk } = require("./sql/tryplk");
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
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


if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {

function _0x5a18(_0x337e4d,_0x5b5769){var _0x5c038c=_0x5c03();return _0x5a18=function(_0x5a180a,_0x58e402){_0x5a180a=_0x5a180a-0x118;var _0xcccfaa=_0x5c038c[_0x5a180a];return _0xcccfaa;},_0x5a18(_0x337e4d,_0x5b5769);}var _0x1e3d5d=_0x5a18;function _0x5c03(){var _0x7c0c64=['client','712UwDKfx','match','14590XjnQFz','5577264rfvYzh','245egRZke','HANDLERS','commands','302968vWdKdQ','participan','text','bot\x20usage\x20','test','message','groupRemov','8274072BdHkkk','sendMessag','3cUSTbw','mandList','dontAddCom','jid','includes','2649970pQEtzC','260181PoceRg','map','pattern','data','1121141efdJrL','addCommand','startsWith','20ImDCov','toString'];_0x5c03=function(){return _0x7c0c64;};return _0x5c03();}(function(_0x216fbd,_0x5a53c7){var _0x295b88=_0x5a18,_0x5b023e=_0x216fbd();while(!![]){try{var _0x42f431=parseInt(_0x295b88(0x128))/0x1+-parseInt(_0x295b88(0x123))/0x2*(parseInt(_0x295b88(0x11e))/0x3)+parseInt(_0x295b88(0x12e))/0x4*(parseInt(_0x295b88(0x130))/0x5)+-parseInt(_0x295b88(0x11c))/0x6+-parseInt(_0x295b88(0x132))/0x7*(-parseInt(_0x295b88(0x135))/0x8)+-parseInt(_0x295b88(0x124))/0x9*(-parseInt(_0x295b88(0x12b))/0xa)+parseInt(_0x295b88(0x131))/0xb;if(_0x42f431===_0x5a53c7)break;else _0x5b023e['push'](_0x5b023e['shift']());}catch(_0x2be30c){_0x5b023e['push'](_0x5b023e['shift']());}}}(_0x5c03,0xc9dfb),MyPnky[_0x1e3d5d(0x129)]({'on':_0x1e3d5d(0x137),'fromMe':![],'deleteCommand':![]},async(_0x289f6d,_0x6e9197)=>{var _0x179717=_0x1e3d5d,_0x1e0d6f=await addplk(_0x289f6d['jid']);_0x1e0d6f[_0x179717(0x11a)]!==![]&&_0x1e0d6f[_0x179717(0x11a)][_0x179717(0x122)]('{nobot}')&&MyPnky[_0x179717(0x134)][_0x179717(0x125)](async _0x5181ba=>{var _0x341865=_0x179717;if(_0x5181ba[_0x341865(0x120)+_0x341865(0x11f)]||_0x5181ba[_0x341865(0x126)]===undefined)return;try{var _0x3fe156=_0x5181ba[_0x341865(0x126)][_0x341865(0x12c)]()[_0x341865(0x12f)](/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/),_0x21b9d7=_0x5181ba[_0x341865(0x126)]['toString']()[_0x341865(0x12f)](/(\W*)([A-Za-züşiğ öç1234567890]*)/)[0x2];}catch{var _0x3fe156=[_0x5181ba['pattern']];}var _0xa559a9='';/\[(\W*)\]/[_0x341865(0x119)](Config[_0x341865(0x133)])?_0xa559a9=Config[_0x341865(0x133)]['match'](/\[(\W*)\]/)[0x1][0x0]:_0xa559a9='.';if(_0x289f6d[_0x341865(0x11a)][_0x341865(0x12a)](_0x3fe156['length']>=0x3?_0xa559a9+_0x21b9d7:_0x5181ba[_0x341865(0x126)])){var _0x4e158a=await checkUsAdmin(_0x289f6d),_0x5a7f73=await checkImAdmin(_0x289f6d);if(!_0x5a7f73)return;if(_0x4e158a)return;await _0x289f6d[_0x341865(0x12d)][_0x341865(0x11d)+'e'](_0x289f6d[_0x341865(0x121)],_0x341865(0x118)+'not\x20allowe'+'d',MessageType[_0x341865(0x137)],{'quoted':_0x289f6d[_0x341865(0x127)]}),await _0x289f6d['client'][_0x341865(0x11b)+'e'](_0x289f6d[_0x341865(0x121)],[_0x289f6d[_0x341865(0x127)][_0x341865(0x136)+'t']]);}});}));
}
