<template>
  <v-app>
    <!-- BARRA SUPERIOR -->

    <v-app-bar app dark rounded color="#1FD660" height="80">
      <v-toolbar-side-icon>
        <v-img class="mr-3" src="@/assets/logo.png" height="60px" width="60px">
        </v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <span style="font-size: 22pt; font-family: 'Helvetica'; color: black; weight: black">
          Favoritas de {{ usuario }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Botón Home -->
      <v-btn icon @click="cambiarPantalla('/home')">
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>

      <v-btn icon @click="cambiarPantalla('/')">
        <v-icon color="black">mdi-exit-to-app</v-icon>
      </v-btn>

    </v-app-bar>

    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" dark>
      <template>
        <v-card class="mx-auto" max-width="1500" tile>
          <v-img height="300"
            src="@/img/guitarra.jpg">
          </v-img>
          <v-row style="margin:2.5%;position:absolute; top: 130px">

            <v-list-item>
              <v-list-item-avatar size="100">
                <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title style="margin-top:20px; font-size: 32px;">{{nombre}}</v-list-item-title>
                <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-row>
        </v-card>
      </template>

      <v-container fluid>
      <v-row align="center">
        <v-col cols="5">
          <v-subheader>
            <span v-if=switch1 height="100px" style=" font-size: 40px;
          font-family: 'Robotica';
          color: white;
          letter-spacing: -1px;
          text-align: center">Lista de Favoritas:
          </span>
          <span v-else height="100px" style=" font-size: 40px;
          font-family: 'Robotica';
          letter-spacing: -1px;
          color: white;
          text-align: center">Lista de Odiadas:
          </span>

          </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="switch1"
            :label= "`${switch1 ? 'Favoritas' : 'Odiadas'}`"
            color="green"
            size="great"
             ></v-switch>

        </v-col>
      </v-row>
    </v-container>

      <v-container v-if=switch1 fluid>
        <v-row dense>
          <!-- Lista de productos mostrados -->
          <v-col cols="12">
            <!-- Bucle que recorre todos los elementos de la lista itemsMusic -->
            <v-col v-for="(song, i) in favoritas" :key="i" cols="flex">
              <v-card :color="song.color" dark>
                <!-- Ponemos los datos de la canción -->
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="song.name"></v-card-title>
                    <v-card-subtitle v-text="song.artist"></v-card-subtitle>
                    <v-card-text v-text="song.genre"></v-card-text>
                  </div>
                  <table height="50%">
                    <tr>
                      <td valign="middle" align="center">
                        <iframe :src="song.preview" width="300" height="80" margin="10px" frameborder="0"
                          allowtransparency="true" allow="encrypted-media"></iframe>
                      </td>
                      <td valign="middle" align="center">
                        <span style="color:transparent">holaaaa</span>
                        <!-- Botón Corazón -->
                        <v-btn icon @click="deleteFavs(song)">
                          <v-icon> {{ song.iconF }} </v-icon>
                        </v-btn>
                        <span style="color:transparent">holaaaa</span>
                      </td>
                      <td valign="middle" align="center">
                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="song.cover"></v-img>
                        </v-avatar>
                      </td>
                    </tr>
                  </table>
                </div>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>

      <v-container v-else fluid>
        <v-row dense>
          <!-- Lista de productos mostrados -->
          <v-col cols="12">
            <!-- Bucle que recorre todos los elementos de la lista itemsMusic -->
            <v-col v-for="(song, i) in odiadas" :key="i" cols="flex">
              <v-card :color="song.color" dark>
                <!-- Ponemos los datos de la canción -->
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="song.name"></v-card-title>
                    <v-card-subtitle v-text="song.artist"></v-card-subtitle>
                    <v-card-text v-text="song.genre"></v-card-text>
                  </div>
                  <table height="50%">
                    <tr>
                      <td valign="middle" align="center">
                        <iframe :src="song.preview" width="300" height="80" margin="10px" frameborder="0"
                          allowtransparency="true" allow="encrypted-media"></iframe>
                      </td>
                      <td valign="middle" align="center">
                        <span style="color:transparent">holaaaa</span>
                        <!-- Botón Corazón -->
                        <v-btn icon @click="deleteHateds(song)">
                          <v-icon> {{ song.iconF }} </v-icon>
                        </v-btn>
                        <span style="color:transparent">holaaaa</span>
                      </td>
                      <td valign="middle" align="center">
                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="song.cover"></v-img>
                        </v-avatar>
                      </td>
                    </tr>
                  </table>
                </div>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>


    </v-sheet>
  </v-app>
</template>

<script>
const axios = require("axios");
const direccionIp = "http://127.0.0.1:3000";
export default {
  props: {
    source: String
  },
  name: "App",
  data() {
    return {
      nombre: "",
      email: "",
      selected: "null",
      switch1: true,
      drawer: false,
      usuario: this.$route.query.usuario,
      userName: "",
      num: 0,
      favoritas: [],
      odiadas: [],
      songs: [],
      colors: ["#952175", "#00ACC1", "#FFB300", "#E91E63", "#8BC34A"],
      items: [

      ],
      loading: false,
    };
  },

  /////////////////////
  //     MOUNTED     //
  /////////////////////
  mounted() {
    console.log("ENTRAMOS EN MOUNTED DE FAVORITAS");
    console.log(this.usuario);
    this.getNombre();
    this.getEmail();
    this.getFavs();
    this.getHateds();
  },

  /////////////////////
  //     MÉTODOS     //
  /////////////////////
  methods: {

   getNombre(){
    axios.post(direccionIp + "/getUserName", {
      usuario: this.usuario,
    }).then(respuesta => {
      this.nombre = respuesta.data;

    });
   },

   getEmail(){
    axios.post(direccionIp + "/getEmail", {
      usuario: this.usuario,
    }).then(respuesta => {
      this.email = respuesta.data;

    });
   },




    /****** CAMBIAR PANTALLA ******/
    cambiarPantalla(pantalla) {
      console.log("QUEREMOS CAMBIAR DE PANTALLA");
      if (pantalla == "/home") {
        this.$router.replace({ path: "/home", query: { usuario: this.usuario } });
      }
      else {
        this.$router.push({ path: pantalla, query: { usuario: this.usuario } });
      }
    },

    getHateds(){
      console.log("ESTOY en GETHATEDS");
      console.log(this.usuario);
      axios.post(direccionIp + "/getHateds", {
        usuario: this.usuario,
      }).then(respuesta => {
        this.num = 0;
        for (var i = 0; i < respuesta.data.length; i++) {
          this.odiadas.push(respuesta.data[i]);
          this.odiadas[i].color = this.colors[this.num];
          this.odiadas[i].iconF = 'mdi-thumb-down';
          this.odiadas[i].iconD = 'mdi-thumb-down-outline';
          this.num = this.num + 1;
          if (this.num == this.colors.length) {
            this.num = 0;
          }
        }
      });
      setTimeout(() => {
        console.log(this.odiadas.length);
        console.log(this.odiadas);
      }, 200);
    },

    /****** GET FAVS ******/
    getFavs() {
      console.log("ESTOY en GETFAVS");
      console.log(this.usuario);
      axios.post(direccionIp + "/getFavs", {
        usuario: this.usuario,
      }).then(respuesta => {
        this.num = 0;
        for (var i = 0; i < respuesta.data.length; i++) {
          this.favoritas.push(respuesta.data[i]);
          this.favoritas[i].color = this.colors[this.num];
          this.favoritas[i].iconF = 'mdi-heart';
          this.favoritas[i].iconD = 'mdi-thumb-down-outline';
          this.num = this.num + 1;
          if (this.num == this.colors.length) {
            this.num = 0;
          }
        }
      });
      setTimeout(() => {
        console.log(this.favoritas.length);
        console.log(this.favoritas);
      }, 200);
    },

    deleteHateds(song){
      alert("Se va a eliminar "+song.name+ " de la lista de odiadas.")
      console.log("Entro en eliminar de odiadas");
        axios.post(direccionIp + "/postDeleteRelation", {
          name: song.name,
          artist: song.artist,
          usuario: this.usuario,
          type: 1,
        }).then(respuesta => {
          console.log(respuesta.data);
        });
     
        var borrar = this.odiadas.indexOf(song.name);
        this.odiadas.splice(borrar, 1);
        console.log("Salgo de eliminar de odiadas");
        window.location.reload();
    },

    /****** ELIMINAR DE FAVORITAS ******/
    deleteFavs(song) {
      alert("Se va a eliminar "+song.name+ " de la lista de favoritos.")
      console.log("Entro en eliminar de favoritos");
      var aux = 2;
      if (song.iconF == 'mdi-heart') {
        song.iconF = 'mdi-heart-outline';
        aux = 0;
      }
      else {
        alert("Canción añadida a favoritos.");
        song.iconF = 'mdi-heart';
        aux = 1;
      }
      if (aux == 0) {
        axios.post(direccionIp + "/postDeleteRelation", {
          name: song.name,
          artist: song.artist,
          usuario: this.usuario,
          type: aux,
        }).then(respuesta => {
          console.log(respuesta.data);
        });
      }
      if (aux == 1) {
        axios.post(direccionIp + "/postNewSongLiked", {
          name: song.name,
          usuario: this.usuario,
          artist: song.artist,
        }).then(respuesta => {
          console.log(respuesta.data);
        });
      }
      if (aux == 0) {
        var borrar = this.favoritas.indexOf(song.name);
        this.favoritas.splice(borrar, 1);
      }
      else {
        this.favoritas.push(song);
      }
      console.log("Salgo de eliminar de favoritos");
      window.location.reload();
    },
  }
}
</script>