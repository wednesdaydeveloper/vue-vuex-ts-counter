import { createNamespacedHelpers } from 'vuex';
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper';


export interface TodoItem {
  content: string;
  checked: boolean;
  id: number;
}

export interface State {
  items: TodoItem[];
  filter: ((item: TodoItem) => boolean) | undefined;
}

export interface Getters {
    // getterName: returnType
    items: TodoItem[];
}

export interface Mutations {
    // mutationName: mutationPayloadType
    add: {
      content: string,
    };
    toggle: {
        id: number,
    };
}

export interface Actions {}

const getters: DefineGetters<Getters, State> = {
  items: (state) => state.items,
};

const mutations: DefineMutations<Mutations, State> = {
  add(state, payload) {
    state.items.push({ checked: false, id: idOffset++, ...payload});
  },
  toggle(state, payload) {
    state.items.filter((item) => item.id === payload.id).forEach((item) => item.checked = !item.checked);
  },
};

const actions: DefineActions<Actions, State, Mutations, Getters> = {

};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('todo');


let idOffset: number = 0;

export const todo = {
    namespaced: true,
    state: {
      items: [
        {id: idOffset++, checked: false, content: '玉子買ってくる'},
        {id: idOffset++, checked: false, content: 'ゴミ捨て'},
        {id: idOffset++, checked: false, content: '筋トレ'},
      ],
      filter: undefined,
    },
    getters,
    mutations,
    actions,
};
