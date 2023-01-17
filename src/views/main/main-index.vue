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
       <el-col :span="7" :offset="0" >
        <el-link class="texto-link" href="https://www.gob.mx/gobierno" >Ayuda</el-link>
        &nbsp;
        <el-link class="texto-link" href="https://www.gob.mx/gobierno" >Contacto</el-link>
        &nbsp;
         <el-dropdown >
           <span class="texto-config el-link">
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
         &nbsp;
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
    <div class="contenedorbody">
      <el-row class="margin-bottom-2"  >
        <el-col :span="7" :offset="4">
          <br>

          <el-carousel class="imgtam" :interval="5000" arrow="always">
            <el-carousel-item class="imgtam">
              <img class="imgtam"  src="@/assets/images/carousel0.jpg" >
            </el-carousel-item>
            <el-carousel-item class="imgtam" >
              <img class="imgtam" src="@/assets/images/carousel1.jpg">
            </el-carousel-item>
            <el-carousel-item class="imgtam">
              <img class="imgtam" src="@/assets/images/carousel2.jpg">
            </el-carousel-item>
            <el-carousel-item class="imgtam">
              <img class="imgtam" src="@/assets/images/carousel3.jpg">
            </el-carousel-item>
          </el-carousel>
          
          <br>
        </el-col>
        <el-col :span="8" :offset="4">
          <br><br>
            <div class="col-lg-4">
              <h1></h1>
              <p class="textoparrafos"> 
                El Registro Nacional de Víctimas <strong>(RENAVI)</strong> <br>
                te puede ayudar a hacer valer tus derechos.  <br>
                Consulta qué procesos podemos llevar a cabo <br> en apoyo a las víctimas. 
              </p>
              <br>
             <strong> <h1 class="h1"> Denuncia </h1></strong>
              <p class="textoparrafos"> Inicia tu proceso de denuncia <el-link class="el-link textolink" @click.stop.prevent="gotoReguster()"><strong>aquí</strong>,</el-link> <br> sólo necesitamos
                tu CURP y un correo electrónico.
            </p>
            </div>
          <br>
        </el-col>
      </el-row>
      <el-row class="margin-bottom-2"  >
        <el-col :span="10" :offset="8">
          <div class="centerpage text-white bg-secondary my-5 py-4 text-center">
            <div class=" "><p class="text-white m-0">Si ya iniciaste un proceso de denuncia, consúltalo ahora mismo. 
            <el-button
            class="botonconsulta centerpage"
             type="success"
             color="#626aef"
             @click.stop.prevent="gotoLogin()"
           >
           Consultar
         </el-button></p>
          </div>
          </div>
        </el-col>
      </el-row>

      <div>
        <br><br></div>
        <el-row class="margin-bottom-2"  >
          <el-col :span="6" :offset="2">
            <div class="col-md-4 mb-5">
              <el-card class="box-card">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">Manual del Personal</h2>
                        <p class="card-text">Conozca a detalle el proceso de llenado del Formato único de Declaración</p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Más información</a></div><br>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6" :offset="1">
            <div class="col-md-4 mb-5">
              <el-card class="box-card">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">Renavi</h2>
                        <p class="card-text"> Entra al portal oficial para conocer más sobre el registro nacional de víctimas </p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Más información</a></div><br>
                </div>
            </el-card>
          </div>
          </el-col>
          <el-col :span="6" :offset="1">
            <div class="col-md-4 mb-5">
              <el-card class="box-card">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">Derechos de las victimas</h2>
                        <p class="card-text">Infórmate de tus derechos como victima y asesórate</p>
                    </div>
                    <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Más información</a></div><br>
                </div>
            </el-card>
          </div><br><br>
          </el-col>
          
        </el-row>
        </div>

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
         consulta: {
           id: '',
           folio: ''
         }

       }
     },
     methods: {
       async hola () {
         let response = await axios.get('prueba')
         this.llave = response.data
         console.log(this.llave)
       },
       async gotoLogin(){
        this.$router.push({ name: 'login'})
      },
        async gotoReguster(){
          this.$router.push({ name: 'register'})
        },
       async logout () {
        await axios.get('/user/logout',this.consulta).then(response =>{
          console.log(response)
        }) .catch(() => {
          this.$message({
            type: 'info',
            message: 'Operacion cancelada'
          })
        })
        .finally(() => (
          this.$router.push('/')))
       },
       async consultarFUD(){
         await axios.post('/user/login',this.consulta).then(response =>{
             console.log(response);
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
     padding: px !important;
   
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
   
   footer{
    background-color: #0f312a;
     align-items: flex-end;
     height: 120px;
  }

  .textfooter{
    font-size: 1.5rem;
    color:white;
    text-align: center;
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
   .textoparrafos{
    font-size: 1.1rem;
    color:rgb(0, 0, 0);
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
     background-color: #f0f0f0;
   }
  
  .imgtam{
    width: 650px;
    height: 350px;
  }
  .box-card{
    width: 400px;
  }

  .textolink{
    font-size: 1.1rem;
  }

  
  .el-link{
    color:#00adc4;
  }
  
  .el-link:hover {
    color:#00adc4;
  }
  .el-link:visited {
    color:#00adc4;
  }
  
  .el-link:active {
    color:#00adc4;
  }

  .botonconsulta{
    padding: 0px;
    width: 75px;
    height: 20px;
    align-items: center;
    align-content: center;
    

  }

  .centerpage{
    align-items: center;
    align-content: center;
    offset: 20px;
  }


   </style>
   