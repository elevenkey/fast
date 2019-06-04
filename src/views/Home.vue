<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
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

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

@Component({
  components: {
    HelloWorld,
    [ActionBar.name]: ActionBar
  }
})
export default class Home extends Vue {
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
  getCounter (): Counter {
    let counter = <Counter> function (start: number) {
      console.log(start)
    }
    counter.interval = 111
    counter.reset = function () {
      console.log('run counter reset')
    }
    return counter
  }
  constructor () {
    super()
    console.log(Direction[1])
    console.log('constructor!!')
  }
  created (): void {
    console.log('hhhhhhh')
    console.log(this.data[0].text = 'hello111')
    console.log(this.dosomething(1, (res, d) => {
      return 'ok'
    }))
    // axios.get('http://www.baidu.com').then(res => {
    //   console.log(res)
    // })

    let c = this.getCounter()
    c(10)
    c.reset()
    c.interval = 5.0
  }

  mounted (): void {
    // console.log('mmmmmmmm')
  }

  dosomething (id: number, callback: someFunction): boolean {
    return true
  }
}
</script>
