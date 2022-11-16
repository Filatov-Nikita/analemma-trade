
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
            meta: { bgColorClass: 'tw-bg-white', auth: true }
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
        meta: { bgColorClass: 'tw-bg-white', auth: true },
        name: 'push.settings'
      },

      {
        path: '/products',
        component: () => import('src/pages/ProductsPage.vue'),
        // meta: { bgColorClass: 'tw-bg-white' },
        name: 'products'
      },

      {
        path: '/products/:id',
        component: () => import('src/pages/ProductsShowPage.vue'),
        // meta: { bgColorClass: 'tw-bg-white' },
        name: 'products.show',
        props: true
      },
      {
        path: '/address/:id',
        component: () => import('src/pages/AddressShowPage.vue'),
        meta: { hiddenFooter: true },
        name: 'address.show',
        props: true,
      }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/LoginPage.vue') },
      {
        path: '/confirm',
        name: 'confirm',
        component: () => import('src/pages/ConfirmPage.vue'),
      },
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
