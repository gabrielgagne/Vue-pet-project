import { shallowMount } from '@vue/test-utils';
import WelcomeMessage from 'components/WelcomeMessage/WelcomeMessage';

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester';

    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { name }
    });

    expect(wrapper.find('h3').text()).toBe(
      'Hello tester from my Vue.js page, built with Webpack 4!'
    );
  });
});
