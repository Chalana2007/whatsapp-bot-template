const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log(`🤖 ${config.botName} is Ready!`);
});

client.on('message', async msg => {
    require('./commands/menu')(msg, config);
    require('./commands/ytmp3')(msg);
    require('./commands/ytmp4')(msg, client);
    require('./commands/tiktok')(msg);
    require('./commands/admin')(msg, client);
});

client.initialize();