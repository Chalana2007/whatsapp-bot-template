const axios = require('axios');
module.exports = async (msg) => {
    if(msg.body.startsWith('.tiktok ')){
        let url = msg.body.replace('.tiktok ', '');
        msg.reply('Downloading TikTok...');
        // Simple placeholder
        msg.reply(`TikTok download link: ${url}`);
    }
};