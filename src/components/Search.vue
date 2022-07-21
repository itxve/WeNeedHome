<script setup lang="ts">
import { computed, ref } from "vue";
import { FlatData } from "../data";
import Item from "./Item.vue";
const searchText = ref("");

const flatAddress = computed(() => {
  if (!searchText.value) {
    return FlatData.slice(0, 100);
  }
  return FlatData.filter(({ city, province, name }) => {
    return (
      city.includes(searchText.value) ||
      province.includes(searchText.value) ||
      name.includes(searchText.value)
    );
  });
});
</script>

<template>
  <div class="content">
    <h2>数据搜索</h2>
    <div class="search">
      <b>总计: {{ FlatData.length }}</b>
      <input v-model="searchText" placeholder="输入省/市/楼盘进行过滤" />
      <b>结果：{{ flatAddress.length }}</b>
    </div>
    <div class="item-list">
      <Item v-for="province in flatAddress" v-bind="province" />
      <span v-if="!flatAddress.length">暂无数据</span>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  align-items: center;
  justify-content: flex-start;
}
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search input {
  height: 30px;
  width: 80%;
  margin: 5px;
}

.item-list {
  width: 100%;
  height: 70vh;
  overflow-y: auto;
  border: 1px solid rgb(200, 191, 190);
  box-shadow: 2px 2px 8px 3px #dcd1d1;
  padding: 10px 0px;
}
.item-list > div {
  margin: 3px;
}

@media screen and (max-width: 767px) {
  .content {
    width: 90vw;
  }
}
@media screen and (min-width: 767px) {
  .content {
    width: 75vw;
  }
  .item-list {
    height: 60vh;
  }
}
</style>
