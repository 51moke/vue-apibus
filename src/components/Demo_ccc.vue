<template>
  <div class="demo-ccc">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DemoCcc',
  data () {
    return {
      msg: '子级ccc'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
