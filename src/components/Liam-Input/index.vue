<template>
  <div>
    <a-input v-bind="$attrs" type="text" style="width: 100px" />

    <MyButton>
      <template v-for="(slot, index) in Object.keys($slots)" v-slot:[slot]="scope">
        <slot :key="index" :name="slot" v-bind="scope"></slot>
      </template>
    </MyButton>
  </div>
</template>

<script>
  import MyButton from '@/components/Liam-Button/index.vue'
  export default {
    // inheritAttrs true-自动设置attrs到最外层标签上 false-相反
    inheritAttrs: false,
    components: { MyButton },
    setup(props, { slots }) {
      console.log(slots)
    }
  }
</script>