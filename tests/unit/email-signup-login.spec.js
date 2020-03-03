import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import './firebase'
import EmailSignupLogin from '@/components/EmailSignupLogin';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('EmailSignupLogin', () => {
  let wrapper;
  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = mount(EmailSignupLogin, {
      localVue,
      data() {
        return {
          password: '123456',
          passwordReenter: '123456',
          emailAdress: 'test@test.com',
        };
      },
      store: new Vuex.Store({
        actions: {
          setUser: mockFunction,
        },
      }),
      mocks: {
        $router: {
          push: jest.fn()
        }
      }
    });
  });

  describe('methods', () => {
    describe('#registerViaEmail', () => {
      it('calls mockFunction', async () => {
        await wrapper.vm.registerViaEmail();
        expect(mockFunction).toHaveBeenCalled();
      });
    });
  });
});