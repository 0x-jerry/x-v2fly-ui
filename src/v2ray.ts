import { Socket, ProtocolClient } from '@0x-jerry/lib'

export const socket = new Socket('ws://127.0.0.1:7999')

interface ProtocolEvent {
  'start-v2fly'(opt: { b64: string }): void
  'stop-v2fly'(): void
  'get-v2fly-conf'(): { b64: string }
}

const client = new ProtocolClient<ProtocolEvent>()

client.setSender((data) => socket.send(data))

socket.on('message', (data: any) => client.resolve(data))

export function start(b64: string) {
  client.send('start-v2fly', { b64 })
}

export function stop() {
  client.send('stop-v2fly')
}

export function getConf() {
  return client.send('get-v2fly-conf')
}
