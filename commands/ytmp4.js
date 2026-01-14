const ytdl = require('yt-dlp-exec');
module.exports = async (msg, client) => {
    if(msg.body.startsWith('.ytmp4 ')){
        let url = msg.body.replace('.ytmp4 ', '');
        msg.reply('Downloading MP4...');
        try {
            await ytdl(url);
            msg.reply('Downloaded MP4!');
        } catch(err){
            msg.reply('Error downloading MP4.');
        }
    }
};