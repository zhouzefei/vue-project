<template>
  <sticky>
    <tab :line-width="2" active-color="#6C94F7">
      <tab-item :selected="current === item" v-for="item in list2" @click="current = item">{{item}}</tab-item>
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
  },
  data () {
    return {
      current: '待分配',
      list2: ['待分配', '部分分配', '完成分配', '作废']
    }
  }
}
</script>
