("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт) => {
let ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
let MoneyLaptop = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
let MoneyCharm = Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000;
let MoneySword = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
if (νℓкуяє.mentionByReply) {
let dataFor =
vcнaт.mtype == "extendedTextMessage" &&
vcнaт.message.extendedTextMessage.contextInfo != null
? vcнaт.message.extendedTextMessage.contextInfo.participant || ""
: "";
let dataFor_Person = await νℓкуяє.getName(dataFor);
if (dataFor === vcнaт.sender) {
return vcнaт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Can't rob your own bank_`
);
}

νℓкуяє.Economy.findOne(
{
ID: vcнaт.sender,
},
async (error, ᴄᴇᴄᴏ) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
νℓкуяє.Economy.findOne(
{
ID: dataFor,
},
async (error, ᴠᴇᴄᴏ) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!ᴠᴇᴄᴏ) {
let newUser = new νℓкуяє.Economy({
ID: dataFor,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 1/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person}'s Bank Guard Caught You and Took You To The Jail!
*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested and Took 0gold.ReTry Again!`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!ᴄᴇᴄᴏ) {
let newUser = new νℓкуяє.Economy({
ID: vcнaт.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 2/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* You are the worst robber.
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:  Fell On a pool and died!.ReTry!`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ᴄᴇᴄᴏ.money < 1000) {
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* You Will Need Atleast 1000 in your bank before you can rob someone!
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻: If You Get Caught, ᴠɪᴄᴛɪᴍ will charge you money to spare your life.`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ᴠᴇᴄᴏ.money < 1000) {
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*@${dataFor_Person}*
*❌𝗘𝗿𝗿𝗼𝗿:*  needs atleast 1000gold in their account before you can rob them!
*🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:* Broke AF! Leave This Begger Alone!`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Robbery.findOne(
{
ID: vcнaт.sender,
},
async (error, ᴄᴜʟᴘʀɪᴛ) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
Robbery.findOne(
{
ID: dataFor,
},
async (error, ᴠɪᴄᴛɪᴍ) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!ᴠɪᴄᴛɪᴍ) {
let newUser = new Robbery({
ID: dataFor,
sword: 0,
laptop: 0,
charm: 0,
CurrentRobberyTime: Date.now(),
PermanentRobberyTime: 900000,
});
await newUser
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 3/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person}'s Bank Police Caught You and Took You To The Jail!
*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴄᴇᴄᴏ.money}`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!ᴄᴜʟᴘʀɪᴛ) {
let newUser = new Robbery({
ID: vcнaт.sender,
sword: 0,
laptop: 0,
charm: 0,
CurrentRobberyTime: Date.now(),
PermanentRobberyTime: 900000,
});
await newUser
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 4/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person} caught You Red Handed and Sent You To The Jail!
*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴄᴇᴄᴏ.money}`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
(Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime) >
0
) {
let Time = ms(
ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
(Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime)
);
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌𝗘𝗿𝗿𝗼𝗿:* You've Recently Tried Robbing Someone!.
🕐𝐑𝐨𝐛 𝗔𝗴𝗮𝗶𝗻: ${Time.minutes}m ${Time.seconds}s.`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ᴠɪᴄᴛɪᴍ.sword > 0) {
ᴠɪᴄᴛɪᴍ.sword = ᴠɪᴄᴛɪᴍ.sword - 1;
if (ᴄᴇᴄᴏ.money < 3000) {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
ᴄᴇᴄᴏ.money = 0;
} else {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneySword;
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneySword;
}
ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
await ᴠɪᴄᴛɪᴍ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴜʟᴘʀɪᴛ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴠᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person} had a powerful ⚔️sword that killed you!
*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
"./Gallery/νℓкуяє_white.png"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else if (ᴠɪᴄᴛɪᴍ.laptop > 0) {
ᴠɪᴄᴛɪᴍ.laptop = ᴠɪᴄᴛɪᴍ.laptop - 1;
if (ᴄᴇᴄᴏ.money < 4000) {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
ᴄᴇᴄᴏ.money = 0;
} else {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneyLaptop;
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneyLaptop;
}
ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
await ᴠɪᴄᴛɪᴍ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴜʟᴘʀɪᴛ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴠᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person} had a 💻laptop that caught you digitally-robbing!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
"./Gallery/νℓкуяє_white.png"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else if (ᴠɪᴄᴛɪᴍ.charm > 0) {
ᴠɪᴄᴛɪᴍ.charm = ᴠɪᴄᴛɪᴍ.charm - 1;
if (ᴄᴇᴄᴏ.money < 6000) {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
ᴄᴇᴄᴏ.money = 0;
} else {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneyCharm;
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneyCharm;
}
ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
await ᴠɪᴄᴛɪᴍ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴜʟᴘʀɪᴛ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴠᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*💡‍𝐒𝐭𝐚𝐭𝐮𝐬:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${dataFor_Person} had a 🔮charm that magically saved their bank!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
"./Gallery/νℓкуяє_white.png"
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ᴠᴇᴄᴏ.money < 1000) {
ᴠᴇᴄᴏ.money = 0;
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ᴠᴇᴄᴏ.money;
ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
await ᴠᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${dataFor_Person} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* Seems Like The Victim Had Gold<1000. _You Got All Their Golds ${
ᴠᴇᴄᴏ.money
}!
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${dataFor_Person}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${νℓкуяє.pushname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${dataFor_Person}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
"./Gallery/νℓкуяє_white.png"
);
} else {
ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
await ᴠᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
await ᴄᴇᴄᴏ
.save()
.catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${dataFor_Person} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* You Got ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${dataFor_Person}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${νℓкуяє.pushname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${dataFor_Person}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
"./Gallery/νℓкуяє_white.png"
);
}
}
);
}
);
}
);
}
);
} else {
return await νℓкуяє.imgB(
νℓкуяє,
vcнaт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌ERROR:* No query provided!
*⚡USAGE:* Reply Person: ${prefix}${Final_Name}


╔═══◇║⚔️ 𝐒𝐰𝐨𝐫𝐝
║ *🛸𝗧𝘆𝗽𝗲:* The medium account safe mode. 
║ *🧀𝗚𝗼𝗹𝗱:* To buy sword you will need to have 4000gold.
║ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a sword will save your entire balance and will automatically deduct random(1000-2000) from Culprit's account and add it to your account!
╚◇╗
╔◇╝ 💻 𝐋𝐚𝐩𝐭𝐨𝐩
║ *🛸𝗧𝘆𝗽𝗲:* The hard account safe mode.
║ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 3000gold.
║ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a laptop will save your entire balance and will automatically deduct random(3000-4000) from Culprit's account and add it to your account!
╚◇╗
╔◇╝ 🔮 𝐂𝐡𝐚𝐫𝐦
║ *🛸𝗧𝘆𝗽𝗲:* The devil account safe mode.
║ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 6000gold.
║ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a charm will save your entire balance and will automatically deduct random(5000-6000) from Culprit's account and add it to your account!
╚════════════╝`,
"./Gallery/νℓкуяє_white.png"
);
}
};
