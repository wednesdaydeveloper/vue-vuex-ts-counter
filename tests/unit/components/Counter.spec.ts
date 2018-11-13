import Vuex from 'vuex';
import { shallowMount, createLocalVue  } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      incAsync: jest.fn(),
      decAsync: jest.fn(),
    };

    const modules = {
      counter: {
        namespaced: true,
        getters: {
          count: () => 1234,
        },
        actions,
      },
    };

    store = new Vuex.Store({
      modules,
    });
  });

  it('renders counter views.', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Counter, { store, localVue, propsData: { msg }});

    const message = wrapper.find('div.msg');
    expect(message.text()).toMatch(msg);

    const count = wrapper.find('div.count');
    expect(count.text()).toMatch('1234');
  });

  it('click inc button', () => {
    const wrapper = shallowMount(Counter, { store, localVue});
    wrapper.find('.inc').trigger('click');

    expect(actions.incAsync).toHaveBeenCalledWith(expect.anything(), {amount: 1}, undefined);
  });

  it('click dec button', () => {
    const wrapper = shallowMount(Counter, { store, localVue});
    wrapper.find('.dec').trigger('click');

    expect(actions.decAsync).toHaveBeenCalledWith(expect.anything(), {amount: 1}, undefined);
  });
});
