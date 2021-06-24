<template>
  <body>
    <div id="app">
      <h1>STL Loader</h1>
      <div class="container">
        <!-- Creation du bouton pour séléctionner un fichier SLT -->
        <div class="large-12 medium-12 small-12 cell">
          <label>Select your file
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
        </div>
        <!-- Affichage du fichier STL -->
        <model-stl v-bind:src="STLPreview" v-show="showPreview" height="1000" width="1500" backgroundAlpha="0"></model-stl>
      </div>
    </div>
  </body>
</template>

<script>
import {ModelStl} from 'vue-3d-model';

export default {
  components: {
    ModelStl
  },
  data () {
    return {
      file: '',
      showPreview: false,
      STLPreview: ''
    }
  },
  methods: {
    // parti qui va recuperer et gerer l affichage du fichier STL
    handleFileUpload () {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.addEventListener('load', function () {
        this.showPreview = true;
        this.STLPreview = reader.result;
      }.bind(this), false);
      if (this.file) {
        // verification du type du fichier
        if (/\.(stl)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  text-decoration: underline;
  line-height: 50px;
}
body {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  text-align: center;
  font-size: 20px;
}
</style>
