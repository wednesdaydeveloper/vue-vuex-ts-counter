import {counter, State} from '@/store/modules/counter';

describe('counter', () => {
  describe('getters', () => {
    it('should be able to get count', () => {
      const state: State = {
        count: 123,
      };

      const wrapper = (getters: any) => getters.count(state);

      const count = wrapper(counter.getters);

      expect(count).toEqual(state.count);
    });
  });

  describe('mutations', () => {
    let state: State;

    beforeEach(() => {
      state = {
        count: 123,
      };
    });

    it('should be able to increment count', () => {
      const wrapper = (mutations: any) => mutations.inc(state, {amount: 2});
      wrapper(counter.mutations);

      expect(state.count).toEqual(125);
    });

    it('should be able to decrement counter', () => {
        const wrapper = (mutations: any) => mutations.dec(state, {amount: 3});
        wrapper(counter.mutations);

        expect(state.count).toEqual(120);
      });
  });

  describe('actions', () => {
    let state: State;

    beforeEach(() => {
      state = {
        count: 456,
      };
    });

    it('should be able to commit increment', async () => {
        const commit = jest.fn();

        const wrapper = (actions: any) => actions.incAsync({ commit }, {amount: 3});
        await wrapper(counter.actions);

        expect(commit).toHaveBeenCalledWith('inc', {amount: 3});
    });

    it('should be able to commit decrement', async () => {
        const commit = jest.fn();

        const wrapper = (actions: any) => actions.decAsync({ commit }, {amount: 3});

        await wrapper(counter.actions);

        expect(commit).toHaveBeenCalledWith('dec', {amount: 3});
      });
  });
});
