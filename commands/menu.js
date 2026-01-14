module.exports = (msg, config) => {
    if(msg.body === '.menu') {
        msg.reply(`Hello ${config.ownerName}! 🤖
Available Commands:
- .ytmp3
- .ytmp4
- .tiktok
- .admin`);
    }
};