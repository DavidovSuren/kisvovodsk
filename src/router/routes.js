
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/post/:id', component: () => import('pages/PostPage.vue') },
      // { path: '/food', component: () => import('pages/FoodPage.vue'), props: { categoryId: 33 } },
      { path: '/cafe', component: () => import('pages/UniPage.vue'), props: { categoryId: 31 } },
      { path: '/restraunt', component: () => import('pages/UniPage.vue'), props: { categoryId: 30 } },
      { path: '/canteen', component: () => import('pages/UniPage.vue'), props: { categoryId: 32 } },
      { path: '/past', component: () => import('pages/UniPage.vue'), props: { categoryId: 41 } },
      { path: '/future', component: () => import('pages/UniPage.vue'), props: { categoryId: 43 } },
      { path: '/fastfood', component: () => import('pages/UniPage.vue'), props: { categoryId: 33 } },
      { path: '/hotel', component: () => import('pages/UniPage.vue'), props: { categoryId: 35 } },
      { path: '/sanatoriums', component: () => import('src/pages/UniPage.vue'), props: { categoryId: 11 } },
      { path: '/gostinitsa', component: () => import('pages/UniPage.vue'), props: { categoryId: 12 } },
      { path: '/motel', component: () => import('pages/UniPage.vue'), props: { categoryId: 13 } },
      { path: '/flat', component: () => import('pages/UniPage.vue'), props: { categoryId: 14 } },
      { path: '/events', component: () => import('pages/UniPage.vue'), props: { categoryId: 29 } },
      { path: '/cexcursionfe', component: () => import('pages/UniPage.vue'), props: { categoryId: 28 } },
      { path: '/acropolis', component: () => import('pages/UniPage.vue'), props: { categoryId: 27 } },
      { path: '/pets', component: () => import('pages/UniPage.vue'), props: { categoryId: 25 } },
      { path: '/boutique', component: () => import('pages/UniPage.vue'), props: { categoryId: 24 } },
      { path: '/sport', component: () => import('pages/UniPage.vue'), props: { categoryId: 23 } },
      { path: '/fur', component: () => import('pages/UniPage.vue'), props: { categoryId: 22 } },
      { path: '/gift', component: () => import('pages/UniPage.vue'), props: { categoryId: 21 } },
      { path: '/hair-cut', component: () => import('pages/UniPage.vue'), props: { categoryId: 20 } },
      { path: '/spa', component: () => import('pages/UniPage.vue'), props: { categoryId: 19 } },
      { path: '/fitness', component: () => import('pages/UniPage.vue'), props: { categoryId: 34 } },
      { path: '/laptop', component: () => import('pages/UniPage.vue'), props: { categoryId: 18 } },
      { path: '/car-wash', component: () => import('pages/UniPage.vue'), props: { categoryId: 17 } },
      { path: '/parking', component: () => import('pages/ParkingPage.vue'), props: { categoryId: 16 } },
      { path: '/child', component: () => import('pages/UniPage.vue'), props: { categoryId: 39 } },
      { path: '/extreme', component: () => import('pages/UniPage.vue'), props: { categoryId: 38 } },
      { path: '/van', component: () => import('pages/VanPage.vue'), props: { categoryId: 10 } },
      { path: '/info', component: () => import('pages/InfoPage.vue') },
      { path: '/video', component: () => import('pages/VideoPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/help', component: () => import('pages/HelpPage.vue') },
      { path: '/repair', component: () => import('pages/RepairPage.vue') }

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
