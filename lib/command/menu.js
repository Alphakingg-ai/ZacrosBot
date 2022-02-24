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
                     let rt = functions.count(process.uptime());
                  let tomtal = 0;
                 for (let a of cmd._events) {
                 for (let b of a.command) tomtal++;
               }
            var countDownDate = new Date("April, 04, 2022 04:15:00").getTime();
            var now = new Date(new Date().getTime() + 25200000).getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            stayhalal = `${days} Hari ${hours} Jam ${minutes} Menit`;
      return client.sendMessageFromContent(msg.from, {
        listMessage: {
          title: `*「 _Tetha WhatsApp Bot_ 」*`,
          description: `${ucapanWaktu} *${msg.sender.vname ? msg.sender.vname : msg.sender.name}*
Tetha disini! Klik tombol dibawah yaa!

Menuju Ramadhan 1443 H:
${stayhalal}

Total Fitur:
${tomtal} Feature

Run Time:
${rt.day} Hari ${rt.hours} Jam ${rt.minutes} Menit`,
          footerText: `© Tetha-Bot`,
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

