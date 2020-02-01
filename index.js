const Discord = require('discord.js')
const client = new Discord.Client
client.login(process.env.TOKEN) //Lien du bot: https://discordapp.com/oauth2/authorize?client_id=664527386603421697&scope=bot&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2F4X5aQRn


let prefix = ';'
let joinleavechannel = '671033366644260874'
let commandschannel = '593820160951975936'
let server = '591932173263568896'


client.on('ready', function (){
    client.user.setActivity(prefix + 'help | GFXserver')
    console.log(client.user.username + ' viens de se connecter !')
})


client.on('message', function(message){

    if(message.author.bot === true) {return}

    if(message.content === prefix + 'stop'){

        if(!(message.author.id === '514475217779818496')) {
            message.delete()
            message.channel.send('Désolé ' + message.author + ', mais vous n\'avez pas la permission !').then(message => message.delete(5000))
        }

        else{
            message.delete()
            message.channel.send('Le bot se déconnectera d\'ici quelques secondes...').then(message => message.delete(2000))

            setTimeout(off, 3000)
            function off() {
                client.destroy()
            }
        }


    }

    if(message.content === prefix + 'infos'){

        message.delete()

        if(!(message.channel.id === commandschannel)) {

            if(!(message.guild.id === server)){
  
                let notinserveur = new Discord.RichEmbed()
                .setColor('#FF2E2E')
                .setDescription(message.author.username + ', cette commande n\'est seulement accecible sur [mon serveur](https://discord.gg/4X5aQRn) !')
                .setFooter(client.user.username + ', bot for the GFXserver ! Develloped by Flymeth#6242', client.user.avatarURL)

                message.channel.send(notinserveur).then(message => message.delete(7000))

            }

            else{

                let falsechannel = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor('Erreur de salon, ' + message.author.username + ' !', message.author.avatarURL)
                .addField('Pour faire la commande `' + message.content + '`, dirigez vous vers le salon textuel:', '<#' + commandschannel + '>', true)
                .setFooter(client.user.username + ', bot for the GFXserver ! Develloped by Flymeth#6242', client.user.avatarURL)

                message.channel.send(falsechannel).then(message => message.delete(7000))

            }
        }

        else {

            let info = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Information sur le GFXserver:', message.guild.iconURL)
            .addBlankField()
            .addField('Membres :', message.guild.memberCount, true)
            .addField('Créé le:', 'Lundi 6 Mai 2019', true)
            .addBlankField()
            .setFooter('Auteur de la commande: ' + message.author.username, message.author.avatarURL)
            .setTimestamp()

            message.delete().catch(console.error)
            message.channel.send(info).then(message => message.delete(100000)).catch(console.error)

        }

        
    }

    if(message.content === prefix + 'help'){

        message.delete()
        
        let help = new Discord.RichEmbed()
        .setAuthor('Commandes et fonction du ' + client.user.username + ':', 'https://cdn.pixabay.com/photo/2012/04/14/12/44/question-mark-33777_960_720.png')
        .setTimestamp()
        .setFooter('Auteur de la commande: ' + message.author.username, message.author.avatarURL)
        .addBlankField()
        .setColor('RANDOM')
        .addField('**' + prefix + 'help**', 'Affiche le message d\'aide du bot.', true)
        .addField('**' + prefix + 'infos**', 'Affiche les informations du serveur.', true)
        .addField('**' + prefix + 'links**', 'Affiche les liens utiles du serveur et du bot.', true)
        .addField('**' + prefix + 'stop**', 'Déconnecte le bot.\n> *Seul Flymeth y a accès.*', true)
        .addBlankField()

        message.channel.send(help).then(message => message.delete(100000))

    }

    if(message.content === prefix + 'links'){

        message.delete()

        if(!(message.channel.id === commandschannel)) {

            if(!(message.guild.id === server)){
 
               let notinserveur = new Discord.RichEmbed()
               .setColor('#FF2E2E')
               .setDescription(message.author.username + ', cette commande n\'est seulement accecible sur [mon serveur](https://discord.gg/4X5aQRn) !')
               .setFooter(client.user.username + ', bot for the GFXserver ! Develloped by Flymeth#6242', client.user.avatarURL)

               message.channel.send(notinserveur).then(message => message.delete(7000))

           }

           else{

           message.delete()

           let falsechannel = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setAuthor('Erreur de salon, ' + message.author.username + ' !', message.author.avatarURL)
           .addField('Pour faire la commande `' + message.content + '`, dirigez vous vers le salon textuel:', '<#' + commandschannel + '>', true)
           .setFooter(client.user.username + ', bot for the GFXserver ! Develloped by Flymeth#6242', client.user.avatarURL)

           message.channel.send(falsechannel).then(message => message.delete(7000))

           }
        }

        else{

            message.delete()
        
            let links = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor('Voici les liens utiles du GFXserver et du GFXbot...', 'https://cdn.pixabay.com/photo/2019/03/28/22/23/link-4088190_960_720.png')
            .setDescription('**[Lien d\'inviation](https://discord.gg/4X5aQRn)** \n**[Instagram](https://www.instagram.com/invites/contact/?i=133r731b9uulk&utm_content=99y5xaz)** \n*Invites le bot sur ton serveur(non disponible)*')
            .setFooter('Auteur de la commande: ' + message.author.username, message.author.avatarURL)
            .setTimestamp()
    
            message.channel.send(links).then(message => message.delete(100000))

        }

    }
})

