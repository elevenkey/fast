<template>
  <div class="page home">
    <img src="@/assets/heart.gif" alt="快姻缘">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="btn">
      <md-button type="default" @click="go('info')">填写/修改信息</md-button>
      <!-- <md-button type="default" inactive>Default Inactive</md-button> -->
      <md-button type="warning" @click="go('show')">遇见有缘人</md-button>
      <!-- <md-button type="primary" inactive>推荐给朋友</md-button> -->
      <!-- <md-button type="warning">Warning</md-button>
      <md-button type="warning" inactive>Warning Inactive</md-button> -->
      <!-- <md-button type="disabled">关于我们</md-button> -->
    </div>
    <div class="about">
      <div class="al" @click="go('about')">关于我们</div>
      <div class="ar" @click="go('share')">推荐给朋友</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Button } from 'mand-mobile'
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
    [Button.name]: Button
    // HelloWorld,
    // [ActionBar.name]: ActionBar
  }
})
export default class Home extends Vue {
  msg: string = 'hello world!'
  // data: LabelledValue[] = [
  //   {
  //     text: '操作一',
  //     onClick: (): void => { }
  //   },
  //   {
  //     text: '操作二',
  //     onClick: (): void => { }
  //   }
  // ]
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

  go (url: string) : void {
    this.$router.push(url)
  }
}
</script>

<style lang="scss" scoped>
img{
  max-width: 100%;
}
.btn{
  padding: 10px;
  button {
    margin-bottom: 10px;
  }
}
.home{
  background: #fde5fd;
}
.about{
  display: flex;
  margin: 15px 30px;
  div{
    flex: 1;
    font-size: 14px;
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: right;
    }
  }
}
</style>
