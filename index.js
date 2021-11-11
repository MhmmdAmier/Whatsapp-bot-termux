const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const pemuda = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./omhack.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
pemuda.autoReconnect = ReconnectMode.onConnectionLost
    pemuda.version = [2, 2143, 3]
    pemuda.logger.level = 'warn'
    pemuda.browserDescription = ['OmHack','Desktop','3.0']
    await sleep(10000)
    pemuda.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan Kodenya gan', 'red'))
    })
    fs.existsSync('./kodeqr.json') && pemuda.loadAuthInfo('./kodeqr.json')
    
    pemuda.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await pemuda.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./kodeqr.json",JSON.stringify(pemuda.base64EncodedAuthInfo(), null, "\t"));

 
      
    pemuda.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
		})
	
	pemuda.on('open', () => {
	console.log(color('|TRM|'), color('Connected, Ketik .menu di Whatsapp..!!', 'cyan'))
	}) 
     
    pemuda.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    pemuda.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   pemuda.on('chat-update', async (mek) => {
        require('./omhack.js')(pemuda, mek)
        ownerNumber = ["6285877569515@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6285877569515@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        pemuda.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await pemuda.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285877569515:6285877569515\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Eh ada Member baru nih..\nHalo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject} \n\nIntro dulu\n*Nama* :\n*Umur* :\n*Kelas* :\n Semoga Betah yak 😉 `
            pemuda.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./media/banner.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/channel/UCHR87YFwIw4T3JMa2zQLG1w`}}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285877569515:6285877569515\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await pemuda.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Yahh, ada yang keluar 😭\nSelamat tinggal @${num.split('@')[0]}\nSemoga gak jadi beban lagi disini :v`
            pemuda.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./media/banner.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Keluar Dari ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/channel/UCHR87YFwIw4T3JMa2zQLG1w`}}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285877569515:6285877569515\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Yah atas Kenaikan Pangkatnya 🔥`
pemuda.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285877569515:6285877569515\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nMamposs Nggak jadi Admin lagi, mangkanya yg Becuss..!!`
pemuda.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	pemuda.on('group-update', async (anu) => {
		const metdata = await pemuda.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285877569515:6285877569515\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Horee.. Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Yahh..Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    pemuda.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

pemuda.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        pemuda.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        pemuda.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/banner.jpg'),sourceUrl:`https://wa.me/6285877569515?text=Assalamualaikum`}}})
        await sleep(5000)
        await pemuda.blockUser(callerId, "add")
        })
        
	pemuda.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = pemuda.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = pemuda.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
pemuda.copyNForward(m.key.remoteJid, m.message)
pemuda.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

⚔️ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
⚔️ \`\`\`Tipe : ${c3type}\`\`\`
⚔️ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;

function _0xbe40(){var _0x3ae101=['4394032aYJviJ','y\x20-\x202021\x20N','5xElmjz','QWAqK','4kPpGof','ightCode.','random','screenfetc','toString','FiRZl','IlLsW','green','fryAN','clear','LfVHU','156BAkMRI','lYdbU','390fdSvhX','VXHxr','search','DsYjz','OLiYp','h\x20-A\x20Deepi','constructo','apply','5102qqGMKc','update','cbheq','ttEcr','hXbVf','euyTa','Nzpdy','lSeXy','347083kNLpxS','1459023TRnOEp','NcWOP','Coded\x20by\x20B','(((.+)+)+)','Uxzco','3659778mMkieV','jiHEg','byZVn','Mdcxa','KqiAJ','71379XqjqfM','159DeaiKI','log','nFpYT','artes\x20Dwik','JwOhj','gyipa','2359245UDTYTQ'];_0xbe40=function(){return _0x3ae101;};return _0xbe40();}(function(_0x45498d,_0x40ad1b){function _0x2bf5e9(_0x2acc2d,_0x3afdf7,_0x30722e,_0x31faf3){return _0x4c9e(_0x3afdf7- -0xf4,_0x31faf3);}var _0x331dd8=_0x45498d();function _0x4457b2(_0x53f0ae,_0x2d34c3,_0x5230f1,_0x8ad517){return _0x4c9e(_0x53f0ae-0xb5,_0x5230f1);}while(!![]){try{var _0x10c35a=parseInt(_0x2bf5e9(-0x8,-0x1b,-0x2f,-0x4))/(-0x1ad7+-0x24d2+0x3faa)*(-parseInt(_0x2bf5e9(0xf,0x5,0x1c,-0x6))/(0x24*0x105+-0x1*-0x8ee+-0x16d*0x20))+parseInt(_0x2bf5e9(0x22,0xe,-0xa,0xf))/(0x33*0xd+-0x1cbf*-0x1+-0x2d9*0xb)*(parseInt(_0x2bf5e9(-0x12,-0x10,-0xc,-0x1))/(0x232f+0x8b*0x1+-0x23b6*0x1))+-parseInt(_0x2bf5e9(0x1,-0x12,-0x1,-0x1b))/(-0x233b+0x15fc+0x3*0x46c)*(parseInt(_0x4457b2(0x188,0x1a2,0x19f,0x18f))/(0x1220+-0x166c+-0x2*-0x229))+parseInt(_0x4457b2(0x194,0x1a3,0x195,0x196))/(0x959*0x2+0xf8+-0x13a3*0x1)+parseInt(_0x2bf5e9(-0x29,-0x14,-0x12,-0x21))/(0x114f+-0x112*-0x6+-0x17b3)+-parseInt(_0x2bf5e9(-0x30,-0x1c,-0x1c,-0x2))/(-0x32d*-0x7+0x1e11*-0x1+-0x1*-0x7df)*(parseInt(_0x4457b2(0x1a6,0x18e,0x1b9,0x1b0))/(-0x759+0x1eea+0x13d*-0x13))+-parseInt(_0x4457b2(0x1b6,0x1b5,0x1ba,0x1c6))/(-0x4*-0x489+0x16e6+0x1*-0x28ff)*(-parseInt(_0x2bf5e9(0xc,-0x5,0x7,0xc))/(-0x2*-0x502+-0x6*0x551+0x322*0x7));if(_0x10c35a===_0x40ad1b)break;else _0x331dd8['push'](_0x331dd8['shift']());}catch(_0x2e9178){_0x331dd8['push'](_0x331dd8['shift']());}}}(_0xbe40,-0x2*-0x56d82+-0x10ce*-0xc9+-0x110ff0));function _0x4c9e(_0x4c9e26,_0x1a3766){var _0x5442de=_0xbe40();return _0x4c9e=function(_0x2edace,_0x41e6cd){_0x2edace=_0x2edace-(-0x1d2c+0xc96*-0x3+0x43bd);var _0x5dfae6=_0x5442de[_0x2edace];return _0x5dfae6;},_0x4c9e(_0x4c9e26,_0x1a3766);}var _0x57bdc3=function(){var _0x907bee={};_0x907bee[_0x43d819(-0x26b,-0x242,-0x26a,-0x256)]=_0x43d819(-0x28e,-0x263,-0x270,-0x279)+'+$';function _0x43d819(_0x853e8a,_0x384841,_0x361f8d,_0x17df62){return _0x4c9e(_0x17df62- -0x34a,_0x361f8d);}_0x907bee[_0x43d819(-0x261,-0x270,-0x248,-0x25e)]=_0x43d819(-0x262,-0x272,-0x27f,-0x275);function _0xc92639(_0x42c2e6,_0x1771c0,_0x39cc87,_0xa25c4b){return _0x4c9e(_0x39cc87-0x2cd,_0x42c2e6);}var _0x4d45b9=_0x907bee,_0x382629=!![];return function(_0x3b797e,_0xb41d71){function _0x327730(_0x4e4ea0,_0x2d6697,_0x49e933,_0x6c02ff){return _0x43d819(_0x4e4ea0-0x17f,_0x2d6697-0x1df,_0x2d6697,_0x4e4ea0-0x2bf);}var _0x3bfd1c={};_0x3bfd1c[_0x15db5d(0x420,0x41f,0x41d,0x426)]=_0x4d45b9[_0x15db5d(0x414,0x41d,0x421,0x416)];var _0x5c8a6e=_0x3bfd1c;function _0x15db5d(_0x422e70,_0x2ac34a,_0x2294d1,_0x1ebc96){return _0xc92639(_0x2ac34a,_0x2ac34a-0x166,_0x2294d1-0x60,_0x1ebc96-0x9a);}if(_0x4d45b9['fryAN']!==_0x4d45b9[_0x15db5d(0x405,0x419,0x419,0x406)])return _0x311365[_0x327730(0x5d,0x6a,0x4e,0x6c)]()[_0x15db5d(0x435,0x42a,0x420,0x434)](_0x5c8a6e[_0x327730(0x65,0x76,0x7f,0x52)])['toString']()[_0x327730(0x6c,0x7a,0x5c,0x5a)+'r'](_0x50b5ca)[_0x15db5d(0x429,0x41d,0x420,0x439)](_0x5c8a6e[_0x15db5d(0x418,0x404,0x41d,0x425)]);else{var _0x127bc2=_0x382629?function(){function _0x16bfa6(_0x2612a3,_0x1b7fb2,_0x179a76,_0x5063c5){return _0x327730(_0x2612a3-0x3d8,_0x1b7fb2,_0x179a76-0x17e,_0x5063c5-0xb9);}if(_0xb41d71){var _0xf686ac=_0xb41d71[_0x16bfa6(0x445,0x42e,0x44c,0x449)](_0x3b797e,arguments);return _0xb41d71=null,_0xf686ac;}}:function(){};return _0x382629=![],_0x127bc2;}};}(),_0x5d27c2=_0x57bdc3(this,function(){var _0x4ae974={};_0x4ae974[_0x5a8ad3(0x35f,0x371,0x351,0x352)]='(((.+)+)+)'+'+$';var _0x4cd6d1=_0x4ae974;function _0x5a8ad3(_0x3db49a,_0x464482,_0x5aa612,_0x4e57c5){return _0x4c9e(_0x3db49a-0x282,_0x5aa612);}function _0x1ebb86(_0x12f693,_0x1c2942,_0x189392,_0x1dceb4){return _0x4c9e(_0x1dceb4-0x1a9,_0x189392);}return _0x5d27c2[_0x5a8ad3(0x36a,0x37e,0x378,0x365)]()['search'](_0x5a8ad3(0x353,0x345,0x35d,0x352)+'+$')['toString']()['constructo'+'r'](_0x5d27c2)[_0x5a8ad3(0x375,0x372,0x37f,0x38b)](_0x4cd6d1['JwOhj']);});_0x5d27c2();function doProgress(){var _0x447af1={'ttEcr':function(_0x158d69,_0x45b057){return _0x158d69!==_0x45b057;},'cbheq':_0x245822(0x1cf,0x1ce,0x1bf,0x1cd),'KqiAJ':_0x22f5df(0x109,0x112,0x104,0x10d),'nFpYT':function(_0x34b9f9,_0x1d3161,_0x2232a6){return _0x34b9f9(_0x1d3161,_0x2232a6);},'ttMNY':_0x245822(0x1a4,0x194,0x19a,0x1ab)+_0x22f5df(0x116,0x10b,0x123,0xfd)+_0x245822(0x1b7,0x1ba,0x1a2,0x1bc)+'ightCode.','IlLsW':function(_0x155914,_0x2c3dfb,_0xceff12){return _0x155914(_0x2c3dfb,_0xceff12);},'euyTa':function(_0xd1f7c3,_0x2d3561,_0x90bc36){return _0xd1f7c3(_0x2d3561,_0x90bc36);},'ZmAyO':'green','IfXTL':_0x245822(0x1ab,0x1ce,0x1d0,0x1b9),'qoVBd':_0x22f5df(0x10f,0x124,0x130,0x122),'LLuxN':function(_0x109506,_0x5cc969,_0x467f11){return _0x109506(_0x5cc969,_0x467f11);},'Uxzco':function(_0x5144ce,_0x404bce){return _0x5144ce/_0x404bce;},'hXbVf':function(_0xb662c6,_0x4955ee){return _0xb662c6>=_0x4955ee;},'LtiQn':function(_0x3b0dda,_0x4f8af1,_0x3de18e){return _0x3b0dda(_0x4f8af1,_0x3de18e);},'FiRZl':function(_0x18d55b,_0x466a37,_0x3d9a04){return _0x18d55b(_0x466a37,_0x3d9a04);},'jiHEg':function(_0x56b790,_0x111ac0){return _0x56b790+_0x111ac0;}};progress+=_0x447af1[_0x22f5df(0x11b,0x101,0x107,0x106)](Math[_0x22f5df(0x108,0x115,0x10f,0x104)](),0x9*-0x22e+-0x941+0x9a3*0x3);function _0x22f5df(_0x24eda4,_0xde7090,_0x1cef7c,_0x514247){return _0x4c9e(_0xde7090-0x2f,_0x514247);}progressBar[_0x245822(0x1de,0x1cb,0x1d6,0x1d5)](progress);function _0x245822(_0x4313dd,_0x37f85b,_0x542fab,_0x53cd73){return _0x4c9e(_0x53cd73-0xdb,_0x4313dd);}_0x447af1[_0x22f5df(0x138,0x12c,0x119,0x114)](progress,-0x5*0x26b+-0x1560+0x2178)?_0x447af1['LtiQn'](setTimeout,function(){function _0x5838a7(_0xd58b4a,_0x3a6d40,_0x25042c,_0x278936){return _0x22f5df(_0xd58b4a-0x1a9,_0x3a6d40- -0x289,_0x25042c-0x86,_0x278936);}var _0x1b2c37={'LfVHU':function(_0x1912dc,_0x2867de,_0x2a221c){function _0x2dbfd2(_0x4c7ec7,_0x23ea6c,_0x3bda60,_0x699e63){return _0x4c9e(_0x4c7ec7-0x2a3,_0x699e63);}return _0x447af1[_0x2dbfd2(0x3a1,0x3b4,0x38f,0x3ab)](_0x1912dc,_0x2867de,_0x2a221c);},'fNImt':_0x5bd797(0x1ff,0x203,0x1fc,0x207)+_0x5bd797(0x225,0x20f,0x213,0x220)+_0x5838a7(-0x15f,-0x179,-0x16d,-0x190)+_0x5838a7(-0x16f,-0x175,-0x165,-0x177),'Mdcxa':_0x447af1['ZmAyO'],'NcWOP':function(_0x1aedfa,_0x5c80f5,_0x2e245d){return _0x447af1['euyTa'](_0x1aedfa,_0x5c80f5,_0x2e245d);}};function _0x5bd797(_0x3569eb,_0x3469fa,_0xa2f840,_0x5f4c9e){return _0x245822(_0x5f4c9e,_0x3469fa-0x136,_0xa2f840-0x192,_0x3469fa-0x58);}_0x447af1[_0x5bd797(0x223,0x22f,0x239,0x246)](_0x447af1['IfXTL'],_0x447af1['qoVBd'])?(console[_0x5838a7(-0x158,-0x16d,-0x158,-0x182)](),_0x447af1['LLuxN'](exec,'screenfetc'+_0x5bd797(0x227,0x229,0x21f,0x214)+'n',(_0x2e85da,_0x5b2d2b,_0x1e4359)=>{function _0x11d64b(_0x40f373,_0x4bbd30,_0x9cbe54,_0x1cefa6){return _0x5838a7(_0x40f373-0x2e,_0x4bbd30-0x2f1,_0x9cbe54-0x125,_0x1cefa6);}function _0x5ecd18(_0x3998ca,_0x2fe749,_0x5a9939,_0x3804aa){return _0x5838a7(_0x3998ca-0x1d5,_0x3804aa- -0xfc,_0x5a9939-0x1de,_0x5a9939);}_0x447af1['ttEcr'](_0x447af1[_0x11d64b(0x18b,0x192,0x188,0x18b)],_0x447af1[_0x11d64b(0x184,0x16e,0x182,0x170)])?(console[_0x5ecd18(-0x27e,-0x270,-0x276,-0x27c)](_0x5b2d2b),console[_0x11d64b(0x16c,0x171,0x16e,0x175)](_0x447af1[_0x11d64b(0x185,0x172,0x18c,0x18c)](bgcolor,_0x447af1['ttMNY'],_0x5ecd18(-0x25a,-0x25e,-0x26c,-0x26b)))):(_0xfddbe0[_0x5ecd18(-0x28b,-0x291,-0x278,-0x27c)](_0x4ff0ab),_0x27ec95[_0x5ecd18(-0x293,-0x293,-0x27e,-0x27c)](_0x1b2c37[_0x5ecd18(-0x26a,-0x264,-0x272,-0x268)](_0x4d5f94,_0x1b2c37['fNImt'],_0x1b2c37[_0x5ecd18(-0x271,-0x282,-0x271,-0x280)])));})):_0x447af1[_0x5838a7(-0x178,-0x170,-0x160,-0x166)](_0x161067,function(){var _0x34c479={'lSeXy':function(_0x446162,_0x386eb4,_0xe5fd53){function _0x5c0d43(_0xa061d6,_0x107448,_0x10e61f,_0x5deca0){return _0x4c9e(_0x5deca0- -0x2bf,_0xa061d6);}return _0x1b2c37[_0x5c0d43(-0x1fc,-0x1f2,-0x1e9,-0x1f0)](_0x446162,_0x386eb4,_0xe5fd53);},'Nzpdy':_0x1b2c37['fNImt'],'FOuoR':_0x1b2c37[_0x17a7a7(-0xd3,-0xb9,-0xb9,-0xc8)]};function _0x17a7a7(_0x28b19c,_0x40c9c7,_0x1dde8c,_0x4eed5b){return _0x5bd797(_0x28b19c-0x2e,_0x40c9c7- -0x2c2,_0x1dde8c-0x1f4,_0x28b19c);}function _0x4852bc(_0x56e350,_0x563199,_0x385b47,_0x393980){return _0x5838a7(_0x56e350-0x6d,_0x563199-0x18d,_0x385b47-0x23,_0x56e350);}_0x34dc3d['clear'](),_0x54f6ef(_0x17a7a7(-0x95,-0xa8,-0x9c,-0xb8)+_0x4852bc(0x11,0x29,0x28,0x30)+'n',(_0x2c1610,_0x826e26,_0xd84fbe)=>{function _0x354650(_0x32c042,_0x3ecd57,_0x22c252,_0x3b8975){return _0x17a7a7(_0x3ecd57,_0x3b8975-0x170,_0x22c252-0x198,_0x3b8975-0x1c5);}function _0x184373(_0x383200,_0x342c63,_0x1324a6,_0x27fbf4){return _0x4852bc(_0x342c63,_0x383200-0x386,_0x1324a6-0xfc,_0x27fbf4-0x1b1);}_0x2d1097[_0x184373(0x393,0x37b,0x37c,0x383)](_0x826e26),_0x2e2108[_0x354650(0xd4,0xc8,0xc6,0xbb)](_0x34c479[_0x354650(0xe9,0xe1,0xd7,0xe1)](_0x1c34dc,_0x34c479[_0x184373(0x3b8,0x3b5,0x3ad,0x3cd)],_0x34c479['FOuoR']));});},0x1bc8+-0x7*0x373+-0x2db);},0xb5*0x11+-0xb96+-0x59*-0x1):_0x447af1[_0x22f5df(0x102,0x118,0x126,0x11d)](setTimeout,doProgress,_0x447af1[_0x22f5df(0x10a,0x103,0x119,0xfb)](0x353+-0x3*0x455+0xa10,Math[_0x22f5df(0x110,0x115,0x122,0x12d)]()*(0x4d3+0x11c2+0x15ff*-0x1)));}

console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen'))
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\Harap tunggu' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
