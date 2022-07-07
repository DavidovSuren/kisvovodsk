
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/food', component: () => import('pages/FoodPage.vue') },
      { path: '/cafe', component: () => import('pages/CafePage.vue') },
      { path: '/restraunt', component: () => import('pages/RestrauntPage.vue') },
      { path: '/canteen', component: () => import('pages/CanteenPage.vue') },
      { path: '/fastfood', component: () => import('pages/FastfoodPage.vue') },
      { path: '/hotel', component: () => import('pages/HotelPage.vue') },
      { path: '/sanatoriums', component: () => import('pages/Sanatoriums.vue') },
      { path: '/gostinitsa', component: () => import('pages/GostinitsaPage.vue') },
      { path: '/motel', component: () => import('pages/MotelPage.vue') },
      { path: '/flat', component: () => import('pages/FlatPage.vue') },
      { path: '/events', component: () => import('pages/EventsPage.vue') },
      { path: '/cexcursionfe', component: () => import('pages/CexcursionfePage.vue') },
      { path: '/acropolis', component: () => import('pages/AcropolisPage.vue') },
      { path: '/guides', component: () => import('pages/GuidesPage.vue') },
      { path: '/fashion', component: () => import('pages/FashionPage.vue') },
      { path: '/boutique', component: () => import('pages/BoutiquePage.vue') },
      { path: '/sport', component: () => import('pages/SportPage.vue') },
      { path: '/fur', component: () => import('pages/FurPage.vue') },
      { path: '/gift', component: () => import('pages/GiftPage.vue') },
      { path: '/hair-cut', component: () => import('pages/HairCutPage.vue') },
      { path: '/spa', component: () => import('pages/SpaPage.vue') },
      { path: '/fitness', component: () => import('pages/FitnessPage.vue') },
      { path: '/laptop', component: () => import('pages/LaptopPage.vue') },
      { path: '/car-wash', component: () => import('pages/CarWashPage.vue') },
      { path: '/parking', component: () => import('pages/ParkingPage.vue') },
      { path: '/repair', component: () => import('pages/RepairPage.vue') },
      { path: '/van', component: () => import('pages/VanPage.vue') },
      { path: '/transport', component: () => import('pages/TransportPage.vue') },
      { path: '/room', component: () => import('pages/RoomPage.vue') },
      { path: '/serves', component: () => import('pages/ServesPage.vue') },
      { path: '/eks', component: () => import('pages/EksPage.vue') },
      { path: '/info', component: () => import('pages/InfoPage.vue') },
      { path: '/clothing', component: () => import('pages/ClothingPage.vue') }
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
