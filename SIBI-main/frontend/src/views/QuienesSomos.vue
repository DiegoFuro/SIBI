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
      <v-card width="1500" class="mx-auto mt-9">
        <v-card-title>
          <span style="font-size: 20pt; font-family: 'Helvetica'; color: black; weight:black">
            ¿Quiénes Somos?
        </span>
        </v-card-title>
        <v-card-subtitle style="color:black">
        <br>Esta aplicación te ayudará a descubrir música que antes no conocías.<br>
        <br>¿Nunca has tenido el problema de querer encontrar música nueva, pero no sabes por donde empezar y te abrumas?
        Tan solo tienes que pulsar sobre el botón "Recomendacion aleatoria" si quieres descubir música completamente nueva, de diferentes géneros y artistas.<br>
        <br>
        Nuestra aplicación de recomendación de música y artistas es una plataforma en línea diseñada para brindar a nuestros usuarios una experiencia de descubrimiento y reproducción de música personalizada y relevante.
        Utilizamos algoritmos de recomendación avanzados para analizar las preferencias y el historial de reproducción de cada usuario y sugerir canciones y artistas que creemos que disfrutarán.
        Si quieres buscar alguna canción de un género o artista en concreto, o con alguna palabra en su nombre, selecciona los parámetros que deseas y pulsa sobre el botón "Buscar".<br>
        Puedes ordenar los resultados obtenidos por diferentes variables como bailabilidad, positividad, emocion etc..<br>
        Si quieres una recomendación personalizada basada en tus gustos, solo tienes que pulsar sobre el botón "Recomendacion personalizada".<br>
        Si quieres una recomendación personalizada por medio de un filtro colaborativo, solo tienes que pulsar sobre el botón "Recomendación personalizada según los gustos de otros usuarios similares a ti"<br><br>
        Esta recomendación utiliza un algoritmo de filtrado colaborativo que se encarga de buscar usuarios con gustos similares a los tuyos para poder recomendarte algo que te pueda gustar según  sus opiniones.<br><br>
        Siempre que te guste una canción podrás guardarla en tu lista de favoritos pulsando sobre el botón del corazón.<br>
        Puedes acceder a tu lista de canciones favoritas pulsando sobre el botón del corazón de la barra superior, también podras ver las canciones que has metido en odiadas.<br>
        
        La música que metas en odiadas nunca más se te recomendará, e intentará que los artistas y generos de esas canciones aparezcan lo menos posible en tus recomendaciones. <br>
        En resumen, somos una aplicación de recomendación de música y artistas comprometida con ofrecer a nuestros usuarios una experiencia de descubrimiento y reproducción de música personalizada y relevante, mientras apoyamos a los artistas y promovemos el descubrimiento de nuevo talento.
        <br><br>¡Conoce mucha música nueva y diviértete!<br>
      </v-card-subtitle>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" to="/">Volver</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    



    <template>
  <v-footer
    dark
    padless
    absolute
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