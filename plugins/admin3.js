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

Asena.addCommand(
  { pattern: "pitch", fromMe: true, desc: Lang.PITCH_DESC },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.audio)
      return await message.sendMessage(Lang.NEED_CUT_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "pitchmp3"
    );
    let buffer = await getFfmpegBuffer(location, "lowmp3.mp3", "pitch");
    return await message.sendMessage(
      buffer,
      { filename: "lowmp3.mp3", mimetype: Mimetype.mp3 },
      MessageType.audio
    );
  }
);

Asena.addCommand(
  { pattern: "avec", fromMe: true, desc: Lang.AVEC_DESC },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.audio)
      return await message.sendMessage(Lang.NEED_CUT_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "avec"
    );
    let buffer = await getFfmpegBuffer(location, "avec.mp4", "avec");
    return await message.sendMessage(
      buffer,
      { mimetype: Mimetype.mp4 },
      MessageType.video
    );
  }
);

Asena.addCommand(
  { pattern: "getjids ?(.*)", fromMe: true, desc: "Get Jids name." },
  async (message, match) => {
    if (match === "")
      return await message.sendMessage("Choose group or personal");
    let msg = "";
    let chats = message.client.chats.all();
    if (match == "group") {
      for (let chat of chats) {
        if (chat.jid.endsWith("@g.us"))
          msg += `${chat.jid} : ${await getName(chat.jid, message.client)}\n`;
      }
    } else if (match == "personal") {
      for (let chat of chats) {
        if (!chat.jid.endsWith("@g.us") && !chat.jid.endsWith("@broadcast"))
          msg += `${chat.jid} : ${await getName(chat.jid, message.client)}\n`;
      }
    }
    return await message.sendMessage("```" + msg + "```");
  }
);

Asena.addCommand(
  { pattern: "pp", fromMe: true, desc: Lang.PP_DESC },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
      return await message.sendMessage(Lang.NEED_PHOTO);
    await message.sendMessage(Lang.PPING);
    let location = await message.reply_message.downloadAndSaveMediaMessage();
    await message.client.updateProfilePicture(
      message.client.user.jid,
      fs.readFileSync(location)
    );
  }
);

Asena.addCommand(
  { pattern: "block ?(.*)", fromMe: true, desc: Lang.BLOCK_DESC },
  async (message, match) => {
    if (message.reply_message !== false) {
      await message.sendMessage(
        "@" +
          message.reply_message.jid.split("@")[0] +
          "```, " +
          Lang.BLOCKED +
          "!```",
        {
          quotedMessage: message.reply_message.data,
          contextInfo: {
            mentionedJid: [
              message.reply_message.jid.replace("c.us", "s.whatsapp.net"),
            ],
          },
        }
      );
      await message.client.blockUser(message.reply_message.jid, "add");
    } else if (message.mention !== false) {
      message.mention.map(async (user) => {
        await message.sendMessage(
          "@" + user.split("@")[0] + "```, " + Lang.BLOCKED + "!```",
          {
            previewType: 0,
            contextInfo: {
              mentionedJid: [user.replace("c.us", "s.whatsapp.net")],
            },
          }
        );
        await message.client.blockUser(user, "add");
      });
    } else if (!message.isGroup) {
      await message.sendMessage("*" + Lang.BLOCKED_UPPER + "*");
      await message.client.blockUser(message.jid, "add");
    } else {
      await message.sendMessage("*" + Lang.NEED_USER + "*");
    }
  }
);

Asena.addCommand(
  { pattern: "unblock ?(.*)", fromMe: true, desc: Lang.UNBLOCK_DESC },
  async (message, match) => {
    if (message.reply_message !== false) {
      await message.client.blockUser(message.reply_message.jid, "remove");
      await message.sendMessage(
        "@" +
          message.reply_message.jid.split("@")[0] +
          "```, " +
          Lang.UNBLOCKED +
          "!```",
        {
          quotedMessage: message.reply_message.data,
          contextInfo: {
            mentionedJid: [
              message.reply_message.jid.replace("c.us", "s.whatsapp.net"),
            ],
          },
        }
      );
    } else if (message.mention !== false) {
      message.mention.map(async (user) => {
        await message.client.blockUser(user, "remove");
        await message.sendMessage(
          "@" + user.split("@")[0] + "```, " + Lang.UNBLOCKED + "!```",
          {
            contextInfo: {
              mentionedJid: [user.replace("c.us", "s.whatsapp.net")],
            },
          }
        );
      });
    } else if (!message.isGroup) {
      await message.client.blockUser(message.jid, "remove");
      await message.sendMessage("*" + Lang.UNBLOCKED_UPPER + "*");
    } else {
      await message.sendMessage("*" + Lang.NEED_USER + "*");
    }
  }
);

Asena.addCommand(
  { pattern: "jid ?(.*)", fromMe: true, desc: Lang.JID_DESC },
  async (message, match) => {
    if (message.reply_message !== false) {
      await message.sendMessage(message.reply_message.jid);
    } else if (message.mention !== false) {
      message.mention.map(async (user) => {
        await message.sendMessage(user);
      });
    } else {
      await message.sendMessage(message.jid);
    }
  }
);

Asena.addCommand(
  { pattern: "setstatus ?(.*)", fromMe: true, desc: "set status." },
  async (message, match) => {
    if (!message.reply_message)
      return message.sendMessage("*Reply to a message!*");
    else if (message.reply_message.image) {
      let media = await message.reply_message.downloadMediaMessage();
      return await message.setStatus(media, MessageType.image, {
        caption: match,
      });
    } else if (message.reply_message.video) {
      let media = await message.reply_message.downloadMediaMessage();
      return await message.setStatus(media, MessageType.video, {
        caption: match,
      });
    } else if (message.reply_message.txt) {
      let media = message.reply_message.text;
      return await message.setStatus(media, MessageType.text);
    }
  }
);

Asena.addCommand(
  { pattern: "setabout ?(.*)", fromMe: true, desc: "set about." },
  async (message, match) => {
    if (message.reply_message.txt) {
      return await message.client.setStatus(message.reply_message.text);
    } else return await message.sendMessage("*Reply to a text message!*");
  }
);
