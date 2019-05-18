const fetch = require('node-fetch'),
Canvas = require('canvas'),
Discord = require('discord.js'),
snekfetch = require('snekfetch'),
moment = require('moment-timezone');

module.exports = class SoloTournament {
    constructor() {
        this.name = "shop",
        this.alias = ['shopbattleroyale', 'shopfortnite'],
        this.usage = "a!shop"
    }
    run(bot, message, args) {

        message.delete();

        const config = require("../config.json");

        function daTe(d1) {
            const d2 = moment.unix(d1);
            const d3 = moment.tz(d2, 'Indian/Maldives').format('Do MMMM YYYY, h:mm A');
            return d3;
        }

        const link = 'https://fortnite-public-api.theapinetwork.com/prod09/store/get';
    fetch(link).then(result => result.json()).then(async res => {
        const ordering = {}, // map for efficient lookup of sortIndex
            sortOrder = ['legendary','epic','rare','uncommon','common'];
        for (let i=0; i<sortOrder.length; i++)
            ordering[sortOrder[i]] = i;

        res.items.sort( function(a, b) {
            return (ordering[a.item.rarity] - ordering[b.item.rarity]);
        });

        const featured = [], daily = [];
        res.items.forEach(item => {
            if (item.featured === 1) {
                featured.push(item);
            } else {
                daily.push(item);
            }
        });

        const length = Math.ceil((daily.length / 4) * 200) + Math.ceil((featured.length / 4) * 200);

        Canvas.registerFont('./assets/LuckiestGuy.ttf', { family: 'luckiestguy' });
        const canvas = Canvas.createCanvas(870, length + 400); //875, length + 280
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./assets/wallpaper2.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        /*
        ctx.fillStyle = 'rgba(13, 12, 12, 0.3)';
        // ctx.fillStyle = '#2C2F33';
        ctx.fillRect(10, 10, 830, Math.ceil((featured.length / 4) * 200) + 105);
        ctx.fillRect(10, Math.ceil((featured.length / 4) * 200) + 128, 830, Math.ceil((daily.length / 4) * 200) + 125);
        */
        ctx.font = '40px "luckiestguy"';
        ctx.fillStyle = '#99AAB5';
        // ctx.fillText('ފީޗާޑް', 25, 80);
        // ctx.fillText('ޑެއިލީ', 525, 80);

        ctx.fillText('Featured', 20, 40);
        ctx.fillText('Daily', 25, Math.ceil((featured.length / 5) * 300) + 160);

        let num = 0;
        for (let i = 0; i < (Math.ceil(featured.length / 4)); i++) {
            for (let j = 0; j < 4; j++) {
                if (num < featured.length) {
                    const { body: buffer } = await snekfetch.get(featured[num].item.images.information);
                    const avatar = await Canvas.loadImage(buffer);
                    ctx.drawImage(avatar, (j * 205) + 30, (i * 205) + 55, 200, 200);
                    num++;
                }
            }
        }

        num = 0;
        for (let i = 0; i < (Math.ceil(daily.length / 4)); i++) {
            for (let j = 0; j < 4; j++) {
                if (num < daily.length) {
                    const { body: buffer } = await snekfetch.get(daily[num].item.images.information);
                    const avatar = await Canvas.loadImage(buffer);
                    ctx.drawImage(avatar, (j * 205) + 30, (i * 205) + Math.ceil((featured.length / 4) * 210) + 250, 200, 200);
                    num++;
                }
            }
        }

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'shop.png');

        let role = message.guild.roles.find('id', config.role.notifboutique2);

        

        const sendEmbed = (channel) => {
            const embed = new Discord.RichEmbed()
                // .setColor(message && message.guild ? message.guild.me.displayHexColor : '#35c7e4')
                .setColor('#6302c5')
                .setTitle(``)
                .setDescription("N’oublie pas de mettre dans la Boutique notre Code Créateur :\n **ASCALONCUP**")
                .attachFile(attachment)
                .setImage('attachment://shop.png')
               // .setFooter("By Zayn");

               channel.send(`[${role}] Boutique Fortnite`);
            channel.send(embed);
        };
        const lastupdate = res.lastupdate.toString();
        if (message) {
            // message.channel.send(`Shop data for **${res.date}**`, attachment);
            sendEmbed(message.channel);
        } else {
            const oldShopDate = client.autoCheck.get('shop_latest');
            if (!oldShopDate) {
                console.log('Shop time set! ' + lastupdate);
                client.autoCheck.set('shop_latest', lastupdate);
                return;
            }
            if (oldShopDate === lastupdate) return;
            if (parseInt(oldShopDate, 10) > parseInt(lastupdate, 10)) return;
            client.config.auto_channels.forEach(function(chan) {
                const notify_channel = client.channels.find(x => x.id === chan);
                sendEmbed(notify_channel);
            });
            client.autoCheck.set('shop_latest', lastupdate);
            console.log('New latest shop time set! ' + lastupdate);
            // notify_channel.send(`Shop data for **${res.date}**`, attachment);
        }
        
    }).catch(err => console.error(err));

        }
    }
