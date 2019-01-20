<template>
<div>

<div class="nav">
<nav v-bind:class="active" v-on:click.prevent>
  <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
  <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
  <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
  <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
</nav>
</div>
<div class="div1">
<img src="demo/img/gc7.png" alt="logo cachorros">
</div>
<div class="grid">
<div class="contenedor1">
<div>
<h1> Redes sociales</h1>

</div>
<div>
<h1> FB</h1>

</div>

<div>

<h1> FB</h1>
</div>
</div>
      <div class="contenedor2">
      <div>
      <h1> Eventos</h1>
      </div>

      <div>
      <h1> FB</h1>
      </div>

      </div>
      <div class="contenedor1">

      </div>

</div>
  <div id="demo" :class="[{'collapsed' : collapsed}]">
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" />
  </div>

<div>

</div>
</div>

</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'app',
  data() {
    return {

      active: 'home',
      menu: [
        {
          header: true,
          title: 'Menú'
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/cursos',
          title: 'Cursos',
          icon: 'fa fa-table'
        },
        {
          href: '/configuracion',
          title: 'Configuracion',
          icon: 'fa fa-cog',

        },
        {
          header: true,
          component: separator,
        },
        {
          header: true,
          title: 'Other'
        },
        {
          title: 'Pages',
          icon: 'fa fa-file',
          href: '/auth',
          badge: {
            text: 'new',
          },
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'fa fa-lock'
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'fa fa-lock'
            },
            {
              href: '/auth/disabled',
              title: 'Disabled',
              icon: 'fa fa-unlock',
              disabled: true
            }
          ]
        },
        {
          href: '#',
          title: 'Mensajes',
          icon: 'fa fa-envelope'
        },
        {
          title: 'Algo mas',
          icon: 'fa fa-list-alt',
          child: [
            {
              href: '#',
              title: 'Page 01'
            },
            {
              title: 'Page 02',
              child: [
                {
                  href: '#',
                  title: 'Page 04'
                },
                {
                  href: '#',
                  title: 'Page 05'
                }
              ]
            },
            {
              href: '#',
              title: 'Page 03'
            },
            {
              title: 'Level 2',
              child: [
                {
                  href: '#',
                  title: 'Level 3',
                  child: [
                    {
                      href: '#',
                      title: 'Page'
                    },
                    {
                      href: '#',
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      collapsed: true,
      themes: ['', 'default-theme'],
      selectedTheme: 'default-theme'
    }
  },

  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
    },
    makeActive: function(item){
        this.active = item;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

#demo {
  padding-left: 350px;
  marging-top:50px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 50px;
}

.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}

.grid{
  display: grid;
  width: 100%;
  grid-template-rows: repeat(3, 100px);

}

.div1{

    display: center;
    margin-left:100px;
    margin-top: 20px;
    margin-right: auto;
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;

    position: relative;
    background: #ffff;
    background-size: .2em 100%;
    font: 40px Open Sans, Impact;

}

.nav{
display:grid;
margin: auto ;
margin-left: 49px;
box-shadow:0 1px 1px #ccc;
border-radius:2px;
background-color:#2a2a2e;
padding: 18px;
}

.nav a{
    padding: 18px 30px;
    color:#fff;
    font-weight:bold;
    font-size:16px;
    text-decoration:none;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}

.nav a:first-child{
    border-radius:2px 0 0 2px;
}

.nav a:last-child{
    border-radius:0 2px 2px 0;
}

.nav.home .home,
.nav.projects .projects,
.nav.services .services,
.nav .contact{
    background-color:#0000;
}

.contenedor1{
grid-template-columns: repeat(3, 1fr);
display: grid;
width: 100%;
margin-left: 50px;
margin-top: auto;
margin-bottom: auto;
grid-template-rows: repeat(1, auto);
grid-gap: 10px;
background-color: #fffff;

}

.contenedor2{
grid-template-columns: repeat(3, 1fr);
display: grid;
width: 100%;
margin-left: 50px;
margin-top: auto;
margin-bottom: auto;
grid-template-rows: repeat(1, auto);
grid-gap: 10px;
background-color: #EA785F;

}

</style>
