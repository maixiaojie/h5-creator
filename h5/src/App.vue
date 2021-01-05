<template>
  <Header></Header>
  <Components></Components>
  <div class="container">
    <Container></Container>
  </div>
  <Attrs></Attrs>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Components from "./components/components.vue";
import Container from "./components/container.vue";
import Attrs from "./components/attrs.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Header,
    Components,
    Container,
    Attrs,
  },
});
</script>

<style>
html,
body {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  background: rgb(244 244 244);
  width: 100%;
}
.container {
  display: flex;
  width: calc(100% - 520px);
  box-sizing: border-box;
  padding: 50px 0;
  height: calc(100vh - 76px);
  min-height: calc(100vh - 76px);
  background: #f4f4f4;
  margin: 76px auto 0 120px;
  overflow: scroll;
}
</style>
