import { Socket, ProtocolClient } from '@0x-jerry/lib'

export const socket = new Socket('ws://127.0.0.1:7999')

const client = new ProtocolClient()

client.setSender((data) => socket.send(data))

socket.on('message', (data) => client.resolve(data))

export function start(b64: string) {
  client.send('start-v2fly', { b64 })
}

export function stop() {
  client.send('start-v2fly')
}

export function getConf() {
  return client.send('get-v2fly-conf')
}