client.on('guildMemberAdd', member => {

    if(!(member.guild.id === server)){

        {return}

    }

    else{

        member.addRole('593822869683699723')

        let join = new Discord.RichEmbed()
        .setAuthor('→ "' + member.user.username + '" viens de rejoindre le serveur !', 'https://cdn.discordapp.com/attachments/671015740002009098/671015851310317591/plus_bot.jpg.png')
        .addBlankField()
        .setThumbnail(member.guild.iconURL)
        .setColor('#2EFF73')
        .setTimestamp()
        .setFooter('Nous somme désormais ' + member.guild.memberCount + ' (bots incluts) ! \n' + member.user.username + ' a rejoint le serveur', member.user.avatarURL)
    
        client.channels.get(joinleavechannel).send(join)
    
        let dmjoin = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(member.user.avatarURL)
        .setAuthor('Bienvenue sur le serveur, ' + member.user.username + ' !')
        .setDescription('Tu es notre ' + member.guild.memberCount + 'e membres !')
        .addField(':sparkling_heart: __Tu veut aider le GFXserver ?__ :sparkling_heart:', 'Alors invites tes amis en copiant, puis collant ce lien: **https://discord.gg/4X5aQRn \n**', true)
        .addField(':warning: **__ATTENTION:__** :warning:', '***Le GFXserver dispose d\'un systeme de vérification! Pour passer la vérification, randez-vous dans le salon textuel \n<#593824737646346302> ! Merci.***')
        .setFooter(client.user.username + ', bot for the GFXserver ! Develloped by Flymeth#6242', client.user.avatarURL)
    
        member.send(dmjoin)

    }

})


client.on('guildMemberRemove', member => {

    if(!(member.guild.id === server)){

        {return}

    }

    else{

        let leave = new Discord.RichEmbed()
        .setAuthor('→ "' + member.user.username + '" viens de quitter le serveur !', 'https://cdn.discordapp.com/attachments/671015740002009098/671015840702791696/moins_bot.png')
        .setThumbnail(member.guild.iconURL)
        .addBlankField()
        .setColor('#FF2E2E')
        .setTimestamp()
        .setFooter('Nous somme désormais ' + member.guild.memberCount + ' (bots incluts) ! \n' + member.user.username + ' a quitté le serveur', member.user.avatarURL)
    
        client.channels.get(joinleavechannel).send(leave)

    }
})
