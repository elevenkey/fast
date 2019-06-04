<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view></router-view>
    <!-- <md-action-bar :actions="data"></md-action-bar> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { ActionBar, Toast } from 'mand-mobile'
import axios from 'axios'

interface LabelledValue {
  text: string;
  onClick: any;
}

interface someFunction {
  (id: number, fun: any): string
}

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

@Component({
  components: {
    HelloWorld,
    [ActionBar.name]: ActionBar
  }
})
export default class App extends Vue {
  msg: string = 'hello world!'
  data: LabelledValue[] = [
    {
      text: '操作一',
      onClick: (): void => { Toast.succeed('Click') }
    },
    {
      text: '操作二',
      onClick: (): void => { Toast.succeed('Click2') }
    }
  ]

  constructor () {
    super()
    console.log('constructor App!!')
  }
  created (): void {
  }
}
</script>
<style lang="scss">
html, body{
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.page{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
