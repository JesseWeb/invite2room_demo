import { Wechaty } from "wechaty"

import { PUPPET_PAD_PLUS_TOKEN } from "./config"

import {invite2room} from './'
const bot = new Wechaty({
   name: "wechaty-room-manager-001",
   puppet: 'wechaty-puppet-padplus',
   puppetOptions: {
      token: PUPPET_PAD_PLUS_TOKEN
   }
})
bot.use(invite2room({
   rooms:[
      {
         id:"23414576835@chatroom",
         knockKnock:"hi"
      }
   ]
}))

















bot.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
   .on('login', user => console.log(`User ${user} logined`))
   .on('message', message => console.log(`Message: ${message}`))
   .start()
