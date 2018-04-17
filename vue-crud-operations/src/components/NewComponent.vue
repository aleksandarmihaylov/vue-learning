<template>
<div>
  <h1>{{message}}</h1>
  <NewComponentTwo :componentTwo = "'Hello from component two'"></NewComponentTwo>
</div>
</template>

<script>
export default {
  props: [
    "message"
  ]
}
</script>

<style>

</style>
