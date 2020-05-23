// $(function(){
	$(window).scroll(function() {
		if($('#wrapper-menu-head').offset().top >=53){
			$('.contain-menu').addClass('menuCrollFixedTop');
		}
		else{
			$('.contain-menu').removeClass('menuCrollFixedTop');
		}
	});
	//------------
	$('.sub-menu-level2-8 .img').hover(function(){
		$(this).children('div.LayerMo').toggleClass('hienLayerMo');
		$(this).parent().parent().children('.text').children('.nameProduct').children('a').toggleClass('nameProductHovered');
	});
	$('.sub-menu-level2-8 .nameProduct a').hover(function(){
		$(this).parent().parent().parent().children('a').children('.img').children('div.LayerMo').toggleClass('hienLayerMo');
	});
	// ========================js cho click button search========================
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

		//  ========================js cho slide========================
		var slideHienTai=1; //silde co thuoc tinh active
		var slideFirst=$('.oneSlide').first();
		var slideLastest=$('.oneSlide').last();
		$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
		$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
		$('.containBtnRight').click(function(envent){
				slideNext();
			});
		// setInterval(function(){ 
		// 	slideNext();
		// }, 5000);
		function slideNext(){
			slideHienTai+=1;
				if(slideHienTai===4){
					slideHienTai=1;
				}

				//thiết lập màu nền/ảnh nền cho các cái khung mở ra ở nút chuển slide, nó sẽ là màu nền/ảnh nền của slide tiếp theo
				if(slideHienTai===1){
					//đường dẫn ảnh sẽ tính từ file gọi file js này, ở đây là file index.html
					$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
				    $('#wrapperSlideAdvert .openRight').css("background-color",'');//remove attr background-color
					$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}
				else if(slideHienTai===2){
					$('#wrapperSlideAdvert .openRight').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openRight').css("background-color",'');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image",'');
				}
				else if(slideHienTai===3){
					$('#wrapperSlideAdvert .openRight').css("background-image",'');//remove attr background-image
					$('#wrapperSlideAdvert .openRight').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image","url('./images/slider_bg81.jpg')");
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}


				if(slideHienTai===1){
					slideLastest.addClass('bien_mat_sang_trai');
					slideFirst.addClass('di_vao_tu_ben_phai');
				}
				else{
					var slideSau=$('.slideActive').next();
					$('.slideActive').addClass('bien_mat_sang_trai');//.one('webkitAnimationEnd',function(envent)
					slideSau.addClass('di_vao_tu_ben_phai');
				}
				// setTimeout(function()//đợi 1s cho chạy song cái animation đi vào và biến mất
				// {
					 $('.bien_mat_sang_trai').removeClass('bien_mat_sang_trai');
					//bỏ class active của slide vừa biến mất sang trái
					$('.slideActive').removeClass('slideActive');
					//cho slide mới đi từ phải vào class active
					$('.di_vao_tu_ben_phai').addClass('slideActive').removeClass('di_vao_tu_ben_phai');
				//}, 1000);

		}

		$('.containBtnLeft').click(function(envent){
				slideHienTai-=1;
				if(slideHienTai===0){	
					slideHienTai=3;
				}

				if(slideHienTai===1){
					//đường dẫn ảnh sẽ tính từ file gọi file js này, ở đây là file index.html
					$('#wrapperSlideAdvert .openRight').css("background-image","url('./images/slider_bg81.jpg')");
				    $('#wrapperSlideAdvert .openRight').css("background-color",'');//remove attr background-color
					$('#wrapperSlideAdvert .openLeft').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}
				else if(slideHienTai===2){
					$('#wrapperSlideAdvert .openRight').css("background-image",'url("./images/slider_bg71.jpg")');
					$('#wrapperSlideAdvert .openRight').css("background-color",'');
					$('#wrapperSlideAdvert .openLeft').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image",'');
				}
				else if(slideHienTai===3){
					$('#wrapperSlideAdvert .openRight').css("background-image",'');//remove attr background-image
					$('#wrapperSlideAdvert .openRight').css("background-color",'#FE81B5');
					$('#wrapperSlideAdvert .openLeft').css("background-image","url('./images/slider_bg81.jpg')");
					$('#wrapperSlideAdvert .openLeft').css("background-color",'');
				}

				if(slideHienTai===3){
					slideLastest.addClass('di_vao_tu_ben_trai');
					slideFirst.addClass('bien_mat_sang_phai');
				}
				else{
					var slideTruoc=$('.slideActive').prev();
					$('.slideActive').addClass('bien_mat_sang_phai');
					slideTruoc.addClass('di_vao_tu_ben_trai');
				}
				//setTimeout(function(){
						$('.bien_mat_sang_phai').removeClass('bien_mat_sang_phai');
						$('.slideActive').removeClass('slideActive');
						$('.di_vao_tu_ben_trai').addClass('slideActive').removeClass('di_vao_tu_ben_trai');
					//}, 1000);
			});
// });