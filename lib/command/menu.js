cmd.on(
  "menu-cmd",
  ["menu", "help", "command", "commands"],
  [],
  async (msg, { prefix, client, query, usedPrefix }) => {
    let { list, body, upper, down, line, head } = botinfo.unicode;
    let type = query && query.toLowerCase();
    let lama = [];
    if (!cmd._tags[type]) {
      let sections = [];
      let list_now = 0;
      let list_nitip = {};
      for (let b in cmd._tags) {
        let tit =
          list_now == 0
            ? `${upper}${list} ${list}${line.repeat(13)}${list} ${
                list_now + 1
              } ${list}${line.repeat(13)}${list}`
            : `${body}${list} ${list}${line.repeat(13)}${list} ${
                list_now + 1
              } ${list}${line.repeat(13)}${list}`;
        sections.push({
          title: tit,
          rows: [
            {
              title: `${b[0].toUpperCase() + b.slice(1).toLowerCase()} Menu`,
              rowId: prefix[0] + `menu${b}`,
              description:
                "Membuka Menu " + b[0].toUpperCase() + b.slice(1).toLowerCase(),
            },
          ],
        });
        list_nitip[b] = prefix[0] + `menu${b}`;
        list_now++;
      }
                        const momentw = require('moment-timezone')
                               const jam = momentw.tz('Asia/Jakarta').format('HH')
				var ucapanWaktu = 'Selamat Pagi'
			if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
			} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
			} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
			} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
			} else {
				ucapanWaktu = 'Selamat Malam'
			}
     let locale = 'id'
    var wetone = ['Kliwon', 'Legi', 'Pahing', 'Pon', 'Wage'][Math.floor(d / 84600000) % 5]
    var dinone = d.toLocaleDateString(locale, { weekday: 'long' })
    var tanggale = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      return client.sendMessageFromContent(msg.from, {
        listMessage: {
          title: `*${ucapanWaktu} ${msg.sender.vname ? msg.sender.vname : msg.sender.name}!*`,
          description: `Tekan tombol yang bertuliskan "Daftar Perintah" yaa!\n\nBot ini 100% gratis dan tanpa fitur berbayar. chat owner kami untuk memasukan bot kedalam grupmu!`,
          footerText: `© TethaBot | ${dinone} ${wetone}, ${tanggale}`,
          buttonText: "Daftar Perintah",
          listType: "SINGLE_SELECT",
          sections,
        },
      });
    }
    for (let a of cmd._tags[type]) {
      if (!a.enable) continue;
      let prek = a.usedPrefix ? prefix[0] : "";
      let param = a.param ? a.param : "";
      lama = lama.concat(a.command.map((value) => prek + value + ` ${param}`));
    }

    let hasil = `${head}${line.repeat(4)}${list} *${
      type[0].toUpperCase() + type.slice(1).toLowerCase()
    } Menu*\n`;
    for (let b of lama) {
      hasil += list + ` ${b.toLowerCase()}\n`;
    }

    hasil = hasil.trim() + `\n${head}${line.repeat(2)}${list}`;

    buttons = [
      {
        buttonId: `.info`,
        buttonText: {
          displayText: "Information",
        },
        type: 1,
      },
      {
        buttonId: prefix[0] + `snk`,
        buttonText: {
          displayText: "Syarat Dan Ketentuan",
        },
        type: 1,
      },
    ];
    let locationMessage = { jpegThumbnail: logo.buffer };
    used_logo = (used_logo + 1) % 3;
    let buttonsMessage = {
      contentText: hasil,
      footerText:
        botinfo.footerText +
        " | " +
        Object.keys(userDb).length +
        " User Registered",
      buttons,
      headerType: 1,
    };
    return client.sendMessageFromContent(msg.from, { buttonsMessage });
  }
);

