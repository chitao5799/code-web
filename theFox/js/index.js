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
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-times" id="btnSearch"></i>');
			isClickSearch=true;
		}
		else if(isClickSearch==true){
			$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-search" id="btnSearch"></i>');
			isClickSearch=false;
		}
		
	});
	window.onclick = function(event) {
		// khi form tìm kiếm hiện lên và click chuột ra ngoài form tìm kiếm thì cũng đóng form
			//	if (document.getElementsByClassName('showItemMenuSearch')[0]!==undefined && event.target !==$('#btnSearch path') && event.target!==$('#btnSearch') && event.target !==$('#ItemMenuSearch') && event.target!==$(".iconSearch") && event.target !==$('.itemMenuSearch') 

	       if (document.getElementsByClassName('showItemMenuSearch')[0]!==undefined && event.target !==$('#btnSearch path') 
	       	&& event.target.id !=='btnSearch' && event.target.id !=='ItemMenuSearch' && event.target.className !=="iconSearch"
	       	 && event.target.className[0] !=='itemMenuSearch'&& event.target.nodeName !=='INPUT'&& event.target.nodeName !=='path'
	       	 && event.target.className !=="input"&& event.target.className !=="itemMenuSearch showItemMenuSearch") 
	        {
	        //	alert('id là:'+event.target.id +"  class là:"+event.target.className+" node name"+event.target.nodeName);
	            $('#ItemMenuSearch').children('.itemMenuSearch').toggleClass('showItemMenuSearch');
	            if(isClickSearch==false){
					$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-times" id="btnSearch"></i>');
					isClickSearch=true;
				}
				else if(isClickSearch==true){
					$('#ItemMenuSearch').children('.iconSearch').html('<i class="fas fa-search" id="btnSearch"></i>');
					isClickSearch=false;
				}
	        }
	    }
		// $(":not(#ItemMenuSearch,.iconSearch,.itemMenuSearch)").click(function(){
		// 		$('#ItemMenuSearch').children('.itemMenuSearch').removeClass('showItemMenuSearch');
		// });
// });