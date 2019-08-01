import ArtistCreate from '../components/artists/Create.vue'
import ArtistList from '../components/artists/List.vue'
import ArtistUpdate from '../components/artists/Update.vue'

const routes = [
    // { path: '/', component: ArtistList, name: 'ArtistList' },
    { path: '/artist/create', component: ArtistCreate, name: 'ArtistCreate' },
    { path: '/artist/list', component: ArtistList, name: 'ArtistList' },
    // { path: '/product/:id/edit', component: UpdateProduct, name: 'ProductUpdate' },
    // { path: '/product/:id/in', component: ProductEntrada, name: 'ProductIn' },
    // { path: '/product/:id/out', component: ProductSalida, name: 'ProductOut' }
]

export default routes