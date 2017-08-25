<template>
  <div class="wrapper">
    <notifications>

    </notifications>
    <div class="main-panel">
      <top-navbar></top-navbar>
      
      <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

      </side-bar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
