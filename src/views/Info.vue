<template>
  <div class="page">
    <md-check-group>
      <md-check-box name="self" v-model="insurants">自己</md-check-box>
      <md-check-box name="parent" v-model="insurants">父/母</md-check-box>
      <md-check-box name="child" v-model="insurants">子女</md-check-box>
    </md-check-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CheckBox, CheckGroup } from 'mand-mobile'

@Component({
  components: {
    [CheckBox.name]: CheckBox,
    [CheckGroup.name]: CheckGroup
  }
})
export default class Home extends Vue {
  msg: string = 'hello world!'
  insurants: string = 'self'
  constructor () {
    super()
    console.log('constructor')
  }

  created (): void {
    console.log('hhhhhhh')
  }

  mounted (): void {
    // console.log('mmmmmmmm')
  }

  go (url: string) : void {
    this.$router.push(url)
  }
}
</script>
