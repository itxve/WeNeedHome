<script setup lang="ts">
import { computed, ref } from "vue";
import viteIcon from "../../public/vite.svg";
import { FlatData } from "../data";
import Item from "./Item.vue";
const searchText = ref("");

const flatAddress = computed(() => {
  if (!searchText.value) {
    return FlatData;
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
    <div class="icon">
      <img :src="viteIcon" height="22" width="22" />
      <h2>数据搜索</h2>
    </div>

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
  border: 1px solid #000;
  border-radius: 4px;
}

.item-list {
  width: 100%;
  height: 70vh;
  overflow-y: auto;
  border: 1px solid #000;
  box-shadow: 2px 2px 5px 1px #dcd1d1;
  padding: 10px 0px;
  border-radius: 4px;
}
.item-list > div {
  margin: 3px;
}
.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon > img {
  margin-right: 10px;
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
