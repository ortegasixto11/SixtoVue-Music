<template>
    <div>
        <h2> Editar Album </h2>
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
        document.getElementById('album_nombre').focus()
        Service.get(REF, this.$route.params.id).then((data) => this.getAlbum(data, this.$route.params.id))
    },
    data(){
        return {
            album: {
                id: '',
                name: ''
            }
        }
    },
    methods: {
        save(){
            Service.update(REF, this.album.id, {
                name: this.album.name
            }).catch(err => console.log(err))
            this.$router.push({name: 'AlbumList'})
        },
        getAlbum(data, id){
            this.album.id = id
            this.album.name = data.name
        }
    }
    
}
</script>