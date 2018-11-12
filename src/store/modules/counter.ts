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
        delay: number,
    };
    decAsync: {
        amount: number,
        delay: number,
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

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    incAsync({ commit }, payload) {
        setTimeout(() => {
            commit('inc', payload);
        }, payload.delay);
    },

    decAsync({ commit }, payload) {
        setTimeout(() => {
            commit('dec', payload);
        }, payload.delay);
    },
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('counter');

export const counter = {
    namespaced: true,
    state: { count: 0 },
    getters,
    mutations,
    actions,
};
