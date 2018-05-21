<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <ul>
      <router-link to="/demo/aaa">aaa</router-link>
      <router-link to="/demo/bbb">bbb</router-link>
      <router-link to="/demo/ccc">ccc</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: `Demo`,
  data () {
    return {
      msg: 'hi\' demo'
    }
  },
  created () {
    this.msg = 'kkk'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
