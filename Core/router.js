"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
module.exports = async (νℓкуяє, νℓcнαт, update, spinnies, coreback) => {
var groupMetadata = νℓcнαт.isGroup
? await νℓкуяє.groupMetadata(νℓcнαт.chat).catch((e) => {})
: "";
var groupName = νℓcнαт.isGroup ? groupMetadata.subject : "";
var participants = νℓcнαт.isGroup ? await groupMetadata.participants : "";
var groupAdmins = νℓcнαт.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
var groupOwner = νℓcнαт.isGroup ? groupMetadata.owner : "";
var isBotAdmin = νℓcнαт.isGroup
? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
: false;
var isAdmin = νℓcнαт.isGroup ? groupAdmins.includes(νℓcнαт.sender) : false;
console.log(
"\n◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎"
);
console.log(
νℓкуяє.chalk.blueBright("       🖊️ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype)
);
console.log(
νℓкуяє.chalk.blueBright("       ❣️ 𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: "),
νℓкуяє.chalk.green(νℓкуяє.pushname)
);
console.log(
νℓкуяє.chalk.blueBright("       📱 𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: "),
νℓкуяє.chalk.green(νℓcнαт.sender)
);
console.log(
νℓкуяє.chalk.blueBright("       💬 𝐂𝐡𝐚𝐭-𝐈𝐝: "),
νℓкуяє.chalk.green(νℓcнαт.chat)
);
console.log(
"◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎\n"
);
switch (νℓкуяє.command) {
case "h.anime":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.download":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.filter":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.game":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.group":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.hentai":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_hentai")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.image":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.search":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.ytfilter":
try {
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "advice":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "fact":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "joke":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "meme":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "quote":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "reddit":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "anime":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "manga":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "google":
try {
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "image":
try {
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "neko":
try {
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pinterest":
try {
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "waifu":
try {
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wallpaper":
try {
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ass":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/ass")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bsdm":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/bdsm")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blowjob":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/blowjob")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cum":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/cum")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "doujin":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/doujin")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "feet":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/feet")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "femdom":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/femdom")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "foxgirl":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/foxgirl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "glasses":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/glasses")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hentai":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/hentai")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "maid":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/maid")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "masturbation":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/masturbation")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "netorare":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/netorare")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "orgy":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/orgy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pussy":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/pussy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "school":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/school")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "succubus":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/succubus")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tentacles":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/tentacles")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "thighs":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/thighs")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uglyBastard":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uglyBastard")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uniform":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uniform")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yuri":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/yuri")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "zettaiRyouiki":
try {
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/zettaiRyouiki")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "demote":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "group":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "promote":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "remove":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/remove")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "setdesc":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "seticon":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tagall":
try {
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yta":
case "play":
case "song":
case "sing":
case "music":
case "ytmp3":
case "ytplay":
case "ytaudio":
case "ytmusic":
case "youtubemusic":
try {
await require("../Plugins/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bite":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blush":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bonk":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bored":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "confused":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cry":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cuddle":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "dance":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "goodnight":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "happy":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "highfive":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hug":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kick":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kick")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kill":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kiss":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "nervous":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pat":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "poke":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "punch":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "sad":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "scream":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "slap":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "smile":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "stare":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wave":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wink":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yeet":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yes":
try {
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "sticker":
try {
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tinyurl":
try {
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "toimg":
try {
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tourl":
try {
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "balance":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "buy":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "daily":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "fish":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "gamble":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "inv":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "store":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "work":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "zoo":
try {
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bassboost":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "echo":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "flanger":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "nightcore":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "phaser":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "reverse":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "slow":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "speed":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "subboost":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "superslow":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "superspeed":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "surround":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "vaporwave":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "vibrato":
try {
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytbassboost":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytecho":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytflanger":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytnightcore":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytphaser":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytreverse":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytslow":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytspeed":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsubboost":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsuperslow":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsuperspeed":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsurround":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytvaporwave":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytvibrato":
try {
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "vlkyre":
case "🛰️Vlkyre":
try {
await require("../Plugins/vlkyre")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "help":
case "menu":
case "command":
case "commands":
case "🛰️Vlkyre":
case "✈️Commands":
try {
await require("../Plugins/commands")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
default:
try {
νℓкуяє.sendMessage(
νℓcнαт.chat,
{
text: `❗ Couldn't find any matching commands. Try again with the commands from the help list`,
},
{ quoted: νℓcнαт }
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
