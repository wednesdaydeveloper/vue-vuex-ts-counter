<template>
    <div>
        <div>{{ msg }}</div>
        <button @click="incAsync({amount: 1, delay: 1000})">+</button>
        <button @click="decAsync({amount: 1, delay: 2000})">-</button>
        <div>Count: {{ count }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import * as counter from '../store/modules/counter';

@Component<Counter>({
    computed: {
        ...counter.mapGetters(['count']),
    },
    methods: {
        ...counter.mapActions(['incAsync', 'decAsync']),
    },
    props: {
        msg: String,
    },
})
export default class Counter extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
