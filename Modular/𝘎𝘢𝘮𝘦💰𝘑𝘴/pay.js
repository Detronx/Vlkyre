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
  try {
    if (!νℓкуяє.mentionByReply) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount(number)_`);
    }
    if (νℓкуяє.args.length === 0) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount(number)_`);
    }
    let Format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (Format.test(νℓкуяє.args[0])) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount(number)_`);
    }
    if (νℓкуяє.args[0].match(/[a-z]/i)) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount(number)_`);
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    if (νℓкуяє.mentionByReply) {
      let payGold = parseInt(νℓкуяє.args.join(" "));
      let dataFor =
        νℓкуяє.mtype == "extendedTextMessage" &&
        νℓкуяє.message.extendedTextMessage.contextInfo != null
          ? νℓкуяє.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      let dataFor_Person = await ӄryӄnz.getName(dataFor);
      if (dataFor === vcнaт.sender) {
        return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount(number)_`);
      }
      ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
      νℓкуяє.Economy.findOne(
        {
          ID: vcнaт.sender,
        },
        async (error, ᴜꜱᴇʀᴘᴀʏ) => {
          if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
          if (!ᴜꜱᴇʀᴘᴀʏ) {
            let ɴᴇᴡᴜꜱᴇʀᴘᴀʏ = new νℓкуяє.Economy({
              ID: vcнaт.sender,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await ɴᴇᴡᴜꜱᴇʀᴘᴀʏ
              .save()
              .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
            return await νℓкуяє.imgB(
              νℓкуяє,
              vcнaт,
              `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

*❌ERROR:* You Have 0gold To Pay
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${νℓкуяє.pushname}`,
              "./Gallery/vlkyre.png"
            );
          }
          ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
          if (payGold > ᴜꜱᴇʀᴘᴀʏ.money) {
            return await νℓкуяє.imgB(
              νℓкуяє,
              vcнaт,
              `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

*❌ERROR:* You Don't Have That Much gold
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}`,
              "./Gallery/vlkyre.png"
            );
          }
          ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
          νℓкуяє.Economy.findOne(
            {
              ID: dataFor,
            },
            async (error, ᴜꜱᴇʀɢᴏᴛ) => {
              if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
              if (!ᴜꜱᴇʀɢᴏᴛ) {
                let ɴᴇᴡᴜꜱᴇʀɢᴏᴛ = new νℓкуяє.Economy({
                  ID: dataFor,
                  money: payGold,
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                });
                await ɴᴇᴡᴜꜱᴇʀɢᴏᴛ
                  .save()
                  .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
                ᴜꜱᴇʀᴘᴀʏ.money = ᴜꜱᴇʀᴘᴀʏ.money - payGold;
                await ᴜꜱᴇʀᴘᴀʏ
                  .save()
                  .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
                return await νℓкуяє.imgB(
                  νℓкуяє,
                  vcнaт,
                  `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*📤𝐏𝐚𝐲𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${νℓкуяє.pushname}
◇══════════◇
*📥𝐑𝐞𝐜𝐞𝐢𝐯𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${payGold}
*🐿️𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝗼 𝗣𝗮𝘆:* @${dataFor_Person}`,
                  "./Gallery/vlkyre.png"
                );
              }
              ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
              ᴜꜱᴇʀᴘᴀʏ.money = ᴜꜱᴇʀᴘᴀʏ.money - payGold;
              ᴜꜱᴇʀɢᴏᴛ.money = ᴜꜱᴇʀɢᴏᴛ.money + payGold;
              await ᴜꜱᴇʀᴘᴀʏ
                .save()
                .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
              await ᴜꜱᴇʀɢᴏᴛ
                .save()
                .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
              return await νℓкуяє.imgB(
                νℓкуяє,
                vcнaт,
                `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*📤𝐏𝐚𝐲𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${νℓкуяє.pushname}
◇══════════◇
*📥𝐑𝐞𝐜𝐞𝐢𝐯𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀɢᴏᴛ.money}
*🐿️𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝗼 𝗣𝗮𝘆:* @${dataFor_Person}`,
                "./Gallery/vlkyre.png"
              );
            }
          );
        }
      );
      ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
    }
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, vcнaт, error);
  }
};
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
