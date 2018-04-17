<template>
<div>
  <p>Hello from component {{componentTwo}}</p>
  <h2>{{componentTwoData}}</h2>
</div>
</template>


<script>
export default {
  props: {
    componentTwo: {
        type:String,
        required: true,
    },
  },
  data() {
    return{
      componentTwoData: "This is component two data"
    }
  }
}
</script>

<style>

</style>
