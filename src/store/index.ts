import Vue from 'vue';
import Vuex from 'vuex';
import {counter} from '@/store/modules/counter';
import {todo} from '@/store/modules/todo';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
         counter,
         todo,
    },
    strict: debug,
});
