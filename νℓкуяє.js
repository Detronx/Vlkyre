("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("events").EventEmitter.prototype._maxListeners = 0;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
console.error(error, "Uncaught Exception....");
});
require("./Core/νc໐rē.js");
require("./process");
var {
default: νℓкуяєConnect,
useSingleFileAuthState,
DisconnectReason,
generateForwardMessageContent,
prepareWAMessageMedia,
generateWAMessageFromContent,
generateMessageID,
downloadContentFromMessage,
makeInMemoryStore,
MessageRetryMap,
jidDecode,
proto,
} = require("@adiwajshing/baileys");
var pino = require("pino");
var fs = require("fs");
var chalk = require("chalk");
var qrcode = require("qrcode");
var CFonts = require("cfonts");
var express = require("express");
var Krone = require("node-cron");
var FileType = require("file-type");
var moment = require("moment-timezone");
var {
νkmake,
formatp,
formatDate,
getTime,
isUrl,
clockString,
runtime,
fetchJson,
getBuffer,
jsonformat,
format,
parseMention,
GIFBufferToVideoBuffer,
getRandom,
sleep,
getSizeMedia,
generateMessageTag,
} = require("./Core/myfunc");
var Canvas = require("discord-canvas");
var path = require("path");
var PhoneNumber = require("awesome-phonenumber");
var {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid,
} = require("./Core/exif");
var store = makeInMemoryStore({
logger: pino().child({ level: "silent", stream: "store" }),
});
var getVersionWaweb = () => {
let version;
try {
let a = fetchJson(
"https://web.whatsapp.com/check-update?version=1&platform=web"
);
version = [a.currentVersion.replace(/[.]/g, ", ")];
} catch {
version = [2, 2204, 13];
}
return version;
};
var msgRetryCounterMap = MessageRetryMap;
var autoPoke = Krone.schedule(
"0 0 * * *",
() => {
try {
console.log("Sending Pokemon....");
} catch (error) {
console.log(error);
}
},
{ scheduled: true, timezone: timezone }
);
var vport = process.env.PORT || 8080;
var νℓpage = express();
var { state, saveState } = useSingleFileAuthState("./Events/νℓкуяє.кяукηz");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function run() {
var νℓкуяє = νℓкуяєConnect({
auth: state,
printQRInTerminal: true,
logger: pino({ level: "silent" }),
browser: ["vlkyre", "Safari", "1.0.1"],
version: getVersionWaweb() || [2, 2204, 13],
msgRetryCounterMap,
getMessage: async (key) => {
return {
conversation: key,
};
},
});
store.bind(νℓкуяє.ev);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (
(decode.user && decode.server && decode.user + "@" + decode.server) ||
jid
);
} else return jid;
};

νℓкуяє.getName = (jid, withoutContact = false) => {
id = νℓкуяє.decodeJid(jid);
withoutContact = νℓкуяє.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = νℓкуяє.groupMetadata(id) || {};
resolve(
v.name ||
v.subject ||
PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
"international"
)
);
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === νℓкуяє.decodeJid(νℓкуяє.user.id)
? νℓкуяє.user
: store.contacts[id] || {};
return (
(withoutContact ? "" : v.name) ||
v.subject ||
v.verifiedName ||
PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
"international"
)
);
};

νℓкуяє.sendContact = async (jid, kon, quoted = "", opts = {}) => {
let list = [];
for (let i of kon) {
list.push({
displayName: await νℓкуяє.getName(i + "@s.whatsapp.net"),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await νℓкуяє.getName(
i + "@s.whatsapp.net"
)}\nFN:${await νℓкуяє.getName(
i + "@s.whatsapp.net"
)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
});
}
νℓкуяє.sendMessage(
jid,
{
contacts: { displayName: `${list.length} contact`, contacts: list },
...opts,
},
{ quoted }
);
};

νℓкуяє.public = true;
νℓкуяє.serializeM = (νcнαт) => νkmake(νℓкуяє, νcнαт, store);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.send5ButImg = async (
jid,
text = "",
footer = "",
img,
but = [],
options = {}
) => {
let message = await prepareWAMessageMedia(
{ image: img },
{ upload: νℓкуяє.waUploadToServer }
);
var template = generateWAMessageFromContent(
νcнαт.chat,
proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: footer,
hydratedButtons: but,
},
},
}),
options
);
νℓкуяє.relayMessage(jid, template.message, { messageId: template.key.id });
};

