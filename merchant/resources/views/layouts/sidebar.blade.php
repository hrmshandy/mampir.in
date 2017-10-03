<aside class="l-sidebar">
    <div class="c-brand">
        <div class="c-brand__logo" style="background-image: url('/storage/merchant/logo/{{ $merchant->logo }}')"></div>
        <div class="c-brand__name">
            {{ $merchant->name }}
        </div>
    </div>

    <ul class="c-menu">
        <li class="c-menu__item">
            <a href="{{ url('/') }}" class="c-menu__link">
                <i class="c-menu__icon">
                    <svg class="o-svg-icon"><use xlink:href="#icon-home"></use></svg>
                </i>
                <span class="c-menu__text">Overview</span>
            </a>
        </li>

        <!-- Menu Group 1 -->
        <li class="c-menu__item c-menu__item--heading">
            Promo & Discount
        </li>
        <li class="c-menu__item">
            <a href="{{ url('bonus-rule') }}" class="c-menu__link">
                <i class="c-menu__icon">
                    <svg class="o-svg-icon"><use xlink:href="#icon-bonus"></use></svg>
                </i>
                <span class="c-menu__text">Set Bonus Rule</span>
            </a>
        </li>
        <li class="c-menu__item">
            <a href="{{ url('discount-promotion') }}" class="c-menu__link">
                <i class="c-menu__icon">
                    <svg class="o-svg-icon"><use xlink:href="#icon-discount"></use></svg>
                </i>
                <span class="c-menu__text">Discount Promotion</span>
            </a>
        </li>

        <!-- Menu Group 1 -->
        <li class="c-menu__item c-menu__item--heading">
            Merchant
        </li>
        <li class="c-menu__item">
            <a href="{{ url('edit-info') }}" class="c-menu__link">
                <i class="c-menu__icon">
                    <svg class="o-svg-icon"><use xlink:href="#icon-edit"></use></svg>
                </i>
                <span class="c-menu__text">Edit Info/Gallery</span>
            </a>
        </li>
        <li class="c-menu__item">
            <a href="{{ url('review') }}" class="c-menu__link">
                <i class="c-menu__icon">
                    <svg class="o-svg-icon"><use xlink:href="#icon-review"></use></svg>
                </i>
                <span class="c-menu__text">Read Review/Photo</span>
            </a>
        </li>
    </ul>
</aside>