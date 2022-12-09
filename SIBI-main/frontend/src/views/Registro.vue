<template>
  <v-app>
    <v-parallax
        height="750"
      src="@/img/fondo5.jpg"
      
      >
      <v-app-bar app dark rounded color="#1FD660" height="80">
            <v-toolbar-side-icon>
            <v-img class="mr-3" src="@/assets/logo.png" height="60px" width="60px"> 
            </v-img>
     </v-toolbar-side-icon>
      <v-toolbar-title>
        <span style="font-size: 30pt; font-family: 'Helvetica'; color: black; weight:black">
            MusicFactory</span>
          </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/QuienesSomos" >
        <span style="font-size: 15pt; font-family: 'Helvetica'; color: black; ">
            ¿Quiénes Somos?</span>
      </v-btn>
    </v-app-bar>
   
    <v-content>
      <v-card width="800" class="mx-auto mt-9">
        <v-card-title>
          <span style="font-size: 20pt; font-family: 'Helvetica'; color: black; weight:black">
            Registro</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="nombre" type="text" label="Nombre y Apellidos" prepend-icon="mdi-account-circle"/>
          <v-text-field v-model="email" type="text" label="Email" prepend-icon="mdi-account-circle"/>
          <v-text-field v-model="usuario" type="text" label="Usuario" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          v-model="contraseña" 
          label="Contraseña" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-on:keyup.enter="mostrar"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" @click="mostrar">Registrar</v-btn>
          <v-btn to="/" color="success">Inicio de Sesion</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>

    <template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Diego Furones Mora</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

  </v-parallax>
  </v-app>
</template>



<script>
  const axios = require("axios");
  const direccionIp = "http://127.0.0.1:3000";
  export default {
    data: () => {
      return {
        nombre: "",
        email: "",
        usuario: "",
        contraseña: "",
      };
    },

      /////////////////////
     //     MÉTODOS     //
    /////////////////////
    methods: {

      /****** MOSTRAR ******/
      mostrar: function() {
        if (
          (this.nombre === undefined || this.nombre === "") ||
          (this.email === undefined || this.email === "") ||
          (this.usuario === undefined || this.usuario === "") ||
          (this.contraseña === undefined || this.contraseña === "")
        ) {
          alert("Introduzca todos los parametros");
        } else {
           
            let body = {
              nombre: this.nombre,
              email: this.email,
              usuario: this.usuario,
              contraseña: this.contraseña,
            };
            axios
              .post(direccionIp + "/postNewUser", body)
              .then(response => {
                this.comprobarRespuesta(response.data);
              });
        }
      },

      


      /****** CAMBIAR PANTALLA ******/
      cambiarPantalla(pantalla) {
          if (pantalla == "Home") {
            console.log(this.$route.path);
              this.$router.push({name: "Home", query:{usuario: this.usuario}});
          }
          else{
            console.log(this.$route.path);
              this.$router.push({ name: pantalla });
          }
      },

      /****** COMPROBAR RESPUESTA ******/
      comprobarRespuesta(respuesta) {
          console.log(respuesta);
        if (respuesta === "si") {
          alert("Bienvenido: " + this.usuario );
          this.$emit("entro", this.usuario);
          this.cambiarPantalla("Home");
        } else {
          alert("Ya existe un usuario con ese nombre: " + this.usuario);
        }
      },
    },
  };
</script>