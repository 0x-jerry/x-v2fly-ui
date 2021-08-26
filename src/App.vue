<script setup lang="ts">
import { reactive } from 'vue'

const appSize = {
  w: '800px',
  h: '600px',
}

const conf = reactive({
  port: 7999,
  b64: '',
})

function connectToWebsocket() {
  console.log('hello')
}

function stopService() {
  //
}

function startService() {
  //
}
</script>

<template>
  <TTheme class="app" w="min-content" m="auto">
    <TContainer title="V2fly UI">
      <div class="size">
        <div flex="~" justify="end" items="center">
          <span m="x-2">Port: </span>
          <TInput placeholder="port" type="number" v-model="conf.port" m="x-2" />
          <TButton @click="connectToWebsocket"> Connect </TButton>
        </div>
        <hr m="y-2" />
        <div flex="~ col">
          <TInput placeholder="VMess url" />
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
