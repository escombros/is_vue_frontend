<template>
 <div class="head">
  <el-row class="margin-bottom-20" type="flex" justify="space-between" wstyle="width: 100% height: 50%" >
    <el-col :span="10" :offset="3">
      <el-button
          class="header-logo "
          color="#626aef"
          @click.stop.prevent="hola()"
        >
        <img class="logo-mex"  src="@/assets/images/logo.svg" alt="Logo">
      </el-button>
    </el-col>
    <el-col :span="5" :offset="0" >
      <el-dropdown >
        <span class="texto-config">
          Trámites
          <el-icon class="el-icon--right">
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-link class="texto-link" href="https://www.gob.mx/gobierno" >Gobierno</el-link>
      <el-link icon="el-icon-search" href="https://www.webfud.escomproyectos.com/"></el-link>
    </el-col>
  </el-row>
</div>
<div class="head2">
  <el-row class="margin-bottom-2" type="flex" justify="space-between"  >
    <el-col :span="20" :offset="3">
      <p class="textop">
        &nbsp; &nbsp; RENAVI
      </p>
      <el-link icon="el-icon-s-home"  href="https://www.webfud.escomproyectos.com/"></el-link> 
      <el-link icon="el-icon-arrow-right" disabled></el-link>
      {{ pagename }}
    </el-col>
  </el-row >
    <el-row class="margin-bottom-2"  >
    <el-col :span="8" :offset="2">
      <br>
        <h1 class="h1">
         CONSULTA TU DENUNCIA<br>
        </h1>
       <p>
        Si realizaste tu registro o pre registro,<br>
        ahora puedes consultar el estatus de la <br>
        denuncia.
      </p>
      <br>
    </el-col>
    <el-col :span="9" :offset="3">
      <br>
        <h1 class="h1">
         INICIA TU DENUNCIA<br>
        </h1>
       <p>
        Llena el formulario debajo para iniciar <br>
        con tu pre-registro del Formato<br>
        Único de Declaracion (FUD) y dar seguimiento <br>
        a tu denuncia.
      </p>
      <br>
    </el-col>
  </el-row>
    <el-row class="margin-bottom-2" type="flex" wstyle="width: 100% height: 50%" >
    <el-col :span="7" :offset="2">
    <strong>
      <el-card class="box-card">
        <div class="text item">
          <el-form
            status-icon
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="ID" prop="pass">
              <el-input class="elinput" v-model="consulta.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="FOLIO" prop="checkPass">
              <el-input
              class="elinput"
                autocomplete="off"
                v-model="consulta.folio"
              />
            </el-form-item>
            <el-form-item>
              <el-button class="butonclass" type="danger" @click.stop.prevent="consultarFUD()" plain>Buscar</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </strong>
  </el-col>
  <el-col :span="8" :offset="4">
  <strong>
      <el-card class="box-card">
        <div class="text item">
          <el-form
            status-icon
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="CURP" prop="pass">
              <el-input class="elinput" v-model="registro.curp" autocomplete="off" />
            </el-form-item>
            <el-form-item label="CORREO" v-model="registro.correo" prop="checkPass">
              <el-input
                class="elinput"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item>
              <el-button class="butonclass" type="danger" @click.stop.prevent="ruta()" plain>Buscar</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </strong>
    </el-col>
</el-row>
<footer class="footer">
  <div class="container px-4 px-lg-5"><p class="textfooter"><br>ESCOM &copy; FUD</p></div>
</footer>
 </div>
