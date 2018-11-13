import { createNamespacedHelpers } from 'vuex';
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper';

export interface State {
    count: number;
}

export interface Getters {
    // getterName: returnType
    count: number;
}

export interface Mutations {
    // mutationName: mutationPayloadType
    inc: {
        amount: number,
    };
    dec: {
        amount: number,
    };
}

export interface Actions {
    // actionName: actionPayloadType
    incAsync: {
        amount: number,
    };
    decAsync: {
        amount: number,
    };
}

const getters: DefineGetters<Getters, State> = {
    count: (state) => state.count,
};

const mutations: DefineMutations<Mutations, State> = {
    inc(state, payload) {
        state.count = state.count + payload.amount;
    },
    dec(state, payload) {
        state.count = state.count - payload.amount;
    },
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    incAsync({ commit }, payload) {
        return wait().then(() => commit('inc', {amount: payload.amount}));
    },

    decAsync({ commit }, payload) {
        return wait().then(() => commit('dec', {amount: payload.amount}));
    },
};

export const {
    mapGetters,
    mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('counter');

export const counter = {
    namespaced: true,
    state: { count: 0 },
    getters,
    mutations,
    actions,
};
