<template>
  <div>
     <!-- top navbar -->
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
              <a class="navbar-brand" href="#">
                
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <router-link class="nav-link nav-link-ltr"  to="/homepage" >Manage</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link tops nav-link-ltr"  to="/searchpage">Suvery</router-link>
                  </li>
                  <li class="nav-item"> 
                    <router-link class="nav-link nav-link-ltr" to="/searchpage">Chat</router-link>
                  </li>
                </ul>
                <div class="my-2 my-lg-0 px-2">
                  <!-- <p>logo</p> -->
                    <router-link to=""> 
                      <font-awesome-icon icon="fa-solid fa-circle-user" size="2xl" style="color:black" />
                    </router-link>
                </div>
              </div>
            </nav>
        </div>
        <!-- side navbar -->
        <div class="sidebars bg-white">
          <nav class="nav flex-column pt-3">
              <router-link class="nav-link sides py-3" to="/home">
              <font-awesome-icon icon="fa-solid fa-users" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/searchpage">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/doe">
                <font-awesome-icon icon="fa-solid fa-file" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/returnworker">
                <font-awesome-icon icon="person-walking-arrow-loop-left" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/register">
              <font-awesome-icon icon="fa-solid fa-user-plus"  size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewcv">
                <font-awesome-icon icon="fa-solid fa-user-check" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewworker">
                <font-awesome-icon icon="fa-solid fa-list-check" size="lg" />
              </router-link>
              <router-link class="nav-link sides py-3" to="/reviewmedical">
                <font-awesome-icon icon="fa-solid fa-house-medical-circle-check" size="lg" />
              </router-link>
              
          </nav>  
        </div>
  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>
.sidebars{
  width: 60px;
  height: 100vh;

  position: absolute;
  top:0;
}

.sidebars .nav{
  margin-top:100px ;
}

.nav-link {
  font-weight: bold;
  text-decoration: none;
  color: #031D44;
  padding: 20px; 
  /* /* margin: 0px 20px; */
  display: inline-block;
  position: relative;
  transition: 1s;
  /* opacity: 0.75; */
}


.nav-link:hover {
  opacity: 1;
  color:black;
}

.nav-link::before {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #031D44;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 80%;
  /* margin-right:10px ; */
}

.router-link-active.sides{
  background: rgba(18, 18, 244, 0.8);
  color:wheat;
  
}

.router-link-active .nav-link-ltr{
  background: black;
  color:wheat;
}
</style>