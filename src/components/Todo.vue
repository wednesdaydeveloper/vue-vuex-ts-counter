<template>
    <div>
        <h1>This is an Todo page</h1>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <label v-bind:class="{ done: item.checked }">
                    <input type="checkbox" v-bind:value="item.checked" @change="toggle(item)"> {{ item.content }}
                </label>
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import * as todo from '../store/modules/todo';

@Component<Todo>({
    computed: {
        ...todo.mapGetters(['items']),
    },
    methods: {
        ...todo.mapMutations(['add', 'toggle']),
    },
    props: {
        msg: String,
    },
})
export default class Todo extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.done { text-decoration: line-through; }
</style>