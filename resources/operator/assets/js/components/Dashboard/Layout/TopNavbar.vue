<template>
  <nav class="navbar navbar-default">
    <div class="custom-container">
      <div class="navbar-header">
        <a href="#" class="o-logo">
            <logo class="o-logo__desktop"></logo>
            <mobileLogo class="o-logo__mobile"></mobileLogo>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import Logo from '../../UIComponents/Logo.vue'
import mobileLogo from '../../UIComponents/LogoMobile.vue'

export default {
    components: { Logo, mobileLogo },
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
