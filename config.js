const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = true;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["2347019733982"];
global.ownertag = [""]; 
global.OwnerName =  "ダーク";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"AGguEnYP4mFYAddG/I53oiq+Agzxx6PijdEE6rCXQ3E="},"public":{"type":"Buffer","data":"rmojqJnYDTd3jQNMvBkcTPE4csB3MnN6PLKCj1fizks="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YCOaklGo/mbD9Pe/3ex426hCL3v35xADtz5N3ctTtkI="},"public":{"type":"Buffer","data":"ln94zRXCcaKTzyHzdKNBUlarvFRhxD1QBQqSEsA2VwQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mIwfDzHO3phZu79hgvOLZ7O6cP8mdSLlYER5N1EdWFU="},"public":{"type":"Buffer","data":"zweIK5H0iscsqeYW+ktlwFnJWxTnSRNMG2JZWunmJlM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QL4z7JQ1s5aen2MDd8m+luMaTtrDX+v1jgopBf+Jrls="},"public":{"type":"Buffer","data":"e8RbYQRdLSWO9eaCFAhVs2W2PyriBf7TVGLb1F2FPH8="}},"signature":{"type":"Buffer","data":"jKkJYY1377NxsZfRqCOyH1QXegBKzvioWvKA0MzBe46x9zse0bmlpgooFqvFMyCwQ4rwY0gzvPn0KhOf90cODQ=="},"keyId":1},"registrationId":81,"advSecretKey":"/ESOnXV+0mrcP7bsfloJIcxOG7FmhmELCcUeozLyT0Q=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"4XNGvdt8SKaYU5iLIX-_QA","phoneId":"aa46ea29-a29e-470c-ad10-685cc8c1f14f","identityId":{"type":"Buffer","data":"lcE5wgZKQyI1AOUOgqe8CU+Cjzc="},"registered":true,"backupToken":{"type":"Buffer","data":"dSdnTAwWXnnKvM6b4h/SoWSESQs="},"registration":{},"pairingCode":"FGH8GWJW","me":{"id":"2347019733982:14@s.whatsapp.net","name":"ダーク"},"account":{"details":"CKDExcQEEPKesLUGGAYgACgA","accountSignatureKey":"aRPeHQRm7VL8AWvAUpVlSN3WxVvZL0fR0SB140ziKyE=","accountSignature":"w5PBe1CDU/MJIMuEKCpx9nmxJh1zeRv+VYAE3H9pmyUBpsLLYFCaIROk4t7HNPCjONJqKkOvoZggbExJOFuOCw==","deviceSignature":"Q8YXHllcxsGPMnRsiGN1r3MKMun1VvdRxOfoHxE6TmxL+Nfa4Fb9OcXohi2uXCSqQpx+Wn4yvoYjIZ9KvXozCA=="},"signalIdentities":[{"identifier":{"name":"2347019733982:14@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWkT3h0EZu1S/AFrwFKVZUjd1sVb2S9H0dEgdeNM4ish"}}],"platform":"smba","lastAccountSyncTimestamp":1722552194,"myAppStateKeyId":"AAAAAAR0"}`
global.prefa = ["/"," ","."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


// OK
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
