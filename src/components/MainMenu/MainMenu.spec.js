import { shallowMount, createLocalVue } from '@vue/test-utils';
import MainMenu from 'components/MainMenu/MainMenu';

const localVue = createLocalVue();
localVue.directive('clickOutside', () => {});
const RouterLink = {
  name: 'router-link',
  render: function(h) {
    return h('div', this.$slots.default);
  },
  props: ['to']
};

describe('MainMenu.vue', () => {
  let $route;
  let creationOption;
  const givenComponent = () => {
    return shallowMount(MainMenu, creationOption);
  };

  beforeEach(() => {
    $route = { path: '/' };
    creationOption = {
      localVue,
      mocks: {
        $route
      },
      stubs: {
        RouterLink
      }
    };
  });
  it('should be closed upon creation', () => {
    const wrapper = givenComponent();
    const menuVisibility = wrapper.find('.main-menu__container').isVisible();
    expect(menuVisibility).toBe(false);
  });

  it('should open/close when we toggling', () => {
    const wrapper = givenComponent();
    const leftMenu = wrapper.find('.main-menu__container');
    wrapper.vm.toggle();
    expect(leftMenu.isVisible()).toBe(true);

    wrapper.vm.toggle();
    expect(leftMenu.isVisible()).toBe(false);
  });

  it('should close when we navigate', () => {
    const wrapper = givenComponent();
    const leftMenu = wrapper.find('.main-menu__container');
    wrapper.vm.toggle();
    expect(leftMenu.isVisible()).toBe(true);

    $route.path = '/navigate';
    expect(leftMenu.isVisible()).toBe(false);
  });
});
