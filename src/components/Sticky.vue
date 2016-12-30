<template>
  <sticky>
      <tab :line-width=1>
        <tab-item selected>正在正映</tab-item>
        <tab-item>即将上映</tab-item>
      </tab>
  </sticky>
</template>

<script>
  import { Tab, TabItem, Sticky } from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky
    }
  }
</script>
