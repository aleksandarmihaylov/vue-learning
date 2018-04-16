<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <input v-on:keyup.13="addFriend()" v-model="name"/>
      <button v-on:click="addFriend()">save</button>
      <li :key="i" v-for="(friend, i) in friends">
      {{friend.name}}
      <button v-on:click="deleteFriend(i)">x</button>
</li>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App',
      editFriend: null,
      name: "",
      friends: [],
    }
  },
  methods: {
    addFriend(){
      this.friends.push({name:this.name});
      this.name="";
    },
    deleteFriend(i) {
        this.friends.splice(i, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