/**
*
* @param {*} jid
* @param {*} buttons
* @param {*} caption
* @param {*} footer
* @param {*} quoted
* @param {*} options
*/
νℓкуяє.sendButtonText = (
jid,
buttons = [],
text,
footer,
quoted = "",
options = {}
) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options,
};
νℓкуяє.sendMessage(jid, buttonMessage, { quoted, ...options });
};

/**
*
* @param {*} jid
* @param {*} text
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendText = (jid, text, quoted = "", options) =>
νℓкуяє.sendMessage(jid, { text: text, ...options }, { quoted });

/**
*
* @param {*} jid
* @param {*} path
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendImage = async (jid, path, caption = "", quoted = "", options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
return await νℓкуяє.sendMessage(
jid,
{ image: buffer, caption: caption, ...options },
{ quoted }
);
};

/**
*
* @param {*} jid
* @param {*} path
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendVideo = async (
jid,
path,
caption = "",
quoted = "",
gif = false,
options
) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
return await νℓкуяє.sendMessage(
jid,
{ video: buffer, caption: caption, gifPlayback: gif, ...options },
{ quoted }
);
};

/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} mime
* @param {*} options
* @returns
*/
νℓкуяє.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
return await νℓкуяє.sendMessage(
jid,
{ audio: buffer, ptt: ptt, ...options },
{ quoted }
);
};

/**
*
* @param {*} jid
* @param {*} text
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
νℓкуяє.sendMessage(
jid,
{
text: text,
contextInfo: {
mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
(v) => v[1] + "@s.whatsapp.net"
),
},
...options,
},
{ quoted }
);

/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}

await νℓкуяє.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};

/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}

await νℓкуяє.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};

/**
*
* @param {*} message
* @param {*} filename
* @param {*} attachExtension
* @returns
*/
νℓкуяє.downloadAndSaveMediaMessage = async (
message,
filename,
attachExtension = true
) => {
let quoted = message.msg ? message.msg : message;
let mime = (message.msg || message).mimetype || "";
let messageType = message.mtype
? message.mtype.replace(/Message/gi, "")
: mime.split("/")[0];
var stream = await downloadContentFromMessage(quoted, messageType);
let buffer = Buffer.from([]);
for await (var chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
let type = await FileType.fromBuffer(buffer);
trueFileName = attachExtension ? filename + "." + type.ext : filename;
// save to file
await fs.writeFileSync(trueFileName, buffer);
return trueFileName;
};

νℓкуяє.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || "";
let messageType = message.mtype
? message.mtype.replace(/Message/gi, "")
: mime.split("/")[0];
var stream = await downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await (var chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}

return buffer;
};

/**
*
* @param {*} jid
* @param {*} path
* @param {*} filename
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
νℓкуяє.sendMedia = async (
jid,
path,
fileName = "",
caption = "",
quoted = "",
options = {}
) => {
let types = await νℓкуяє.getFile(path, true);
let { mime, ext, res, data, filename } = types;
if ((res && res.status !== 200) || file.length <= 65536) {
try {
throw { json: JSON.parse(file.toString()) };
} catch (e) {
if (e.json) throw e.json;
}
}
let type = "",
mimetype = mime,
pathFile = filename;
if (options.asDocument) type = "document";
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require("./Core/exif");
let media = { mimetype: mime, data };
pathFile = await writeExif(media, {
packname: options.packname ? options.packname : global.packname,
author: options.author ? options.author : global.author,
categories: options.categories ? options.categories : [],
});
await fs.promises.unlink(filename);
type = "sticker";
mimetype = "image/webp";
} else if (/image/.test(mime)) type = "image";
else if (/video/.test(mime)) type = "video";
else if (/audio/.test(mime)) type = "audio";
else type = "document";
await νℓкуяє.sendMessage(
jid,
{ [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
{ quoted, ...options }
);
return fs.promises.unlink(pathFile);
};

/**
*
* @param {*} jid
* @param {*} message
* @param {*} forceForward
* @param {*} options
* @returns
*/
νℓкуяє.copyNForward = async (
jid,
message,
forceForward = false,
options = {}
) => {
let vtype;
if (options.readViewOnce) {
message.message =
message.message &&
message.message.ephemeralMessage &&
message.message.ephemeralMessage.message
? message.message.ephemeralMessage.message
: message.message || undefined;
vtype = Object.keys(message.message.viewOnceMessage.message)[0];
delete (message.message && message.message.ignore
? message.message.ignore
: message.message || undefined);
delete message.message.viewOnceMessage.message[vtype].viewOnce;
message.message = {
...message.message.viewOnceMessage.message,
};
}

let mtype = Object.keys(message.message)[0];
let content = await generateForwardMessageContent(message, forceForward);
let ctype = Object.keys(content)[0];
let context = {};
if (mtype != "conversation") context = message.message[mtype].contextInfo;
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo,
};
var waMessage = await generateWAMessageFromContent(
jid,
content,
options
? {
...content[ctype],
...options,
...(options.contextInfo
? {
    contextInfo: {
      ...content[ctype].contextInfo,
      ...options.contextInfo,
    },
  }
: {}),
}
: {}
);
await νℓкуяє.relayMessage(jid, waMessage.message, {
messageId: waMessage.key.id,
});
return waMessage;
};

