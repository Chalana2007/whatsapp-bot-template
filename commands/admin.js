module.exports = (msg, client) => {
    if(msg.body === '.mute'){
        msg.reply('Group muted (example).');
    }
    if(msg.body === '.unmute'){
        msg.reply('Group unmuted (example).');
    }
    if(msg.body.startsWith('.add ')){
        msg.reply('Added user (example).');
    }
    if(msg.body.startsWith('.remove ')){
        msg.reply('Removed user (example).');
    }
};