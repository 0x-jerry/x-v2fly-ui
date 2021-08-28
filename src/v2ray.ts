import { Socket, createProtocolMessage, Protocol } from '@0x-jerry/lib'

export const socket = new Socket('ws://127.0.0.1:7999')

socket.on('message', (protocol: any) => {
  socket.emit(protocol.id, protocol)
})

export function start(b64: string) {
  socket.send(createProtocolMessage('start-v2fly', b64))
}

export function stop() {
  socket.send(createProtocolMessage('stop-v2fly', {}))
}

export function getConf() {
  return new Promise((resolve) => {
    const msg = createProtocolMessage('get-v2fly-conf', {})

    socket.once(msg.id as any, (protocol: any) => {
      resolve(protocol.data)
    })

    socket.send(msg)
  })
}