νℓкуяє.cMod = (
jid,
copy,
text = "",
sender = νℓкуяє.user.id,
options = {}
) => {
let mtype = Object.keys(copy.message)[0];
let isEphemeral = mtype === "ephemeralMessage";
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
}
let msg = isEphemeral
? copy.message.ephemeralMessage.message
: copy.message;
let content = msg[mtype];
if (typeof content === "string") msg[mtype] = text || content;
else if (content.caption) content.caption = text || content.caption;
else if (content.text) content.text = text || content.text;
if (typeof content !== "string")
msg[mtype] = {
...content,
...options,
};
if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
else if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
if (copy.key.remoteJid.includes("@s.whatsapp.net"))
sender = sender || copy.key.remoteJid;
else if (copy.key.remoteJid.includes("@broadcast"))
sender = sender || copy.key.remoteJid;
copy.key.remoteJid = jid;
copy.key.fromMe = sender === νℓкуяє.user.id;

return proto.WebMessageInfo.fromObject(copy);
};

/**
*
* @param {*} path
* @returns
*/
νℓкуяє.getFile = async (PATH, save) => {
let res;
let data = Buffer.isBuffer(PATH)
? PATH
: /^data:.*?\/.*?;base64,/i.test(PATH)
? Buffer.from(PATH.split`,`[1], "base64")
: /^https?:\/\//.test(PATH)
? await (res = await getBuffer(PATH))
: fs.existsSync(PATH)
? ((filename = PATH), fs.readFileSync(PATH))
: typeof PATH === "string"
? PATH
: Buffer.alloc(0);
let type = (await FileType.fromBuffer(data)) || {
mime: "application/octet-stream",
ext: ".Bin",
};
filename = path.join(
__filename,
"../Bin/" + new Date() * 1 + "." + type.ext
);
if (data && save) fs.promises.writeFile(filename, data);
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data,
};
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.ws.on("CB:call", async (update) => {
await require("./Events/caller")(update, νℓкуяє);
});
νℓкуяє.ev.on("messages.upsert", async (update) => {
await require("./Events/message-upsert")(
update,
νℓкуяє,
νkmake,
store,
νℓpage
);
});
νℓкуяє.ev.on("group-participants.update", async (update, νℓкуяє) => {
await require("./Events/group-parts")(update);
});
νℓкуяє.ev.on("connection.update", async (update) => {
await require("./Events/connection")(update, νℓкуяє, DisconnectReason, run);
});
νℓкуяє.ev.on("contacts.update", async (update) => {
await require("./Events/contacts")(update, νℓкуяє, store);
});
νℓкуяє.ev.on("groups.update", async (update) => {
await require("./Events/group-update")(update, νℓкуяє, store);
});
νℓкуяє.ev.on("creds.update", () => {
saveState();
});
return νℓкуяє;
}
run();
console.clear();
νℓpage.get("/", async (req, res) => {
res.send(`<br>🤖𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐚𝐦 𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐨𝐭🤖

<br>┌╔══『 🎐𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧🎐 』
<br>│║ 💤𝐏𝐫𝐞𝐟𝐢𝐱: ${prefix}
<br>│║ 📜𝐆𝐢𝐭𝐡𝐮𝐛: https://github.com/kryknz/vlkyre
<br>│║ ⚡𝐖𝐞𝐛𝐬𝐢𝐭𝐞: https://vlkyre.krakinzkon.repl.co
<br>└╚═══════⋑

<br>Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
<br>My developers are working on my code.
<br>Untill then you can send your group links in my private.
<br>Once bot will be ready, it will auto join all groups.`);
});
νℓpage.listen(vport, () => {
console.log("Introduction Page: http://localhost:" + vport + "/");
console.log("Console Page: http://localhost:" + vport + "/vlkyre");
});
autoPoke.start();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
