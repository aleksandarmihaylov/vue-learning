<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <div>
            <input v-on:keyup.13="addFriend()"/>
    <button v-on:click="addFriend()">save</button>
  <li v-for="friend, i in friends">
  <div v-if="editFriend === friend.id">
    <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
    <button v-on:click="updateFriend(friend)">save</button>
  </div>
  <div v-else>
    <button v-on:click="editFriend = friend.id">edit</button>
    <button v-on:click="deleteFriend(friend.id, i)">x</button>
    {{friend.name}}
  </div>
</li>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editFriend: null,
      friends: [],
    }
  },
  methods: {
    addFriend(){
      fetch("http://rest.learncode.academy/api/vue-crud/friends/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
          //something after the friend is created
      })
    },
    deleteFriend(id, i) {
      fetch("http://rest.learncode.academy/api/vue-crud/friends/" + id, {
        method: "DELETE"
      })
      .then(() => {
        this.friends.splice(i, 1);
      })
    },
    updateFriend(friend) {
      fetch("http://rest.learncode.academy/api/vue-crud/friends/" + friend.id, {
        body: JSON.stringify(friend),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        this.editFriend = null;
      })
    },
  },
  mounted(){
    fetch("http://rest.learncode.academy/api/vue-crud/friends")
      .then(response => response.json())
      .then((data) => {
        this.friends = data;
      })
  },
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
