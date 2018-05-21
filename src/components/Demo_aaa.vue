<template>
  <div class="demo-aaa">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DemoAaa',
  data () {
    return {
      msg: '子级aaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
