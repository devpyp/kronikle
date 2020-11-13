<template>
  <div>
    <h1 @click="fetchHistory">Hello</h1>
    <ul v-for="item in historyItems" :key=item.id>
      <li>Hello {{item.id}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "History",
  props: {
    historyItems: Array
  },
  methods: {
    fetchHistory: function() {
      let that = this
        /* eslint-disable no-undef */
    chrome.history.search({text: '', maxResults: 10}, function(data) {
      that.historyItems = data;
    });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
