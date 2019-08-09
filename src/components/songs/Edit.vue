<template>
    <div>
        <h2> Editar Cancion </h2>
        <br>
        <form @submit.prevent="save">
            <label> Nombre </label>
            <input type="text" id="cancion_nombre" v-model="song.name">
            <button type="submit"> Guardar </button>
            <router-link :to="{name: 'SongList'}"> Regresar </router-link>
        </form>
    </div>
</template>

<script>
import Service from '../../services/firebaseService'
const REF = 'songs'

export default {
    mounted(){
        document.getElementById('cancion_nombre').focus()
        Service.get(REF, this.$route.params.id).then((data) => this.getAlbum(data, this.$route.params.id))
    },
    data(){
        return {
            song: {
                id: '',
                name: ''
            }
        }
    },
    methods: {
        save(){
            Service.update(REF, this.song.id, {
                name: this.song.name
            }).catch(err => console.log(err))
            this.$router.push({name: 'SongList'})
        },
        getAlbum(data, id){
            this.song.id = id
            this.song.name = data.name
        }
    }
    
}
</script>