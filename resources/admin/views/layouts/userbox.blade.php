<div id="userbox" class="userbox">
    <a href="#" data-toggle="dropdown">
        <figure class="profile-picture">
            <img src="/admin/images/!logged-user.jpg" alt="Joseph Doe" class="img-circle"
                 data-lock-picture="/admin/images/!logged-user.jpg"/>
        </figure>
        <div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
            <span class="name">{{ auth()->user()->name }}</span>
            {{--<span class="role">administrator</span>--}}
        </div>

        <i class="fa custom-caret"></i>
    </a>

    <div class="dropdown-menu">
        <ul class="list-unstyled">
            <li class="divider"></li>
            {{--<li>--}}
            {{--<a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i class="fa fa-user"></i> My Profile</a>--}}
            {{--</li>--}}
            {{--<li>--}}
            {{--<a role="menuitem" tabindex="-1" href="#" data-lock-screen="true"><i class="fa fa-lock"></i> Lock Screen</a>--}}
            {{--</li>--}}
            <li>
                <a role="menuitem" tabindex="-1" href="#"
                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="fa fa-power-off"></i> Logout
                </a>
                <form id="logout-form" action="{{ url('_admin/logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </li>
        </ul>
    </div>
</div>
