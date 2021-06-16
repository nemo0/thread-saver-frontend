import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import AllThread from '../components/AllThread';
import Thread from '../components/Thread';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/allthread',
      component: AllThread,
    },
    {
      path: '/:tweetId',
      component: Thread,
    },
  ],
  mode: 'history',
});

export default router;
