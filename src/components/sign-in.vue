<script>
export default{
   data(){
    return{
      Pages:'home'
    }
   },
   methods:{
     searchButton(page){
      this.Pages=page
     }
   }
}
</script>
<template>
    <div class="row container" id="box" >
          <div class="col-6 " style="background-color: white;height: 100vh;margin-right: 0;">
            <i class="bi bi-x-lg"></i>
           <h3>Login</h3>
           <span>or <a href="#" class="a-tag">create an account</a></span>
           <p>___</p>
           <input type="number" placeholder="enter ur number" class="input-box">
           <div class="mt-4"><button class=" btn-lg btn text-center login-button">Login</button></div>
           <div style="width: 300px; font-size: 11px;"><span><b>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</b></span></div>
        </div>
    </div>
</template>
<style>
    .login-button{
        width: 300px;
        background-color: rgb(255, 68, 0);
    }
    .a-tag{
        color: rgb(255, 68, 0);
    }
    .input-box{
         width: 300px;
         height: 50px;
    }
</style>