<template>
  <div id="demo" :class="[{'collapsed' : collapsed}]">
    <div class="demo">
      <h1>Cachorros404</h1>
      <div>
      </div>
      <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
      <router-view/>
    </div>
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" />
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
      menu: [
        {
          header: true,
          title: 'Main Navigation'
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
      collapsed: false,
      themes: ['', 'default-theme'],
      selectedTheme: 'default-theme'
    }
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
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
  background-color: #f2f4f7;
}

#demo {
  padding-left: 350px;
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
</style>
