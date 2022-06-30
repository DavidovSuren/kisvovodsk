
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'food', component: () => import('pages/FoodPage.vue') },
      { path: 'transport', component: () => import('pages/TransportPage.vue') },
      { path: 'room', component: () => import('pages/RoomPage.vue') },
      { path: 'serves', component: () => import('pages/ServesPage.vue') },
      { path: 'eks', component: () => import('pages/EksPage.vue') },
      { path: 'info', component: () => import('pages/InfoPage.vue') },
      { path: 'clothing', component: () => import('pages/ClothingPage.vue') }
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
