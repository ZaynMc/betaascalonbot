const {RichEmbed} = require ('discord.js');
exports.run = async (client, message, args) => {
      message.delete ().catch(O_o => {});
    const a = message.guild.roles.get('499257961881927691'); // Marrom
     const b = message.guild.roles.get('526261790733238272'); // Laranja
     const filter = (reaction) => ['🏺', '🏀'].includes(reaction.emoji.name);
    const embed = new RichEmbed()
        .setTitle ('Escolha seu cargo!')
        .setDescription (`
        🏺 $ {a.toString ()}
        $ {b.toString ()}
        `)
        .setColor (0xdd9323)
        .setFooter (` ID: $ {message.`);

    message.channel.send(embed).then(async msg => {


        msg.react('🏺');

        msg.react('🏀');



       msg.awaitReactions(filter,).then(recueilli => {


            const réaction = recueilli.first();


            switch (reaction.emoji.name) {

                case '🏺': message.member.addRole(a).catch(err => {

                        console.log(err);

                        return;

                    });



                     break;

                case '🏀': message.member.addRole(b).catch (err => {
                           console.log(err);
                        return;
                    });


                    return;
            }


          }).catch (recueilli => {

            return message.channel.send ("Je ne peux pas vous obtenir ce message: /").then(m => m.delete (3000));
        });
    });
};
exports.help = {
     name: 'charges'
 };﻿
