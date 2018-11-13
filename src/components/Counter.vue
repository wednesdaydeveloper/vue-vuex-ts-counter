<template>
    <div>
        <div class='msg'>{{ msg }}</div>
        <button class='inc' @click="incAsync({amount: 1})">+</button>
        <button class='dec' @click="decAsync({amount: 1})">-</button>
        <div class='count'>Count: {{ count }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import * as counter from '@/store/modules/counter';

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
