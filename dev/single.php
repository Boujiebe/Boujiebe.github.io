<?php
/**
 * The Template for displaying all single posts
 */

get_header(); 
 while ( have_posts() ) : the_post(); 
?>

<div class="container blocks page sidebar">
	<section class='inner-container'>
		<?php 
			$prev = $_GET['prev'];
			include 'inc_headerPages.php';
		?>
		<div class='wysiwyg'>
		<?php the_content(); ?>
		</div>
		<footer>
			<?php if( have_rows('paginas') ):
			    while ( have_rows('paginas') ) : the_row();
			    $PostObject = get_sub_field('paginas_pagina');

			?>
		        <a href="<?php echo $PostObject->guid;?>?prev=<?php echo get_the_ID() ?>" class='btn rnd big'>
		        	<?php echo get_sub_field('paginas_titel') ? get_sub_field('paginas_titel') :$PostObject->post_title ?>
		        </a>
		    <?php
			    endwhile;
			endif;
			?>
		</footer>
	</section>
	<?php get_sidebar(); ?>
</div>

<?php 
endwhile; 
get_footer(); 
?>