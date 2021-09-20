/* 
plk
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const luttapi = require('../luttapi');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers3');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'TR') {
    dlang_dsc = 'Yanıtlanan mesajın dilini tahmin eder.'
    closer_res = 'En Yakın Sonuç:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Benzerlik:'
    dlang_other = 'Diğer Diller'
    dlang_input = 'İşlenen Metin:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'ML') {
    dlang_dsc = 'മറുപടി നൽകിയ സന്ദേശത്തിന്റെ ഭാഷ ess ഹിക്കുക.'
    closer_res = 'ഏറ്റവും അടുത്ത ഫലം:'
    dlang_lang = 'നാവ്:'
    dlang_similarity = 'സമാനത:'
    dlang_other = 'മറ്റ് ഭാഷകൾ'
    dlang_input = 'പ്രോസസ്സ് ചെയ്ത വാചകം:'
}
if (config.LANG == 'ID') {
    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'
    closer_res = 'Hasil Terdekat:'
    dlang_lang = 'Lidah:'
    dlang_similarity = 'Kesamaan:'
    dlang_other = 'Bahasa Lainnya'
    dlang_input = 'Teks yang Diproses:'
}


if (config.WORKTYPE == 'public) {
  
Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {
    if (!message.reply_message.txt)
      return await message.sendMessage(Lang.NEED_REPLY, {
        quoted: message.data,
      });
    let match2 = match.split(" ")[0];
    let match1 = match.split(" ")[1];
    match1 = match1 === "" || match1 === undefined ? "auto" : match1;
    match2 = match2 === "" || match2 === undefined ? config.LANG : match2;
    ceviri = await translatte(message.reply_message.text, {
      from: match1,
      to: match2,
    });
    if ("text" in ceviri) {
      return await message.sendMessage(Lang.TRT.format(match1, match2, ceviri.text),
        { quoted: message.quoted }
      );
    } else {
      return await message.sendMessage(Lang.TRANSLATE_ERROR, {
        quoted: message.data,
      });
    }
  }
);

Asena.addCommand({ pattern: "tts ?(.*)", fromMe: fm, desc: Lang.TTS_DESC },async (message, match) => {
    if (match == "") return;
    let LANG = config.LANG.toLowerCase(),
      ttsMessage = match;
    if ((langMatch = match.match("\\{([a-z]{2})\\}"))) {
      LANG = langMatch[1];
      ttsMessage = ttsMessage.replace(langMatch[0], "");
    }
    let buffer = await SpeachToText(LANG, ttsMessage);
    return await message.sendMessage(buffer, { ptt: true }, MessageType.audio);
  }
);

Asena.addCommand({ pattern: "song ?(.*)", fromMe: true, desc: Lang.SONG_DESC },async (message, match) => {
    match = !message.reply_message ? match : message.reply_message.text;
    if (match === "")
      return await message.sendMessage(Lang.NEED_TEXT_SONG, {
        quoted: message.data,
      });
    if (!ytid.test(match)) {
      let arama = await yts(match);
      arama = arama.all;
      if (arama.length < 1)
        return await message.sendMessage(
          "```" + `${match} not found.` + "```",
          { quoted: message.data }
        );
      let msg = await generateListMessage(arama);
      return await message.sendMessage(msg, {}, MessageType.listMessage);
    }
    let bit = 192;
    if (
      (matched = match.match(
        "\\{((320)|(3[0-1][0-9]{1})|([1-2][0-9]{2})|([4-9][0-9]{1})|(3[2-9]))\\}"
      ))
    ) {
      bit = parseInt(matched[1]);
      match = match.replace(matched[0], "").trim();
    }
    try {
      let vid = ytid.exec(match)[1];
      await message.sendMessage(Lang.DOWNLOADING_SONG);
      let stream = ytdl(vid, {
        quality: "highestaudio",
      });
      let songname = new Date().getTime() + ".mp3";
      let buffer = await song(songname, stream, bit);
      return await message.sendMessage(
        buffer,
        {
          mimetype: Mimetype.mp4Audio,
          quoted: message.data,
          ptt: false,
        },
        MessageType.audio
      );
    } catch (error) {
      return await message.sendMessage("```" + `Downloading failed.` + "```", {
        quoted: message.data,
      });
    }
  }
);

Asena.addCommand({ pattern: "video ?(.*)", fromMe: fm, desc: Lang.VIDEO_DESC },async (message, match) => {
    match = !message.reply_message ? match : message.reply_message.text;
    let vid = ytid.exec(match);
    if (match === "" || !vid) return await message.sendMessage(Lang.NEED_VIDEO);
    try {
      let arama = await yts({ videoId: vid[1] });
      if (arama.seconds === 0)
        return await message.sendMessage(Lang.NO_SONG, {
          quoted: message.data,
        });
      await message.sendMessage(Lang.DOWNLOADING_VIDEO);
      let yt = ytdl(arama.videoId, {
        filter: (format) =>
          format.container === "mp4" &&
          ["720p", "480p", "360p", "240p", "144p"].map(() => true),
      });
      yt.pipe(fs.createWriteStream("./" + arama.videoId + ".mp4"));
      yt.on("end", async () => {
        return await message.sendMessage(
          fs.readFileSync("./" + arama.videoId + ".mp4"),
          { mimetype: Mimetype.mp4, quoted: message.quoted },
          MessageType.video
        );
      });
    } catch {
      return await message.sendMessage(Lang.NO_RESULT);
    }
  }
);

Asena.addCommand({ pattern: "yts ?(.*)", fromMe: true, desc: Lang.YT_DESC },async (message, match) => {
    if (match === "") return await message.sendMessage(Lang.NEED_WORDS);
    try {
      var arama = await yts(match);
    } catch {
      return await message.sendMessage(Lang.NOT_FOUND);
    }
    let mesaj = "";
    arama.all.map((video) => {
      mesaj += "*" + video.title + "* - " + video.url + "\n";
    });
    return await message.sendMessage(mesaj);
  }
);

Asena.addCommand({ pattern: "find", fromMe: true, desc: Lang.FIND_DESC },async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.audio && !message.reply_message.video)
    )
      return await message.sendMessage(Lang.FIND_NEED_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "find"
    );
    let buff = await audioCut(location, 0, 15, "findo");
    const data = await IdentifySong(buff);
    if (!data) return;
    if (!data.status) return await message.sendMessage(Lang.NOT_FOUND);
    return await message.sendMessage(Lang.FIND_MSG.format(data.data.title, data.data.artists, data.data.genre, data.data.album, data.data.release_date), { quoted: message.quoted });
  }
);

Asena.addCommand({ pattern: "wiki ?(.*)", fromMe: true, desc: Lang.WIKI_DESC },async (message, match) => {
    if (match === "") return await message.sendMessage(Lang.NEED_WORDS);
    await message.sendMessage(Lang.SEARCHING);
    try {
      let arama = await wiki({
        apiUrl: "https://" + config.LANG + ".wikipedia.org/w/api.php",
      }).page(match);
      let info = await arama.rawContent();
      return await message.sendMessage(info);
    } catch (error) {
      return await message.sendMessage(`*${error.message}*`);
    }
  }
);

Asena.addCommand({ pattern: "img ?(.*)", fromMe: true, desc: Lang.IMG_DESC },async (message, match) => {
    if (match === "") return await message.sendMessage(Lang.NEED_WORDS);
    gis(match, async (error, result) => {
      for (let i = 0; i < (result.length < 10 ? result.length : 10); i++) {
        let { buffer } = await getBuffer(result[i].url);
        if (buffer != false)
          await message
            .sendMessage(buffer, { quoted: message.data }, MessageType.image)
            .catch((e) => console.log(e.message));
      }
    });
  }
);
