const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_23_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBPVDZCZGZHZ1N1RWJmUEV5Y0hxa1d6RmFqUW9hOTdTYnB3QlpJTVJhRlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlDRXVXZ1dZU2stQmM3QjRaRkRxendcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDc4NjUwZmQtNDFmYy00MGI5LTk3ZTItMmE2ZjFlN2Q0ZGMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTAxLFxuICAgICAgNzgsXG4gICAgICAyNDgsXG4gICAgICAxODksXG4gICAgICAxMDksXG4gICAgICAxMDUsXG4gICAgICA0MyxcbiAgICAgIDU2LFxuICAgICAgMTUwLFxuICAgICAgMjQ3LFxuICAgICAgMTk3LFxuICAgICAgMTc5LFxuICAgICAgMTMxLFxuICAgICAgNTksXG4gICAgICAyNDUsXG4gICAgICAxNjMsXG4gICAgICAxNyxcbiAgICAgIDIzMyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMjA4LFxuICAgICAgMTIzLFxuICAgICAgMTk0LFxuICAgICAgMjI3LFxuICAgICAgMjM4LFxuICAgICAgNTYsXG4gICAgICAxMCxcbiAgICAgIDE2LFxuICAgICAgMzYsXG4gICAgICAxNDQsXG4gICAgICAxNDgsXG4gICAgICA4NSxcbiAgICAgIDEyMCxcbiAgICAgIDYyLFxuICAgICAgMTU4LFxuICAgICAgMjI0LFxuICAgICAgNjQsXG4gICAgICAyNDUsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVpOMzNaMUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTUxMTE2Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTM3OTg3NjU4NTY1MTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zR3lMa0JFS3l2bzdzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGU3R3l6QnoxU1hhamxsSHlRYmZDK0RHRUFiczUycHFReGlBbWMxRklXZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiRzFlL0hoZldzOVJ1NHVOZkZVY1ZYQWFVMnN1TDVreXM5WU5OelMvazBqNXdyZDM0S0JsNGcwdGV3dWJYN1o1UTJBTlFhRjlCNVFXendxNnpFaEhBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKQzBRQUR5N1NzVW1JaTNBVUVEQ1lSNVZHVkFnZ1VnSmN0eHJ3eC9xSllPdXhzUTRzL3VzclU4b0VRVGdwU1BuVEhqR1JCK2ExSE9aR1VVaE1ZY1ZpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU1MTExNjM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkyNDIwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURLR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREtHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzBya21ZOWVJd0hRMk9SdVBkaUgxSkJXQXVWbUkydWlDWHh6NXQzb3FmST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODkxNjE4MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDkyNDA4NzUwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
