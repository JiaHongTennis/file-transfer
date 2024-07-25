<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  render (h) {
    console.log(h('div', {}, ['鸡你太美']))
    return {
      __v_isVNode: true,
      tag: "div",
      data: {
        style: "color: red;"
      },
      shapeFlag: 9,
      key: null,
      children: ["鸡你太美"]
    }
  }
}
</script>

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
