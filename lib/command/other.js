cmd.on("example3", ["speed", "response"], ["other"], async (req, res) => {
  timestamp = functions.Speed();
  latensi = functions.Speed();
  -timestamp;
  return client.sendText(
    req.from,
    "Speed Response is " + latensi.toFixed(4) + " Second",
    req
  );
});

cmd.on("btnrespon", ["carapenggunaan"], ["info"], async (msg, res) => {
  txt = `_*Cara Penggunaan*_

• Untuk Command Yang Bertanda *<media>*
artinya kamu harus reply media dengan command tersebut, contoh : .sticker (media/ reply video/gambar)

• Untuk command yang bertanda *<sticker>*
artinya kamu harus reply sticker dengan command tersebut, contoh : .toimg (sticker/ reply sticker/sticker gif)

• Untuk command yang bertanda *<video>*
artinya kamu harus reply video dengan command tersebut, contoh : .tomp3 (video/ reply videonya)

• Untuk command yang bertanda *<image>*
artinya kamu harus reply gambar dengan command tersebut, contoh : .invert (image/ reply gambarnya)

• Untuk command yang bertanda *<audio>*
artinya kamu harus reply audio dengan command tersebut, contoh : .vibra (audio/ reply voice note/audio nya)

• Untuk command yang bertanda *<query>*
artinya kamu harus input teks/keyword untuk mencari sesuatu dengan bot, contoh : .pinterest (query/ query bisa kalian masukkan apa yang mau kalian cari atau teks/nama)`;
  buttons = [
    { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 },
  ];
  let buttonsMessage = {
    contentText: txt,
    footerText: botinfo.footerText,
    buttons,
    headerType: 1,
  };
  return client.sendMessageFromContent(
    msg.from,
    { buttonsMessage },
    { quoted: msg }
  );
});

cmd.on("ownerr", ["ownerbot", "owner"], ["other"], async (msg, res) => {
  konten = {
      contactMessage: {
      displayName: 'TdrckAlfa',
      vcard: 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'N:;;;;\n' +
        'FN:TdrckAlfa\n' +
        'TEL;type=Telepon;waid=6285746657092:+62 857-4665-7092\n' +
        'X-WA-BIZ-DESCRIPTION:TethaBot Owner\n' +
        'X-WA-BIZ-NAME:TdrckAlfa\n' +
        'END:VCARD'
    },
}
client.sendMessageFromContent(msg.from, konten)
});

cmd.on("fakereply", ["fitnah"], ["other"], async (msg, { query, client }) => {
    if (!msg.mentionedJid && !query)
      return client.reply(
        msg,
        `*REJECTED* | Tag Seseorang Atau Masukan No Yang Akan Di Fitnah`
      );
    let q = query.split("|");
    const rep = "Perintah Yang Kamu Masukkan Salah!!\n\n*Contoh Perintah:*\n#fitnah @6285746657092|Halo|Halo Juga"
    if (!q[0]) return client.sendMessage(msg.from, rep, "conversation", { quoted: msg, contextInfo: { mentionedJid: functions.parseMention(rep) }})
    if (!q[1]) return client.sendMessage(msg.from, rep, "conversation", { quoted: msg, contextInfo: { mentionedJid: functions.parseMention(rep) }})
    if (!q[2]) return client.sendMessage(msg.from, rep, "conversation", { quoted: msg, contextInfo: { mentionedJid: functions.parseMention(rep) }})
    const fakeReply = (target, target2, pesan) => {
		client.sendMessage(msg.from, pesan, "conversation", {quoted: { key: { fromMe: false, participant: target, ...(msg.from ? { remoteJid: msg.from } : {}) }, message: { conversation: `${target2}` }}})
	}
    fakeReply(msg.mentionedJid[0], q[1], q[2])
  },
  { param: functions.needed("@tag|pesantarget|pesanbot"), group: true }
);

cmd.on("esenka", ["snk"], ["other"], async (msg, res) => {
  txxt = `Dengan menggunakan _Tetha-Bot_ maka anda setuju dengan _Syarat Dan Ketentuan_ sebagai berikut:

- Tidak memperjual belikan bot.
- Tidak menggunakan bot untuk hal illegal.
- Dan bot tidak boleh digunakan yang bertujuan/berkontribusi dalam:
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan
    • kekerasan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, gender, ras, agama, kebangsaan, ataupun antar golongan.

Source Code: 
github.com/Alphakingg-ai/ZacrosBot
Base: 
github.com/Zacros-Team/ZacrosBot

Salam hormat, @${botinfo.ownerNumber[0]}`;
  client.reply(msg, txxt, {
    contextInfo: { mentionedJid: functions.parseMention(txxt) },
  });
});

