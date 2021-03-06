# vue-sidebar-menu

A Vue.js Sidebar Menu Component

## Installation

```
npm i vue-sidebar-menu --save
```

Install the plugin globally.

```js
//main.js
import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)
```

Or import the component locally.

```js
//App.vue
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu
  }
}
```

from v3.0.0 you will need to import the style file in your project.

## Usage

```html
<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        // component: componentName
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user',
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```

### Vue-router Support

if you are using vue-router, the component will use `<router-link>` instead of hyperlink `<a>`

### Props

```js
props: {
    menu: {
        type: Array,
        required: true
    },
    collapsed: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: '350px'
    },
    widthCollapsed: {
        type: String,
        default: '50px'
    },
    showChild: {
        type: Boolean,
        default: false
    },
    theme: { // available themes: 'white-theme'
        type: String,
        default: ''
    }
}
```

### Events

```html
<sidebar-menu @collapse="onCollapse" />
```

### Styles

All styles customization can be done in normal CSS by using this classes

```css
.v-sidebar-menu {}
.v-sidebar-menu.vsm-default {}
.v-sidebar-menu.vsm-collapsed {}
.v-sidebar-menu .vsm-header {}
.v-sidebar-menu .vsm-list {}
.v-sidebar-menu .vsm-dropdown > .vsm-list {}
.v-sidebar-menu .vsm-item {}
.v-sidebar-menu .vsm-item.first-item {}
.v-sidebar-menu .vsm-item.mobile-item {}
.v-sidebar-menu .vsm-item.open-item {}
.v-sidebar-menu .vsm-item.active-item {}
.v-sidebar-menu .vsm-item.parent-active-item {}
.v-sidebar-menu .vsm-link {}
.v-sidebar-menu .vsm-title {}
.v-sidebar-menu .vsm-icon {}
.v-sidebar-menu .vsm-arrow {}
.v-sidebar-menu .vsm-arrow.open-arrow {}
.v-sidebar-menu .vsm-mobile-bg {}
.v-sidebar-menu .vsm-badge {}
```

or you can override Sass variables and create your own theme

```css
/*app.scss*/
@import "custom-var.scss";
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
```

## Demo

[vue-sidebar-menu-demo](https://yaminncco.github.io/vue-sidebar-menu/)

## Development

```
npm install
npm run dev
```
