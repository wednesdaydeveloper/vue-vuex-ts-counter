import Vue from 'vue';
import Vuex from 'vuex';
import {counter} from './modules/counter';
import {todo} from './modules/todo';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
         counter,
         todo,
    },
    strict: debug,
});
