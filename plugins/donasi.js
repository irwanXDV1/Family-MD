const qrku = "[url=https://ibb.co/VqCzyN0][img]https://i.ibb.co/VqCzyN0/1670418108721.jpg[/img][/url]"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • tri [08895324513343]
│ • Dana  [Nggak ada]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/+6288268184147
│ _Hasil donasi akan di tabung_
│ _atau beli panel/rdp/vps_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
