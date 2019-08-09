<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <li> <router-link :to="{name: 'ArtistList'}"> Artistas </router-link> </li>
      <li> <router-link :to="{name: 'AlbumList'}"> Albums </router-link> </li>
      <li> <router-link :to="{name: 'SongList'}"> Canciones </router-link> </li>
    </ul>

    <br />
    <router-view></router-view>

  </div>
</template>

<script>
import ArtistCreate from './components/artists/Create.vue'
import ArtistList from './components/artists/List.vue'
import ArtistEdit from './components/artists/Edit.vue'
import AlbumCreate from './components/albums/Create.vue'
import AlbumList from './components/albums/List.vue'
import AlbumEdit from './components/albums/Edit.vue'
import SongCreate from './components/songs/Create.vue'
import SongList from './components/songs/List.vue'
import SongEdit from './components/songs/Edit.vue'

export default {
  name: 'app',
  components: {
    ArtistCreate,
    ArtistList,
    ArtistEdit,
    AlbumCreate,
    AlbumList,
    AlbumEdit,
    SongCreate,
    SongList,
    SongEdit
  },
  data () {
    return {
      msg: 'Sixto Music App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
