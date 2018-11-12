<template>
  <div class="home">
    <Counter msg="Welcome to Vue Vuex Typescript Counter"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue'; // @ is an alias to /src

@Component({
  components: {
    Counter,
  },
})
export default class Home extends Vue {}
</script>
