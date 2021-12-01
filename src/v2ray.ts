import { Socket, ProtocolClient } from '@0x-jerry/lib'

export const socket = new Socket('ws://127.0.0.1:7999')

const client = new ProtocolClient()

client.setSender((data) => {
  socket.send(data)
})

socket.on('message', (data: any) => {
  client.resolve(data)
})

interface ProtocolData<Data = any, MsgType = string> {
  id: string
  type: MsgType
  data?: Data
}

function createProtocolMessage(type: string, data?: any): ProtocolData {
  return {
    id: Math.random().toString(16).substr(2),
    type,
    data,
  }
}

export function start(b64: string) {
  socket.send(createProtocolMessage('start-v2fly', { b64 }))
}

export function stop() {
  socket.send(createProtocolMessage('stop-v2fly'))
}

export function getConf() {
  return new Promise((resolve) => {
    const msg = createProtocolMessage('get-v2fly-conf')

    socket.once(msg.id as any, (data: any) => {
      resolve(data)
    })

    socket.send(msg)
  })
}
