<template>
  <a-button @click="fetch">快快接口测试</a-button>
  <a-list bordered :data-source="testPages">
    <template #renderItem="{ item }">
      <a-list-item
        ><a @click.prevent="navigater(item.path)">{{
          item.name
        }}</a></a-list-item
      >
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
import { useRouter } from "vue-router";
const fetch = () => {
  const param = {
    type: "get",
    url: "client:/job/type/grade",
    param: {},
    no: false,
    inter: 77,
    _event: "V4VCTV1RMY",
  };
  parent.send(param, function (err, res) {
    console.log(
      `%c 🐵 %c 接口返参 %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent",
      res
    );
  });
};
const router = useRouter();

const testPages = [
  {
    name: "Input",
    path: "/InputTest",
  },
  {
    name: "Radio",
    path: "/RadioTest",
  },
  {
    name: "Button",
    path: "/ButtonTest",
  },
  {
    name: "SearchFilter",
    path: "/SearchFilterTest",
  },
  {
    name: "LinkTable",
    path: "/LinkTableTest",
  },
];

const navigater = (path) => {
  router.push(path);
};
</script>
