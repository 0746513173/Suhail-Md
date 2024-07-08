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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_03_40_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjgrcE45T3hYVmU0KzFrOCtTWFlJOGxqYjNLVUp4aFVHKzZvemhOR3pyOEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA3NDU3OTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOTc2MDhGODMwNkU4RTFCNEI1QjMwOUU0Qzc3REU5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MTAwNDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzVxTG1KR2xSY09KQmY0OXZwRTFRd1wiLFxuICBcInBob25lSWRcIjogXCI4MDgxODY5OS0zMWM5LTQ1MzItYmMyYy0xYTU1MjFmZTJjYzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTgzLFxuICAgICAgNjksXG4gICAgICAxNyxcbiAgICAgIDI0OSxcbiAgICAgIDUyLFxuICAgICAgMjI3LFxuICAgICAgMixcbiAgICAgIDQzLFxuICAgICAgMTE3LFxuICAgICAgMTM1LFxuICAgICAgMjQ5LFxuICAgICAgMTQ1LFxuICAgICAgMjQ3LFxuICAgICAgMTYwLFxuICAgICAgMTQ2LFxuICAgICAgNTIsXG4gICAgICAxODcsXG4gICAgICAyLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMzUsXG4gICAgICAxMzksXG4gICAgICA0NCxcbiAgICAgIDE1MSxcbiAgICAgIDE4MSxcbiAgICAgIDE5MCxcbiAgICAgIDE1NCxcbiAgICAgIDEwOSxcbiAgICAgIDE0MixcbiAgICAgIDE0LFxuICAgICAgNzksXG4gICAgICAxNjgsXG4gICAgICAyMjksXG4gICAgICAxMTQsXG4gICAgICA2OCxcbiAgICAgIDIxMyxcbiAgICAgIDI1MCxcbiAgICAgIDEyNCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWDFaVFJZU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3NDU3OTYwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDYyMTgwNDMxOTEzMDc6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkx3cnBFSEVMaS9yYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZS8zL3d2bGpzVFloME9kS1I2MWdMYmVzUHVSeDBQVklOSDB3aU1nNzJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkMrZktzeWIxUGsxN3VZZG1xSTh3Um9YZnV3UlU0WCtzWncxWkY4bVo2T2RGckV6TllDMjB1Y3hJQUZaaHRtUmRRSGRKRGVTMHQ5SUxpbjFrb1pVMkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklhYi83V0liTGhFTDdBZjNoVXNtUmE3MlNQRk5qZGZEYmg4NmtmcWpnYnNTWGoxcEMzMHRKdlRDOFdpdEtJcWJDWTRRUHNuM3orb1FUL3liUWFJK2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNzQ1Nzk2MDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDEwMDQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWl0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCQkNGOXBuSFNSdkp1cXVNZnNNVEt1bkJRUktqV0lLejVMdTRJNXhCSDYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTU0Njc4NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQwNjE1MDgzMFwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
