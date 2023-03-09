<template>
  <a-list bordered :data-source="testPages">
    <template #renderItem="{ item }">
      <a-list-item><a @click.prevent="navigater(item.path)">{{ item.name }}</a></a-list-item>
    </template>
    <template #header>
      <div>组件页面</div>
    </template>
  </a-list>
  <!-- <div>
    <div v-for="page in testPages" :key="page.path" @click="navigater(page.path)">{{ page.name }}</div>
  </div> -->
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const testPages = [
    {
      name: 'Input',
      path: '/InputTest'
    },
    {
      name: 'Radio',
      path: '/RadioTest'
    },
    {
      name: 'Button',
      path: '/ButtonTest'
    },
    {
      name: 'SearchFilter',
      path: '/SearchFilterTest'
    },
  ]

  const navigater = (path) => {
    router.push(path)
  }
</script>