<script setup lang="ts">
import { getConf, socket, start, stop } from './v2ray'
import { onMounted, reactive, watchEffect } from 'vue'

const appSize = {
  w: '800px',
  h: '600px'
}

const conf = reactive({
  port: '7999',
  b64: ''
})

onMounted(async () => {
  const d: any = await getConf()
  conf.b64 = d.b64
})

watchEffect(() => {
  socket.url = `ws://127.0.0.1:${conf.port}`
})

function stopService() {
  stop()
}

function startService() {
  start(conf.b64)
}
</script>

<template>
  <TTheme class="app" w="min-content" m="auto">
    <TContainer title="V2fly UI">
      <div class="size">
        <div flex="~" justify="end" items="center">
          <span m="x-2">Port: </span>
          <TInput
            placeholder="port"
            type="number"
            v-model="conf.port"
            disabled
            m="x-2"
          />
        </div>
        <hr m="y-2" />
        <div flex="~ col">
          <TInput placeholder="VMess url" v-model="conf.b64" />
          <TButton m="t-2" @click="startService"> Restart </TButton>
          <TButton m="t-2" @click="stopService"> Stop </TButton>
        </div>
      </div>
    </TContainer>
  </TTheme>
</template>

<style>
html,
body {
  background: #f0f0f0;
}

.size {
  max-width: v-bind('appSize.w');
  max-height: v-bind('appSize.h');
}
</style>
