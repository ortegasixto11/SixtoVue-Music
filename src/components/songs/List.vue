<template>
    <div>
        <h2> Listado de Canciones </h2>
        <router-link :to="{name: 'SongCreate'}"> Crear Cancion </router-link>
        <br> <br>

        <center>
            <table border="1" cellpadding="12">
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Artista </th>
                        <th> Album </th>
                        <th> Editar </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in songs" :key="item['.key']">
                        <td> {{ item.name }} </td>
                        <td> {{ item.artist.name }} </td>
                        <td> {{ item.album.name }} </td>
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
const REF = 'songs'

export default {
    mounted(){
        Service.getAll(REF).then((data) => this.loadData(data))
    },
    data(){
        return {
            songs: []
        }
    },
    methods: {
        loadData(data){
            this.songs = []
            for(let key in data){
                this.songs.push({
                    id: key,
                    name: data[key].name,
                    album: data[key].album,
                    artist: data[key].artist
                })
            }
        },
        remove(id){
            if(confirm('Eliminar Cancion?')){
                Service.delete(REF, id)
                Service.getAll(REF).then((data) => this.loadData(data))
            }
        },
        edit(id){
            this.$router.push({name: 'AlbumEdit', params: { id: id }})
        }
    }
    
}
</script>