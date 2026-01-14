const ytdl = require('yt-dlp-exec');
module.exports = async (msg) => {
    if(msg.body.startsWith('.ytmp3 ')){
        let url = msg.body.replace('.ytmp3 ', '');
        msg.reply('Downloading MP3...');
        try {
            await ytdl(url, { extractAudio: true });
            msg.reply('Downloaded MP3!');
        } catch (err) {
            msg.reply('Error downloading MP3.');
        }
    }
};