cmd.on("donate", ["donasi", "donate"], ["other"], async (msg, res) => {
  dmsg = `اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_

*Pulsa Indosat :* _62857-4665-7092_
*Pulsa Tri :* _62895-3256-95730_
*Dana :* _62857-4665-7092_
*Gopay :* _62857-4665-7092_
*Saweria :* _https://saweria.co/Alphakingg_`;
  return await client.sendText(msg.from, dmsg, msg);
});

cmd.on(
  "lapor",
  ["report", "laporkan"],
  ["other"],
  async (msg, { query, client }) => {
    let tet = `*Laporan!*\n\n• Pengirim : @${
      msg.sender.jid.split("@")[0]
    }\n• Pesan : ${query}`;
    await client.sendMessage(
      botinfo.ownerNumber[0] + `@s.whatsapp.net`,
      tet,
      "conversation",
      { contextInfo: { mentionedJid: functions.parseMention(tet) } }
    );
    return client.sendText(
      msg.from,
      "Laporan Sudah Terkirim Ke Owner Ya Kak!",
      msg
    );
  },
  { query: "Mau Lapor Apa Kak?", param: functions.needed("query") }
);

cmd.on(
  "tag",
  ["mention", "tag"],
  ["other"],
  async (msg, { query, client }) => {
    return await client.sendMessage(
      msg.from,
      query + " tagged!",
      "conversation",
      {
        contextInfo: { mentionedJid: functions.parseMention("@" + query) },
        quoted: msg,
      }
    );
  },
  {
    query: "Masukan Nomor!\nEx : .mention @0",
    param: functions.needed("number"),
  }
);

cmd.on("runtime", ["runtime"], ["other"], (msg, { client, prefix }) => {
  let data = functions.count(process.uptime());
  return client.sendText(
    msg.from,
    functions.parseResult(data, { title: "Runtime Bot" })
  );
});

cmd.on("info", ["info"], ["other"], (msg, { client, prefix }) => {
  let data = functions.count(process.uptime());
  let total = 0;
  for (let a of cmd._events) {
    for (let b of a.command) total++;
  }
  inmsg = `*Hai ${msg.sender.name} 😁*

Bot Name : Tetha Bot
Owner Name : TdrckAlfa
Our Team : Zacros Team
Library : Baileys
Language : JavaScript
Total Command : ${total}
Total User : ${Object.keys(userDb).length}
Runtime : ${data.day} Day ${data.hours} Hours ${data.minutes} Minutes ${
    data.seconds
  } Second

Special thanks to :
• Tuhan Yang Maha Esa
• Orang Tua
• Galang/Zobin (Base)
• Zacros Team`;
  let buttons = [
    {
      buttonId: ".owner",
      buttonText: { displayText: "OWNER" },
      type: "RESPONSE",
    },
    {
      buttonId: ".donasi",
      buttonText: { displayText: "DONASI" },
      type: "RESPONSE",
    },
  ];
  let btn = {
    contentText: inmsg,
    footerText: botinfo.footerText,
    buttons,
    headerType: 1,
  };
  return client.sendMessageFromContent(msg.from, { buttonsMessage: btn });
});

cmd.on(
  "delete",
  ["del", "delete"],
  ["other"],
  async (msg, { client }) => {
    if (!msg.quotedMsg.key.fromMe) return client.reply(msg, "harus dari bot");
    client.deleteMessage(msg.from, msg.quotedMsg.key);
    return client.reply(msg, "sukses");
  },
  { quoted: true }
);

cmd.on(
  "getrepl",
  ["getreply", "q"],
  ["other"],
  async (msg, client) => {
    await (await msg.quotedMsg.reloadMsg()).quotedMsg.resendMsg(msg.from);
  },
  { param: functions.needed("reply chat") }
);

cmd.on(
  "artinama",
  ["artinama"],
  ["other"],
  async (msg, { query, client }) => {
  try {
    let $ = require("cheerio").load((await functions.axios.get('http://www.primbon.com/arti_nama.php?nama1='+encodeURIComponent(query)+'&proses=+Submit%21+')).data)
     a = $("div#body.width").text().split("Nama:")[0].replace(/["\n"]/gi, "").split("ARTI NAMA")[1].replace(".", ".\n\n")
      client.reply(msg, a)
      } catch {
      return client.reply(msg, "Unexpected Error!!")
      }
  },
  {
    query: "Masukan Nama\nContoh: #artinama alfa",
    param: functions.needed("nama"),
  }
);


cmd.on("audio", ["bot"], ["other"], async (msg, res) => {
  topt = functions.fs.readFileSync("./lib/audio.mp3")
client.sendMessage(msg.from, topt, "audioMessage", {mimetype: 'audio/mp4', quoted: msg, ptt:true})
},  { usedPrefix: false });

