<template>
  <div class="demo-bbb">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DemoBbb',
  data () {
    return {
      msg: '子级bbbb'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
