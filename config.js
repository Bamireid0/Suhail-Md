const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "@Bamireid" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347015983330";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347015983330";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_14_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN3BqRnhFTnNaWlZLQTZURGRscFg4aE5zMlNtSzlTMmNXaklraFJvUEJIRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZEliOGtscUtTN2FlWG5vVzJfMHV2QVwiLFxuICBcInBob25lSWRcIjogXCJlNzNjZTVkYy04ZjU4LTRlZGYtYWI0Ny01OThhNmZlN2JmZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA3NCxcbiAgICAgIDI1MCxcbiAgICAgIDIyLFxuICAgICAgMjE1LFxuICAgICAgMjMzLFxuICAgICAgOCxcbiAgICAgIDk5LFxuICAgICAgMjUwLFxuICAgICAgNTIsXG4gICAgICAxMjYsXG4gICAgICAxNTMsXG4gICAgICA5OCxcbiAgICAgIDc3LFxuICAgICAgODMsXG4gICAgICAyMTUsXG4gICAgICAxNzgsXG4gICAgICAxNTYsXG4gICAgICAyMDYsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTE5LFxuICAgICAgNDEsXG4gICAgICAyNDMsXG4gICAgICAxMjMsXG4gICAgICAxMTIsXG4gICAgICA2NyxcbiAgICAgIDE4NyxcbiAgICAgIDE0MSxcbiAgICAgIDI0NSxcbiAgICAgIDIyMyxcbiAgICAgIDExMSxcbiAgICAgIDc4LFxuICAgICAgMjA1LFxuICAgICAgMTMwLFxuICAgICAgMjUsXG4gICAgICA5MCxcbiAgICAgIDEzMCxcbiAgICAgIDksXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMxTk1RRUI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE1OTgzMzMwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTk2NjE2MzQzOTIxNjA6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFNCc3ZRQkVNVy8zN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3emhmRFllNGlPWm1ER3BwNVV5THlWcGlvSi9DK0hpeWYvY0JHVG13TUI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNmbmpyck5hcndnOExvTUpOSzVKcFUyRjZDa1FXbW1GaERZV0ZSS1lmUUpPeFBWcm0ybTAwWlUyR1F6YURXeDdCeGNXUkJ1TjQyQk9YemRzVXNzcEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtzUmVJRHlQTk8zU2t6RURnOFk1VU1xTC9kcG1SbHRydThLUDNMeHI3WWV1VmYra1RGTTBiTzBEem5ZK3pxT0p4c0g3ejFwODF2ZXhVOGplZmxzdml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTU5ODMzMzA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIyOTI1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlTTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVNNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaklBejFNMlJVV2tNLzN6cmpOTnJQQkxrZGtuQ3BSZmFnWTdNZGFMcERKTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTI1MjQ1MzAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "@Bamireid" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Bamireid",
  packname: process.env.PACK_NAME || "sticker by.",
  botname : process.env.BOT_NAME  || "Bamireid",
  ownername:process.env.OWNER_NAME|| "Bamireid",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
