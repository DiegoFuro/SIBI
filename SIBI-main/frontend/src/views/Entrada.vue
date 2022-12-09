<template >
    
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
      <v-btn to="/QuienesSomos" text outline round>
        <span style="font-size: 15pt; font-family: 'Helvetica'; color: black; ">
            ¿Quiénes Somos?</span>
      </v-btn>
        </v-app-bar>
    
    <v-content>
      <v-card width="700" class="mx-auto mt-9">
        <v-card-title>
          <span style="font-size: 20pt; font-family: 'Helvetica'; color: black; weight:black">
            Inicio de Sesión</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="usuario" type="text" label="Usuario" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          v-model="contraseña"
          label="Contraseña" 
          v-on:keyup.enter="comprobarInicioSesion()"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="comprobarInicioSesion()" color="success">Iniciar Sesion</v-btn>
          <v-btn color="info" to="/registro">Registro</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>



    <template>
  <v-footer
    dark
    padless
    absolute
    class="indigo lighten-1 white--text text-center"
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
    name: "IniciarSesion",
    data: () => {
        return {
        usuario: "",
        contraseña: "",
        alerta: false,
        tipoAlerta: "",
        textoAlerta: "",
        };
    },

      /////////////////////
     //     MÉTODOS     //
    /////////////////////
    methods: {

       
       /****** COMPROBAR INICIO DE SESIÓN ******/
        comprobarInicioSesion() {
            console.log(this.usuario);
            console.log(this.contraseña);
            this.alerta = false;
            if (this.usuario == "" && this.contraseña == "") {
                this.tipoAlerta = "error";
                this.alerta = true;
                this.textoAlerta = "Por favor, introduce usuario y contraseña";
                alert(this.textoAlerta);
            } else if (this.usuario == "") {
                this.tipoAlerta = "error";
                this.alerta = true;
                this.textoAlerta = "Por favor, introduce tu usuario";
                alert(this.textoAlerta);
            } else if (this.contraseña == "") {
                this.tipoAlerta = "error";
                this.alerta = true;
                this.textoAlerta = "Por favor, introduce tu contraseña";
                alert(this.textoAlerta);
            } else {
                axios.post(direccionIp + "/datosEntrada",{ 
                    usuario: this.usuario, 
                    contraseña: this.contraseña
                }).then(response => {
                    var json = {msg: 'Error, datos mal introducidos'};
                    if(JSON.stringify(response.data[0]) == JSON.stringify(json) || JSON.stringify(response.data[0]) == undefined){
                        this.tipoAlerta = "error";
                        this.alerta = true;
                        this.textoAlerta = "Los datos introducidos son incorrectos";
                        alert(this.textoAlerta);
                    }
                    else{
                        //this.$emit("entro", this.usuario);
                        //this.getName();
                        setTimeout(() => {
                            alert("Bienvenido " + this.usuario);
                            this.cambiarPantalla("/home");
                        }, 100);
                    }
                })
                .catch((alerta) => {
                    console.log(alerta);
                });
            }
        },

         /****** CAMBIAR PANTALLA ******/
         cambiarPantalla(pantalla) {
            if (pantalla == "/home") {
                this.$router.push({path: "/home", query:{usuario: this.usuario} });
            }
            else{
                this.$router.push({ path: pantalla});
            }
        }
    },
};
</script>