import Vue from 'vue';
import Router from 'vue-router';

import MainLayout from 'pages/layouts/MainLayout';
import Home from 'pages/Home';
import Lists from 'pages/Lists';
import Pro from 'pages/Pro';
import Settings from 'pages/Settings';
import About from 'pages/About';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/lists',
        component: Lists
      },
      {
        path: '/pro',
        component: Pro
      },
      {
        path: '/settings',
        component: Settings
      },
      {
        path: '/about',
        component: About
      }
    ]
  }
];

export default new Router({
  routes,
  mode: 'history'
});
