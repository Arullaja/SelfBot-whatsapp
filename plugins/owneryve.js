let handler = function (m) {
	this.sendContact(m.chat, '6288224465258', 'Owner Bot Lyn :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
