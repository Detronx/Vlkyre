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
require("../process");
var {
Simp,
Pokemon,
Ship,
IShipOptions,
} = require("@shineiichijo/canvas-chan");
var {
νkmake,
formatp,
formatDate,
getTime,
isUrl,
sleep,
clockString,
runtime,
fetchJson,
getBuffer,
jsonformat,
format,
parseMention,
GIFBufferToVideoBuffer,
getRandom,
} = require("./myfunc");
var { tmpdir } = require("os");
var { JSDOM } = require("jsdom");
var { Character } = require("mailist");
var { yta, ytv } = require("./y2mate");
var moment = require("moment-timezone");
var { readFile } = require("fs/promises");
var { Chalk } = require("cfonts/lib/Chalk");
var { performance } = require("perf_hooks");
var { Primbon } = require("scrape-primbon");
var { getDadjoke } = require("random-jokes");
var { createWorker } = require("tesseract.js");
var { Manga } = require("@shineiichijo/marika");
var { AnimeWallpaper } = require("anime-wallpaper");
var { Tube_Audio, Tube_Video } = require("./youtube");
var { Doujin } = require("@shineiichijo/nhentai-pdf");
var { exec, spawn, execSync } = require("child_process");
var { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

var LinkList = require("../mongBase/antilink");
var Ranker = require("../mongBase/autorank");
var Bagde = require("../mongBase/badge");
var userBanCheck = require("../mongBase/ban");
var Cooldown = require("../mongBase/cooldown");
var DebugMode = require("../mongBase/debug");
var Economy = require("../mongBase/economy");
var Ranker = require("../mongBase/experience");
var Gamble = require("../mongBase/gamble");
var Halt = require("../mongBase/halt");
var nsfwCheck = require("../mongBase/nsfw");
var Pokemon = require("../mongBase/pokemon");
var UserPrivate = require("../mongBase/private");
var Robbery = require("../mongBase/robbery");
var ServerDB = require("../mongBase/ServerDB");
var Welcome = require("../mongBase/setwelcome");
var Warning = require("../mongBase/warning");
var Zoology = require("../mongBase/zoo");

module.exports = async (νℓкуяє, νℓcнαт, update, store) => {
νℓкуяє.body =
νℓcнαт.mtype === "conversation"
? νℓcнαт.message.conversation
: νℓcнαт.mtype == "imageMessage"
? νℓcнαт.message.imageMessage.caption
: νℓcнαт.mtype == "videoMessage"
? νℓcнαт.message.videoMessage.caption
: νℓcнαт.mtype == "extendedTextMessage"
? νℓcнαт.message.extendedTextMessage.text
: νℓcнαт.mtype == "buttonsResponseMessage"
? νℓcнαт.message.buttonsResponseMessage.selectedButtonId
: νℓcнαт.mtype == "listResponseMessage"
? νℓcнαт.message.listResponseMessage.singleSelectReply.selectedRowId
: νℓcнαт.mtype == "templateButtonReplyMessage"
? νℓcнαт.message.templateButtonReplyMessage.selectedId
: νℓcнαт.mtype === "messageContextInfo"
? νℓcнαт.message.buttonsResponseMessage?.selectedButtonId ||
νℓcнαт.message.listResponseMessage?.singleSelectReply.selectedRowId ||
νℓcнαт.text
: "";
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.budy = typeof νℓcнαт.text == "string" ? νℓcнαт.text : "";
νℓкуяє.icmd = νℓкуяє.body.startsWith(prefix);
νℓкуяє.isCmd =
prefix.includes(νℓкуяє.body != "" && νℓкуяє.body.slice(0, 1)) &&
νℓкуяє.body.slice(1) != "";
νℓкуяє.command = νℓкуяє.isCmd
? νℓкуяє.body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
νℓкуяє.args = νℓкуяє.body.trim().split(/ +/).slice(1);
νℓкуяє.pushname = νℓcнαт.pushName || "No Name";
νℓкуяє.botNumber = await νℓкуяє.decodeJid(νℓкуяє.user.id);
νℓкуяє.frome = νℓcнαт.sender == νℓкуяє.botNumber ? true : false;
νℓкуяє.Fullarg = νℓкуяє.args.join(" ");
νℓкуяє.contant = q = νℓкуяє.args.join(" ");
νℓкуяє.quoted = νℓcнαт.quoted ? νℓcнαт.quoted : νℓcнαт;
νℓкуяє.mime = (νℓкуяє.quoted.msg || νℓкуяє.quoted).mimetype || "";
νℓкуяє.isMedia = /image|video|sticker|audio/.test(νℓкуяє.mime);
νℓкуяє.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
νℓкуяє.isCreator = [νℓкуяє.botNumber, ...global.mods]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(νℓcнαт.sender);
νℓкуяє.mentionByTag =
νℓcнαт.mtype == "extendedTextMessage" &&
νℓcнαт.message.extendedTextMessage.contextInfo != null
? νℓcнαт.message.extendedTextMessage.contextInfo.mentionedJid
: [];
νℓкуяє.mentionByReply =
νℓcнαт.mtype == "extendedTextMessage" &&
νℓcнαт.message.extendedTextMessage.contextInfo != null
? νℓcнαт.message.extendedTextMessage.contextInfo.participant || ""
: "";
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.performance = performance;
νℓкуяє.createWorker = createWorker;
νℓкуяє.JSDOM = JSDOM;
νℓкуяє.Character = Character;
νℓкуяє.execSync = execSync;
νℓкуяє.spawn = spawn;
νℓкуяє.exec = exec;
νℓкуяє.Primbon = Primbon;
νℓкуяє.IShipOptions = IShipOptions;
νℓкуяє.Ship = Ship;
νℓкуяє.Pokemon = Pokemon;
νℓкуяє.Simp = Simp;
νℓкуяє.readFile = readFile;
νℓкуяє.tmpdir = tmpdir;
νℓкуяє.Doujin = Doujin;
νℓкуяє.Chalk = Chalk;
νℓкуяє.Sticker = Sticker;
νℓкуяє.createSticker = createSticker;
νℓкуяє.StickerTypes = StickerTypes;
νℓкуяє.νkmake = νkmake;
νℓкуяє.formatp = formatp;
νℓкуяє.formatDate = formatDate;
νℓкуяє.getTime = getTime;
νℓкуяє.isUrl = isUrl;
νℓкуяє.sleep = sleep;
νℓкуяє.clockString = clockString;
νℓкуяє.runtime = runtime;
νℓкуяє.fetchJson = fetchJson;
νℓкуяє.getBuffer = getBuffer;
νℓкуяєonformat = jsonformat;
νℓкуяє.format = format;
νℓкуяє.parseMention = parseMention;
νℓкуяє.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
νℓкуяє.getRandom = getRandom;
νℓкуяє.getDadjoke = getDadjoke;
νℓкуяє.Manga = Manga;
νℓкуяє.AnimeWallpaper = AnimeWallpaper;
νℓкуяє.ytv2mate = yta;
νℓкуяє.yta2mate = ytv;
νℓкуяє.Tube_Audio = Tube_Audio;
νℓкуяє.Tube_Video = Tube_Video;
νℓкуяє.msgFilter = require("./msgFilter");
νℓкуяє.imgB = require("../Buttons/imgB");
νℓкуяє.vidB = require("../Buttons/vidB");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.LinkList = LinkList;
νℓкуяє.Ranker = Ranker;
νℓкуяє.Bagde = Bagde;
νℓкуяє.userBanCheck = userBanCheck;
νℓкуяє.Cooldown = Cooldown;
νℓкуяє.DebugMode = DebugMode;
νℓкуяє.Economy = Economy;
νℓкуяє.Ranker = Ranker;
νℓкуяє.Gamble = Gamble;
νℓкуяє.Halt = Halt;
νℓкуяє.nsfwCheck = nsfwCheck;
νℓкуяє.Pokemon = Pokemon;
νℓкуяє.UserPrivate = UserPrivate;
νℓкуяє.Robbery = Robbery;
νℓкуяє.ServerDB = ServerDB;
νℓкуяє.Welcome = Welcome;
νℓкуяє.Warning = Warning;
νℓкуяє.Zoology = Zoology;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.request = require("request");
νℓкуяє.fetch = require("node-fetch");
νℓкуяє.db = require("quick.db");
νℓкуяє.nHentai = require("shentai");
νℓкуяє.cheerio = require("cheerio");
νℓкуяє.hxz = require("hxz-api");
νℓкуяє.xfar = require("xfarr-api");
νℓкуяє.canvacord = require("canvacord");
νℓкуяє.primbon = new Primbon();
νℓкуяє.google = require("google-it");
νℓкуяє.Carbon = require("unofficial-carbon-now");
νℓкуяє.cron = require("node-cron");
νℓкуяє.moment = require("moment-timezone");
νℓкуяє.os = require("os");
νℓкуяє.path = require("path");
νℓкуяє.axios = require("axios");
νℓкуяє.chalk = require("chalk");
νℓкуяє.util = require("util");
νℓкуяє.fs = require("fs");
νℓкуяє.Anime = require("anime-actions");
νℓкуяє.gis = require("g-i-s");
νℓкуяє.Tinyurl = require("tinyurl-api");
νℓкуяє.akaneko = require("akaneko");
νℓкуяє.ytdl = require("ytdl-core");
νℓкуяє.Spinnies = require("spinnies");
νℓкуяє.moment = require("moment-timezone");
νℓкуяє.speed = require("performance-now");
νℓкуяє.FFmpeg = require("fluent-ffmpeg");
νℓкуяє.pathFFmpeg = require("ffmpeg-static");
νℓкуяє.TubeSearch = require("yt-search");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.spinner = {
interval: 80,
frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
};
νℓкуяє.spinnies = new νℓкуяє.Spinnies({
color: "cyan",
succeedColor: "green",
spinner: νℓкуяє.spinner,
});
νℓкуяє.TubeRegex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
νℓкуяє.botName = process.env.botName;
νℓкуяє.packname = packname;
νℓкуяє.pgdb = DATABASE_URL;
νℓкуяє.ShowInfo = ShowInfo;
νℓкуяє.mongodb = mongodb;
νℓкуяє.author = author;
νℓкуяє.prefix = prefix;
νℓкуяє.mods = mods;

modString =
process.env.mods === undefined
? "918436686758,917430922909"
: process.env.mods;
νℓкуяє.isModerator = modString.includes(
νℓcнαт.sender.substring(0, νℓcнαт.sender.indexOf("@"))
);

return νℓкуяє;
};
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
