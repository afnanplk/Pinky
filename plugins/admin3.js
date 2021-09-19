/* Copyright © 2021 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
coded by shahid-shazz
re edit by shahid-devil
LUTTAPI
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin3');

// LUTTAPPI

// THIS PLUGIN IS OWNED BY SHAHID-DEVIL_LUTTAPI


if (Config.WORKTYPE == 'public') {
Asena.addCommand(
  { pattern: "wasted", fromMe: true, desc: Lang.WASTED_DESC, usage: Lang.WASTED_USAGE },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.sendMessage(Lang.REPLY);
    let location = await message.reply_message.downloadMediaMessage();
    let buffer = await banner(location, "wasted");
    return await message.sendMessage(buffer, {}, MessageType.image);
  }
);

Asena.addCommand(
  { pattern: "trigged", fromMe: true, desc: Lang.TRIGGERED_DESC, usage: Lang.TRGGERED_USAGE },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.sendMessage(Lang.REPLY);
    let location = await message.reply_message.downloadMediaMessage();
    let buffer = await banner(location, "triggered");
    return await message.sendMessage(
      buffer,
      { mimetype: Mimetype.webp },
      MessageType.sticker
    );
  }
);

Asena.addCommand(
  { pattern: "bass ?(.*)", fromMe: true, desc: Lang.LOW_DESC },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.audio)
      return await message.sendMessage(Lang.NEED_CUT_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "basso"
    );
    let buffer = await getFfmpegBuffer(
      location,
      "bass.mp3",
      `bass,${match == "" ? 10 : match}`
    );
    return await message.sendMessage(
      buffer,
      { mimetype: Mimetype.mp4Audio },
      MessageType.audio
    );
  }
);

Asena.addCommand(
  { pattern: "treble ?(.*)", fromMe: true, desc: Lang.LOW_DESC },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.audio)
      return await message.sendMessage(Lang.NEED_CUT_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "trebleo"
    );
    let buffer = await getFfmpegBuffer(
      location,
      "treble.mp3",
      `treble,${match == "" ? 10 : match}`
    );
    return await message.sendMessage(
      buffer,
      { mimetype: Mimetype.mp4Audio },
      MessageType.audio
    );
  }
);
