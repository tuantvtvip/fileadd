module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tuantvt",
  description: "info admin nè",
  commandCategory: "Admin",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
  "https://media.giphy.com/media/4TmxH7ZMn1aYE/giphy.gif",
  "https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
  "https://media.giphy.com/media/BP9fPzjwjJlUk/giphy.gif",
  "https://media.giphy.com/media/MdLFOyVZtoUPm/giphy.gif",
  "https://media.giphy.com/media/TlDd1mxmPGQo/giphy.gif",
  "https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
  "https://i.pinimg.com/originals/1a/26/e5/1a26e51bfd0aa963e0a48618175a9836.gif",
  "https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
  "https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
  "https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif",
  "https://i.pinimg.com/originals/f8/ba/e3/f8bae313dbee24d67d29770508e8cedd.gif",
  "https://i.pinimg.com/originals/c4/3c/00/c43c005a8ad97b3a860a7464f3face97.gif",
  "https://i.pinimg.com/originals/88/21/b5/8821b5beb925737cecbf67b1e573fa2e.gif",
  "https://i.pinimg.com/originals/72/48/62/724862d06dfbb69beb0f21e4285d3575.gif",
  "https://i.pinimg.com/originals/fc/a6/1b/fca61b6693560a29210dd33dcd203f57.gif",
  "https://i.pinimg.com/originals/0f/2d/b8/0f2db86540afb15dd763a99b9a248baf.gif",
  "https://i.pinimg.com/originals/c6/9a/e2/c69ae2e4f239da4584b548b6dfe226ba.gif",
  "https://i.pinimg.com/originals/58/1f/c7/581fc7b69f373c3cc2be99f58a840cfd.gif",
  "https://i.pinimg.com/originals/be/e0/96/bee096e95d49eeb2e8539633388ca013.gif",
  "https://i.pinimg.com/originals/9e/91/fe/9e91feda4e8cf0c5ddad28ee53c07f50.gif",
  "https://i.pinimg.com/originals/f1/39/81/f13981f2dc628bbe208747caabdbddf3.gif",
  "https://i.pinimg.com/originals/42/3c/9a/423c9a21fc58034aae78b7ebc2b62673.gif",
  "https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
  "https://4.bp.blogspot.com/-yAExPAr7JeA/WDaBRVuJwxI/AAAAAAALb7I/Dbvda0KD5uECF3_SBjsvkl2_mqP9_BweQCLcB/s1600/AS000834_17.gif",
];
var callback = () => api.sendMessage({
  body: `━━━━━━━━━━━━━━━━━━\n🌸𝐀𝐃𝐌𝐈𝐍🌸\n━━━━━━━━━━━━━━━━━━
 🙈 𝐓𝐞̂𝐧: Tuân vip nhất thế giới 😎
 💮 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: tvt😘
 🛸 𝐓𝐮𝐨̂̉𝐢: 15+ 😊
 👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: Nam 
 💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠: Chưa xác định
 💘 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: no friend
 🌎 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: 18 Nam Định
 👫 𝐆𝐮: Dễ thương , Cute ,ngoan ngoãn ,... (𝙠𝙝𝙤̂𝙣𝙜 𝙘𝙤́ 𝙜𝙪)
 🌸 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: Hiền, Vui tính , Hoà đồng,...
 🌀 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: Ngồi trước máy tính , hack, ghét cô đơn, ...
 💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
 ☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 0836.190107
 📱Facebook:https://www.facebook.com/profile.php?id=100073862257362
 ✉️ 𝐄𝐦𝐚𝐢𝐥: chx có
 ------------
✔Donate:
📲MoMo: 0836190107
💳MB: Chưa có Mb :( donate qua momo đi thanks 😊😘

  💕💕💕----tvt---💕💕💕`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
