const {RichEmbed} = require ('discord.js');
exports.run = async (client, message, args) => {
     wait message.delete (). catch (O_o => {});
    const a = message.guild.roles.get ('499257961881927691'); // Marrom
     const b = message.guild.roles.get ('526261790733238272'); // Laranja
     const filter = (reaction) => ['🏺', '🏀']. Includes (reaction.emoji.name);
    const embed = new RichEmbed ()
        .setTitle ('Escolha seu cargo!')
        .setDescription (`
        🏺 $ {a.toString ()}
        $ {b.toString ()}
        `)
        .setColor (0xdd9323)
        .setFooter (` ID: $ {message.`);

    message.channel.send (embed).then (async msg => {


        wait msg.react ('🏺');

        wait msg.react ('🏀');



       msg.awaitReactions(filter,).then(recueilli => {


            const réaction = recueilli.first ();


            commutateur (reaction.emoji.name) {

                cas '🏺': message.member.addRole(a).catch (err => {

                        console.log (err);

                        retour message.channel. send (`Algo de errado não está certo. Nao conseille une cargaison: ** $ {err.message} **.`);

                    });



                     break;

                case '🏀': message.member.addRole(b).catch (err => {
                           console.log (err);
                        return message.channel.send (`Quelque chose ne va pas n'est pas correct. Je ne pouvais pas appliquer cette charge: ** $ {err.message} **.`);
                    });


                    break;
            }


          }).catch (recueilli => {

            retour message.channel.send ("Je ne peux pas vous obtenir ce message: /") then (m => m.delete (3000));
        });
    });
};
exports.help = {
     name: 'charges'
 };﻿
