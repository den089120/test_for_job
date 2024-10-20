<script setup lang="ts">

defineProps<{ text: string }>()
</script>

<template>
  <a class="toolbar_link" href="#">
    {{ text }}
  </a>
</template>

<style scoped>
.toolbar_link {
  font-size: 13px;
  font-weight: 400;
  color: rgba(113, 123, 158, 1);
  border-bottom: 1px dotted rgba(113, 123, 158, 1)
;
}
</style>