/* Copyright (C) 2021 SPIRIT SER.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '917994093863@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/6238560742.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '917736771516@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/6238560742.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['6238560742','a','Aa','Aah','Allah','Alone','Annan','Annu','Anshid','abananam','adich','anshid','anuser','di','dj','don','entea','feel','find','food','friend','fuck','girls','git','h','hi','id','insuit','pass','pattula','phaa','sing','single','spirit','sorry','sticker','tagall','team','thallum','thayoli','thech','thepp','theri','thukum','try','tto','tts','vatt','vava','vazha','vila','warn','who','work','xmedia','yo','yogiyada','pinnalla','pm','po','potta','power','remix','remove','reply','romam','sad','samshayam','sathyam','shama','man','manassilayo','mandan','me','mention','menu','moorkkan','mp3','namban','no reply','noob','oho','oii','owner','pannu','invite','joli','katha','keatittilla','king','koi','koodea','kooi','kunna','kyat','line','list','look','luv','chor','Avasram','Hai','Halo','Hlo','Ho','Hy','I love you','india','Happy','Hate','Hello','Hi','Hii','Ayye','ith','Ivan mathi','Ivan','Jinn','Kalikkan nikkenda','Avan','Aysheri','Baby','Bgm','Brithday','BOT','Dey','Di','Dialogue','Edi','Enth','Entry','Evidea','Ezra','Fan','fight','Football','Game','Gd nyt','Good night','Good nyt','Kalipp','Kalliyannam','Koi','Kollam','Koriyer','Koyi','Kozhi','Ktm','Kundan','Kundi','Kunna','Lalitha','Left','Leo','Love u','Love','Main','Mark','Messi','Mid night','Modhalali','Mood','Moodeash','Mrng','Mukesh','Muthe','My god','Myr','Myre','Name','Nanba','Nee','Ni arada','Nirth','Nirthikko','Niyo','Njan','Odiko','Oh no','Oi','Onnukoodi','Onnum paryenda','Oo','Panni','Para','Pary','Pavappettavan','Peadi','Please','Plzz','Pm','Poda','Poli','Polikk','Pottea','Power','Re entry','Revange','Rip','Role','Rules','Sad','Sed','Sorry','SSLC','Sugam','Thayoli','Theapp','Thirnnallo','Thottu','Thug','Uff','Vanam','Vannu','Venda','Veno','Welcome','XXXTENTACION','Ha','Bomb','Bye','Cash','Chadi','Converting','COSMIC','CR7','Crime','ANU','Anuser','Arullea','Ara','Athan','Athin','Ayin','alive','Aliya','Aliyo','alone','Althaf','Ameer','ano','ara','Ardra','ayilla','ayn','aysheri','Ayyo','baby','Back','bad boy','Bad','bgm','Bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','Bot','broken','brokenlove','Bye','care','Chathi','chatho','Chathy','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cr7','Cristiano','Cry','Da','da','Dai','DD','die','Dora','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Fasil','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i am back','ijathi','jd','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kundan','Kunju','kunna','Kurup','Kutty','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oh no','Oh','ok bei','Ok bye','ok da','ok','oombi','oompi','over','Paat','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pinnallah','Place','Poda','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','Ramos','rascal','rashmika','rasool','return','Rose','sad','Sad','Sahva','saji','Sayip','scene','Sed aayi','Messi','messi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','song','sorry','Sry','Subscribe','Suhail','sulthan','Super','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Va','Vaa','vada','Vava','Veeran','venda','verithanam','Vidhi','Wait','waiting','welcome','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi','adima','Adipoli','breakup','Chunks','Clg','dance','Di','don','Ee','enjoy','Fen','Gd','Hacker','help','I love you','Kali','Kenzo','Kk gaming','KL LUTTAP 007','Kl luttapi 007','kozhi','lair','love','Men','Mm','myr','Myre','Nanbaa','nanban','Nirth','Njan vannu','Njan','No love','paatt','Penn','Pinnalla','poda','Pooda','prandh','putt','Rashmika','Rashu fans','Rashu','Ringtone','rip','Sarassu','Sarasu','Sed','Set aaka','Sfi','shibil','Single','sopnam','Tholvi','Uyr','Waiting','wcm','@917592997310','Araa','junaid','junu','morning','Junaid','Bajwa','funny','hi','Malik','Rizwan','Sad','Shabi','Shahzaib','Sho','Welcome','AS','KING AS','Poda bot','White ser','RDX','nadan pattukal','Bgm']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919605101516@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/6238560743.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '919605101516@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/6238560742.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '917736771516@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/6238560742.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['6238560742','a','Aa','Aah','Allah','Alone','Annan','abananam','adich','di','dj','don','entea','feel','find','food','friend','fuck','girls','git','h','id','insult','pass','pattula','phaa','sing','single','spirit','sorry','tagall','team','thallum','thayoli','thech','thepp','theri','thukum','try','tto','vatt','vava','vazha','vila','warn','who','work','xmedia','yo','yogiyada','pinnalla','pm','po','potta','power','remix','remove','reply','romam','sad','samshayam','sathyam','shama','man','manassilayo','mandan','me','mention','menu','moorkkan','namban','no reply','noob','oho','oii','owner','pannu','invite','joli','katha','keatittilla','king','koi','koodea','kooi','kunna','kyat','line','list','look','luv','chor','commands','invite','arthi','avan','bakhi','Avasram','Hai','Halo','Hlo','Ho','india','Happy','Hate','Hello','Hii','Ayye','ith','Ivan mathi','Ivan','Kalikkan nikkenda','Avan','Aysheri','Baby','Bgm','Brithday','BOT','Dey','Di','Dialogue','Edi','Enth','Entry','Evidea','Ezra','Fan','fight','Football','Game','Gd nyt','Good night','Good nyt','Kalipp','Kalliyannam','Koi','Kollam','Koriyer','Koyi','Kozhi','Ktm','Kundan','Kundi','Kunna','Lalitha','Left','Leo','Love u','Love','Main','Mark','Messi','Mid night','Modhalali','Mood','Moodeash','Mrng','Mukesh','Muthe','My god','Myr','Myre','Name','Nanba','Nee','Ni arada','Nirth','Nirthikko','Niyo','Njan','Odiko','Oh no','Oi','Onnukoodi','Onnum paryenda','Oo','Panni','Para','Para','Pary','Pavappettavan','Peadi','Please','Plzz','Pm','Poda','Poli','Polikk','Pottea','Power','Re entry','Revange','Rip','Role','Rules','Sad','Sed','Sorry','SSLC','Sugam','Thayoli','Theapp','Thirnnallo','Thottu','Thug','Uff','Vanam','Vannu','Venda','Veno','Welcome','XXXTENTACION','Ha','Bomb','Bye','Cash','Chadi','CR7','Crime','Arullea','Ara','Athan','Athin','Ayin','Akhil','alive','Aliya','Aliyo','alone','Alth','ano','ara','Ardra','ayilla','ayn','aysheri','Ayyo','baby','Back','bad boy','Bad','bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','Bot','broken','brokenlove','Bye','care','Chathi','chatho','Chathy','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cr7','Cristiano','Cry','Da','da','Dai','DD','die','Dora','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i am back','ijathi','jd','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kundan','Kunju','kunna','Kurup','Kutty','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymer','Nirthada','nirthada','Nirtheda','njan','Njn vera','njn','Njr','noob','Oh no','Oh','ok bei','Ok bye','ok da','ok','Ok','oombi','oompi','over','Paat','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Poda','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','Ramos','rascal','rashmika','rasool','return','Rose','sad','Sad','Sahva','saji','Sayip','scene','Sed aayi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','song','sorry','Sry','Subscribe','Suhail','sulthan','Super','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Va','Vaa','vada','Vava','Veeran','venda','verithanam','Vidhi','Wait','waiting','welcome','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi','adima','Adipoli','breakup','Chunks','Clg','dance','Di','don','Ee','enjoy','Fen','Gd','Hacker','help','I love you','Kali','kozhi','lair','love','Men','Mm','myr','Myre','Nanbaa','nanban','Njan vannu','Njan','No love','paatt','Penn','Pinnalla','poda','Pooda','prandh','putt','Rashmika','Rashu fans','Rashu','Ringtone','rip','Sarassu','Sarasu','Sed','Set aaka','Sfi','sopnam','Tholvi','Uyr','Waiting','wcm','Araa','morning','funny','Malik','Sad','Sho','Welcome','White','white','Aliza','aliza','Miss Aliza','Aliza bot','White ser','Poda bot','Bgm','nadan pattukal','Bgm']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '917994093863@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/COSMIC.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
    if (!!message.mention && message.mention[0] == '917736771516@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/COSMIC.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Ara','Da','hi','Sad','a','alive','ara','bgm','bro','da','fan','girls','gn','hacker','Hello','help','inna','I love you','Leo','mp4','Ni ara','nirth','number','oh','poova','sad','sed','set','song','thayoli','xxxtentacion','Msd','Vijay','Rashmika','Sry','Line','Aarulle','achodaa','ayin','Aysheri','Ayye','Ayyo','broken','bye','chattho','cute','Da','Eee','engane und','Entha','Enthada','Girls','Good morning','Good night','Hi','Hy','ithokke enth','ivan','Kurippe','Kurumb','Love','naanam','nadakkatte','Ok','paavam','Pattumo','Pm','poda','Pova','Save','setth','sho','Shoo','Smile','tag','Udayipp','umma','Vaa','Vannu','yo','ys','Bye','Bgm','Muthe','Police','Teach','Thech','Z','aayo','alla','anthas','aysheri','bie','bye','chathu','cheyalle','chunk','committed','mama','marichu','mention','mood','muthe','myre','njan','number','ok','oombi','ooo','pedicho','pidi','poweresh','sad','saved','sed','shaad','shut','teach','test','thech','think','thund','umma','uyir','vannu','vibe','z','dead','JulieMwol','Like','pever','sry','night','indo','uff','eh','poyi','scene','killadi','nee alle','sheri','vada','poocha','morning','pm','thund','remove','Sed','araa','madthu','Hlo','air','Bomb','Julie','myr','fan','charge','AS','White','white','Aliza','aliza','White ser']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}
var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
