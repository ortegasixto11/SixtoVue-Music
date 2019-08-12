<template>
    <div>
        <h2> Listado de Artistas </h2>
        <router-link :to="{name: 'ArtistCreate'}"> Crear Artista </router-link>
        <br> <br>
        
        <center>
            <table border="1" cellpadding="12">
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Albums </th>
                        <th> Canciones </th>
                        <th> Editar </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in artists" :key="item['.key']">
                        <td> {{ item.name }} </td>
                        <td> 
                            {{ item.albums }} &nbsp; &nbsp;
                            <button @click="createAlbum(item.id)"> Crear </button> 
                        </td>
                        <td> {{ item.songs }} </td>
                        <td> <button @click="edit(item.id)">Editar</button> </td>
                        <td> <button @click="remove(item.id)">Eliminar</button> </td>
                    </tr>
                </tbody>
            </table>
        </center>
    </div>
</template>

<script>
import Service from '../../services/firebaseService'
const REF = 'artists'

export default {
    mounted(){
        Service.getAll(REF).then((data) => this.loadData(data))
    },
    data(){
        return {
            artists: []
        }
    },
    methods: {
        loadData(data){
            this.artists = []
            for(let key in data){
                this.artists.push({
                    id: key,
                    name: data[key].name,
                    albums: data[key].hasOwnProperty('albums') ? data[key].albums.length : 0,
                    songs: data[key].hasOwnProperty('songs') ? data[key].songs.length : 0
                })
            }
        },
        remove(id){
            if(confirm('Eliminar Artista?')){
                Service.delete(REF, id)
                Service.getAll(REF).then((data) => this.loadData(data))
            }
        },
        edit(id){
            this.$router.push({name: 'ArtistEdit', params: { id: id }})
        },
        createAlbum(artist_id){
            this.$router.push({name: 'AlbumCreateFromArtist', params: { artist_id: artist_id }})
        }
    }
}
</script>