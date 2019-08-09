<template>
    <div>
        <h2> Listado de Albums </h2>
        <router-link :to="{name: 'AlbumCreate'}"> Crear Album </router-link>
        <br> <br>

        <center>
            <table border="1" cellpadding="12">
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Artista </th>
                        <th> Canciones </th>
                        <th> Editar </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in albums" :key="item['.key']">
                        <td> {{ item.name }} </td>
                        <td> {{ item.artist.name }} </td>
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
const REF = 'albums'

export default {
    mounted(){
        Service.getAll(REF).then((data) => this.loadData(data))
    },
    data(){
        return {
            albums: []
        }
    },
    methods: {
        loadData(data){
            this.albums = []
            for(let key in data){
                this.albums.push({
                    id: key,
                    name: data[key].name,
                    artist: data[key].artist,
                    songs: 0
                })
            }
        },
        remove(id){
            if(confirm('Eliminar Album?')){
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