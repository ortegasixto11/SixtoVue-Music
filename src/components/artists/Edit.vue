<template>
    <div>
        <h2> Editar Artista </h2>
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
        Service.get(REF, this.$route.params.id).then((data) => this.getArtist(data, this.$route.params.id))
    },
    data(){
        return {
            artist: {
                id: '',
                name: ''
            }
        }
    },
    methods: {
        save(){
            Service.update(REF, this.artist.id, {
                name: this.artist.name
            }).catch(err => console.log(err))
            this.$router.push({name: 'ArtistList'})
        },
        getArtist(data, id){
            this.artist.id = id
            this.artist.name = data.name
        }
    }
}
</script>