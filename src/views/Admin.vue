<template>
  <h2>通过 Vuex 实现状态管理</h2>
  <h3>state from vuex： {{ count }}</h3>
  <br />
  <a-button type="primary" @click="add">add</a-button>
</template>

<script>
import { computed, getCurrentInstance } from "vue";
export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const count = computed(() => ctx.$store.state.count);
    const add = () => {
      ctx.$store.commit("add");
    };
    return {
      count,
      add,
    };
  },
};
</script>