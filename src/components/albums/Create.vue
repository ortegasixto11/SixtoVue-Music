<template>
    <div>
        <h3> {{ album.artist.name }} </h3>
        <h2> Crear Album </h2>
        <br>
        <form @submit.prevent="save">
            <label> Nombre </label>
            <input type="text" id="album_nombre" v-model="album.name">
            <button type="submit"> Guardar </button>
            <router-link :to="{name: 'AlbumList'}"> Regresar </router-link>
        </form>
    </div>
</template>

<script>
import Service from '../../services/firebaseService'
const REF = 'albums'

export default {
    mounted(){
        this.focusInputNombre()
        Service.get('artists', this.$route.params.artist_id).then((data) => this.getArtist(data, this.$route.params.artist_id))
    },
    data(){
        return {
            album: {
                name: '',
                artist_id: '',
                artist: {
                    id: '',
                    name: '',
                    albums: [],
                    songs: []
                },
                songs: []
            }
        }
    },
    methods: {
        save(){
            // Creo el Album
            Service.create(REF, this.album)
                .then(res => {
                    this.album.artist.albums.push({ 
                        id: res.key,
                        name: this.album.name 
                    })
                    // Actualizo el Artista
                    Service.update('artists', this.album.artist.id, { albums: this.album.artist.albums })
                        .then(() => {
                            // Limpio el input y le doy focus
                            this.album.name = ''
                            this.focusInputNombre()
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        },
        focusInputNombre(){
            document.getElementById('album_nombre').focus()
        },
        getArtist(artist, id){
            this.album.artist = artist
            this.album.artist.albums = artist.hasOwnProperty('albums') ? artist.albums : []
            this.album.artist.songs = artist.hasOwnProperty('songs') ? artist.songs : []
            this.album.artist.id = id
            this.album.artist_id = id
        }
    }
    
}
</script>