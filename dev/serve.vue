<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { BarkSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  BarkSample,
  // }
});
</script>

<template>
  <div id="app">
    <bark-sample />
  </div>
</template>
