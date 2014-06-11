<div class="container">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <header class="banner navbar" role="banner">
          <a href="/"><img src="<?php echo get_bloginfo('template_directory');?>/assets/img/cityandthesinglegirl.png"></a>

          <nav class=" navLinks visible-sm" role="navigation">
            <?php
              if (has_nav_menu('primary_navigation')) :
                wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav small'));
              endif;
            ?>
          </nav>
          <nav class=" navLinks hidden-sm" role="navigation">
            <?php
              if (has_nav_menu('primary_navigation')) :
                wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
              endif;
            ?>
          </nav>
          <div class="welcome">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus ac massa vestibulum rhoncus. Curabitur dignissim pharetra ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque nec ultricies velit, at pretium purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,</p>
          </div>
      </header>
    </div>
    <div class="col-sm-2">
    </div>
  </div>
</div>
