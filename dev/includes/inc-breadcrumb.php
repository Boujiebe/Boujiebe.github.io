<div class="breadcrumb rcrumbs" id="breadcrumbs" >
	<ul>
		<?php 
			if(isset($prev)) {
				$parentid = $prev;
			}else{
				$parentid = get_the_ID();
			}
		?>
       <li><a href="<?php echo home_url(); ?>">Home</a></li>
       <?php if(get_search_query()){ ?>
           <li>Zoek resultaat voor: <?php echo get_search_query();?></li>
       <?php  }else{ ?>
             	<?php 
             	$parents = get_ancestors( $parentid, 'page' ); 
             	foreach (array_reverse($parents) as $id) { ?>
             		<li><a href="<?php echo get_permalink($id);?>" ><?php echo get_the_title($id);?></a></li>
             	<?php } ?>
                  <?php if($parentid != get_the_ID()){ ?>
             	    <li><a href="<?php echo get_permalink($parentid);?>" ><?php echo get_the_title($parentid);?></a></li>
                  <?php } ?>
             <li><?php the_title();?></li>
       <?php } ?>
	</ul>
</div>