<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { fetchRepoData } from '../api/index'

interface IIssue {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const issueList = ref<null | IIssue[]>(null);

onMounted(async () => {
  issueList.value = await fetchRepoData();
})
</script>

<template>
  <section class='listContainer'>
    <h1>Issues</h1>
    <ul>
      <li v-for='issue in issueList' :key='issue.id'>
        <p>{{ issue.title }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang='scss'>
.listContainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 80px 20px;
}

h1 {
  line-height: 1;
}

ul {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}


li > p {
  margin: 0;   
  color: rgba(255,255,255,1);
}
</style>