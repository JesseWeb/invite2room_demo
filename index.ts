import { WechatyPlugin, Wechaty, Message } from 'wechaty'
export interface I_Options {
   rooms?: I_Room[]
}
export interface I_Room {
   id: string,
   knockKnock: string
}


export function invite2room(options?: I_Options): WechatyPlugin {
   return function (bot: Wechaty) {
      // 1、监听message事件
      bot.on("message", (message) => {
         // 2、判断是否为用户发送和消息类型

         let type = message.type()
         let isRoom = message.room()
         let contact = message.from()
         if (type !== Message.Type.Text) {
            return
         }
         if (!isRoom) {
            // 3、判断room配置和用户发送
            if (options.rooms) {
               options.rooms.forEach(room => {
                  if (room.knockKnock == message.text()) {
                     // 4、load群
                     let _room = bot.Room.load(room.id)
                     // 5、邀请用户加入对应群
                     _room.add(contact)
                  }
               });
            }
         }
      })
   }
}


























// bot.on('message', (message) => {
      //    let isRoom = message.room()
      //    if (isRoom) {
      //       log.info(message.room().id)
      //    }
      //    let text = message.text()
      //    let fromContact = message.from()
      //    //判断是否为用户发送
      //    if (!isRoom) {
      //       options.rooms.forEach(async (room) => {
      //          if (room.knockKnock === text) {
      //             //invite user 2 room
      //             let inviteRoom = bot.Room.load(room.id)
      //             inviteRoom.add(fromContact)
      //             inviteRoom.say`${fromContact} 欢迎入群！`
      //          }
      //       });
      //    }
      // })