<template>
    <div>
        <h2> Crear Cancion </h2>
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
        this.focusInputNombre()
    },
    data(){
        return {
            song: {
                name: '',
                album: {
                    name: ''
                },
                artist: {
                    name: ''
                }
            }
        }
    },
    methods: {
        save(){
            Service.create(REF, this.song).catch(err => console.log(err))
            this.song.name = ''
            this.focusInputNombre()
        },
        focusInputNombre(){
            document.getElementById('cancion_nombre').focus()
        }
    }
    
}
</script>