</template>
<script>
import axios from 'axios'
export default{
  
  data () {
    return {
      llave: 'valor',
      pagename: "FUD",
      consulta: {
        id: '',
        folio: ''
      },
      registro: {
        curp: '',
        correo: ''
      }
    }
  },
  methods: {
    async hola () {
      let response = await axios.get('prueba')
      this.llave = response.data
      console.log(this.llave)
    },
    async ruta(){
      this.$router.push({ name: 'about'})
    },
    async consultarFUD(){
      if(this.consulta.id=='' || this.consulta.folio==''){
            this.$message({
                showClose: false,
                message: 'Ingrese su ID y Folio para buscar su registro',
                type: 'error'
              })
          } else{
                await axios.post('/user/login',this.consulta).then(response =>{
                    if(response.data.success == false){
                        this.$message({
                            showClose: false,
                            message: 'No se pudo encontrar su registro',
                            type: 'error'
                          })
                    }else {
                        this.$message({
                        type: 'success',
                        showClose: false,
                        message: 'Registro Encontrado',
                      })
                      axios.defaults.headers.common['Authorization']=response.data.data['token_type'] + " " + response.data.data['access_token'];
                      localStorage.setItem('token',response.data.data['access_token'])
                      this.$router.push('about');
                    }
                  }
                )
            }
    },
    async pruebaruta(){
      this.$router.push('about')
    },
    async registrarFUD(){
      await axios.post('/user/login',this.consulta).then(response =>{
          console.log(response);
          if(this.consulta.id=='' || this.consulta.folio==''){
            this.$message({
                showClose: false,
                message: 'Ingrese su Curp y Correo para buscar su registro',
                type: 'error'
              })
          } else{

            if(response.data.success == false){
              this.$message({
                  showClose: false,
                  message: 'No se pudo encontrar su registro',
                  type: 'error'
                })
            }else {
              this.$message({
              type: 'success',
              showClose: false,
              message: 'Registro Encontrado',
            })
            }
          }
        }
      )
    }
  }

}
</script>
<style>

.h1{
  color: #0C231E;
}
.textop{
  font-size: 1.5rem;
  color:white;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
  

}
body{
  background-image: url("@/assets/images/bgfin.jpg");
  background-repeat: no-repeat;
  background-size: 110%;
 }
.head{
  background-color: #0C231E;
  align-items: flex-end;
  height: 60px;
}
.head2{
  background-color: #0f312a;
  align-items: flex-end;
  height: 60px;
}
.header-logo{
  width: 150px;
  height: 60px;
  background-color: #0C231E;
  border-color: #0C231E ;
}
.header-logo:hover {
  background: #0C231E;
  border-color: #0C231E ;
}
.header-logo:focus {
  background: #0C231E;
  border-color: #0C231E ;
}
.header-search{
  padding-left: 0px;
  width: 50px;
  height: 50px;
  background-color: #0C231E;
  border-color: #0C231E ;
}

.header-search:hover {
  background: #0C231E;
  border-color: #0C231E ;
}
.header-search:focus {
  background: #0C231E;
  border-color: #0C231E ;
}


.texto-config{
  font-size: 1.1rem;
  color:white;
}

.texto-config:hover{
  font-size: 1.1rem;
  color: rgb(61, 155, 255);
}
.texto-link{
  font-size: 1.1rem;
  color:white;
}
.texto-link:hover{
  font-size: 1.1rem;
  color:white;
}
.texto-link:visited{
  font-size: 1.1rem;
  color:white;
}
.texto-link:active{
  font-size: 1.1rem;
  color:white;
}
.el-link {
  color: hotpink;
}
.el-icon-s-home {
  font-size: 1.5rem;
  color:rgb(66, 66, 66);
}
.el-icon-s-home:hover{
  font-size: 1.5rem;
  color:rgb(66, 66, 66);
}
.el-icon-s-home:visited{
  font-size: 1.5rem;
  color:rgb(66, 66, 66);
}
.el-icon-s-home:active{
  font-size: 1.5rem;
  color:darkgray;
}


.el-icon-search {
  padding: 20px ;
  font-size: 1.9rem;
  color:white;
}

.el-icon-search:hover {
  font-size: 1.9rem;
  color:rgb(61, 155, 255);
}
.el-icon-search:visited {
  font-size: 1.9rem;
  color:white;
}

.el-icon-search:active {
  font-size: 1.9rem;
  color:white;
}

.el-icon-arrow-right{
  font-size: 1.2rem;
  color:rgb(66, 66, 66);
}

.el-icon-arrow-right:hover{
  font-size: 1.2rem;
  color:rgb(66, 66, 66);
}

.el-icon-arrow-right:visited{
  font-size: 1.2rem;
  color:rgb(66, 66, 66);
}

.el-icon-arrow-right:active{
  font-size: 1.2rem;
  color:rgb(66, 66, 66);
}

.el-card {
  border-width: thin;
  border-color: #0C231E ;
  background-color: #b8bebe ;
}
footer{
  background-color: #0f312a;
   align-items: flex-end;
   height: 120px;
}
.elinput{
  border: 1px solid black;
}
.elinput:focus{
  border: 1px solid black;
}

.textfooter{
  font-size: 1.5rem;
  color:white;
  text-align: center;
}

.butonclass{
  border: 1px solid rgb(248, 60, 35);
}
</style>
