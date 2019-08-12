import ArtistCreate from '../components/artists/Create.vue'
import ArtistList from '../components/artists/List.vue'
import ArtistEdit from '../components/artists/Edit.vue'
import AlbumCreate from '../components/albums/Create.vue'
import AlbumList from '../components/albums/List.vue'
import AlbumEdit from '../components/albums/Edit.vue'
import SongCreate from '../components/songs/Create.vue'
import SongList from '../components/songs/List.vue'
import SongEdit from '../components/songs/Edit.vue'

const routes = [
    { path: '/artist/create', component: ArtistCreate, name: 'ArtistCreate' },
    { path: '/artist/list', component: ArtistList, name: 'ArtistList' },
    { path: '/artist/edit/:id', component: ArtistEdit, name: 'ArtistEdit' },
    { path: '/album/create', component: AlbumCreate, name: 'AlbumCreate' },
    { path: '/album/create/artist/:artist_id', component: AlbumCreate, name: 'AlbumCreateFromArtist' },
    { path: '/album/list', component: AlbumList, name: 'AlbumList' },
    { path: '/album/edit/:id', component: AlbumEdit, name: 'AlbumEdit' },
    { path: '/song/create', component: SongCreate, name: 'SongCreate' },
    { path: '/song/list', component: SongList, name: 'SongList' },
    { path: '/song/edit/:id', component: SongEdit, name: 'SongEdit' },
]

export default routes