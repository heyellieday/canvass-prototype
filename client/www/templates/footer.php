<footer class="content-info" role="contentinfo">
  <div class="container">
    <?php dynamic_sidebar('sidebar-footer'); ?>
    <div class="row">
	    <div class="col-sm-4">
		    <nav class=" navFooter hidden-sm hidden-xs" role="navigation">
		            <?php
		              if (has_nav_menu('primary_navigation')) :
		                wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
		              endif;
		            ?>
		    </nav>
		    <nav class=" navFooter visible-sm hidden-xs" role="navigation">
		            <?php
		              if (has_nav_menu('primary_navigation')) :
		                wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav small'));
		              endif;
		            ?>
		    </nav>
		</div>
		<div class="col-sm-8 hidden-sm hidden-xs">
			<h3 class="quote">“What you have to do is work with the raw material you have, namely you, and never let up.”</h3>  - <h3>Helen Gurley Brown</h3>
		</div>
		<div class="col-sm-8 visible-sm visible-xs">
			<h3 class="quoteSmall">“What you have to do is work with the raw material you have, namely you, and never let up.”  - Helen Gurley Brown</h3>
		</div>
	</div>
 </div>
</footer>

<?php wp_footer(); ?>
