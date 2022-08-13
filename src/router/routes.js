
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MainPage.vue') },

      // профиль
      {
        path: '/profile',
        children: [
          {
            path: '',
            name: 'profile',
            component: () => import('src/pages/ProfilePage.vue'),
          },
          {
            path: 'show',
            component: () => import('src/pages/ProfileShowPage.vue'),
            name: 'profile.show',
            meta: { bgColorClass: 'tw-bg-white' }
          }
        ]
      },

      {
        path: '/quotes',
        component: () => import('src/pages/QuotesPage.vue'),
        meta: { bgColorClass: 'tw-bg-white' },
        name: 'quotes'
      },

      {
        path: '/push/settings',
        component: () => import('src/pages/PushSettingsPage.vue'),
        meta: { bgColorClass: 'tw-bg-white' },
        name: 'push.settings'
      }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/LoginPage.vue') },
      { path: '/confirm', name: 'confirm', component: () => import('src/pages/ConfirmPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
