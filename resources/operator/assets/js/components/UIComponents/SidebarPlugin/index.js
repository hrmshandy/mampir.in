import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Overview',
      icon: 'ti-panel',
      path: '/overview'
    },
    {
      name: 'Set Bonus Rule',
      icon: 'ti-user',
      path: '/stats'
    },{
      name: 'Discount Promotion',
      icon: 'ti-view-list-alt',
      path: '/discount'
    },
    {
      name: 'Edit Info/Gallery',
      icon: 'ti-text',
      path: '/info'
    },
    {
      name: 'Read Review/Photo',
      icon: 'ti-pencil-alt2',
      path: '/review'
    }
    /*{
      name: 'Discount Promotion',
      icon: 'ti-view-list-alt',
      path: '/table-list'
    },
    {
      name: 'Edit Info/Gallery',
      icon: 'ti-text',
      path: '/typography'
    },
    {
      name: 'Read Review/Photo',
      icon: 'ti-pencil-alt2',
      path: '/icons'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/notifications'
    }*/
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
