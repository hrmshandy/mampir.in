<aside id="sidebar-left" class="sidebar-left">
  <div class="sidebar-header">
    <div class="sidebar-title">
      Navigation
    </div>
    <div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
      <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
    </div>
  </div>

  <div class="nano">
    <div class="nano-content">

      @include('admin::layouts.menu')

    <script>
      // Maintain Scroll Position
      if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem('sidebar-left-position') !== null) {
          var initialPosition = localStorage.getItem('sidebar-left-position'),
            sidebarLeft = document.querySelector('#sidebar-left .nano-content');

          sidebarLeft.scrollTop = initialPosition;
        }
      }
    </script>

  </div>

</aside>
