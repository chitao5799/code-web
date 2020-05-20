// $(function(){
	$('.sub-menu-level2-8 .img').hover(function(){
		$(this).children('div.LayerMo').toggleClass('hienLayerMo');
		$(this).parent().parent().children('.text').children('.nameProduct').children('a').toggleClass('nameProductHovered');
	});
	$('.sub-menu-level2-8 .nameProduct a').hover(function(){
		$(this).parent().parent().parent().children('a').children('.img').children('div.LayerMo').toggleClass('hienLayerMo');
	});
	var isClickSearch=false;
	$('#ItemMenuSearch .iconSearch').click(function(){
		$('#ItemMenuSearch').children('.itemMenuSearch').toggleClass('showItemMenuSearch');
		if(isClickSearch==false){
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-times"></i>');
			isClickSearch=true;
		}
		else if(isClickSearch==true){
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-search"></i>');
			isClickSearch=false;
		}
		
	});

	// $(":not(#ItemMenuSearch,.iconSearch,.itemMenuSearch)").click(function(){
	// 		$('#ItemMenuSearch').children('.itemMenuSearch').removeClass('showItemMenuSearch');
	// });
// });