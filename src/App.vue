<script setup lang="ts">
import Search from "./components/Search.vue";
import time from "lastUpdateTime";
</script>

<template>
  <main>
    <Search />
  </main>

  <footer>
    <div>
      数据来源：<a
        href="https://github.com/WeNeedHome/SummaryOfLoanSuspension/blob/main/data/generated/properties-flat.json"
        target="_blank"
        >WeNeedHome/SummaryOfLoanSuspension</a
      >
    </div>
    <div style="margin-top: 5px">
      上次同步时间 <a>{{ time }}</a>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
footer {
  margin-top: 60px;
}
</style>
