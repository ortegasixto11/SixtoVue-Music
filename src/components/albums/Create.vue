<template>
    <div>
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
    },
    data(){
        return {
            album: {
                name: '',
                artist: {
                    name: ''
                },
                songs: []
            }
        }
    },
    methods: {
        save(){
            Service.create(REF, this.album).catch(err => console.log(err))
            this.album.name = ''
            this.focusInputNombre()
        },
        focusInputNombre(){
            document.getElementById('album_nombre').focus()
        }
    }
    
}
</script>