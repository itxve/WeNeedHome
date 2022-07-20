<template>
  <div>
    <a @click="viewImage()" :class="{ unlink: !viewUrl }">
      <b> {{ props.province }}/{{ props.city }}/{{ props.name }}</b>
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineProps } from "vue";
import { ImageDir } from "../const";
</script>

<script setup lang="ts">
export type IProps = {
  name: String;
  uri: String;
  province: String;
  city: String;
};
const props = defineProps<IProps>();
const viewUrl = computed(() => {
  if (props.uri) {
    return ImageDir + props.uri;
  }
});

const viewImage = () => {
  if (viewUrl.value) {
    window.open(viewUrl.value, "_blank");
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.unlink {
  cursor: unset;
  color: black;
}
</style>
