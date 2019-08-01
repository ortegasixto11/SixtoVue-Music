<template>
    <div>
        <h2> Crear Artista </h2>
        <br>
        <form @submit.prevent="save">
            <label> Nombre </label>
            <input type="text" id="artista_nombre" v-model="artist.name">
            <button type="submit"> Guardar </button>
            <router-link :to="{name: 'ArtistList'}"> Regresar </router-link>
        </form>
    </div>
</template>

<script>
import Service from '../../services/firebaseService'
const REF = 'artists'

export default {
    mounted(){
        document.getElementById('artista_nombre').focus()
    },
    data(){
        return {
            artist: {
                name: ''
            }
        }
    },
    methods: {
        save(){
            Service.create(REF, this.artist).catch(err => console.log(err))
            this.artist.name = ''
            document.getElementById('artista_nombre').focus()
        }
    }
}
</script>