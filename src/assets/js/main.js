$(window).on('load',function(){
	//chose type
	var list= document.querySelectorAll('.filter>li>img');
	var oldSrc=list.src;
	//get oldUrl:
	function getOldUrl(obj){
		var oldUrl=[]
		for (let i=0;i<obj.length;i++){
			oldUrl.push(obj[i].src);
		}
		return oldUrl;
	}

	var oldUrl=getOldUrl(list);
	// console.log(oldUrl);
	for (let i=0; i<list.length;i++){
		list[i].onclick=function(){
			console.log('clicked');
			//remove effect
			for(let j=0;j<list.length;j++){
				list[j].src=oldUrl[j];
				list[j].classList.remove('chosen');
			}
			list[i].classList.add('chosen');
			let newUrl='./src/assets/img/items/'+(i+1)+'-active.png'
			list[i].src=newUrl;
		};
	}

	//display popup
	var baovat=$('.baovat');
	baovat.click(function(e){
		e.preventDefault();
		var attr=this.getAttribute('data-name');
		for( let i=0; i<$('.carousel-item').length;i++){
			if($('.carousel-item')[i].getAttribute('data-name')==attr){
				$('.carousel-item')[i].classList.add('active')
			}
		}
		$('.black-div').addClass('show-popup');
		$('.slide-popup').addClass('show-popup');
	})

	//remove slide
	$('.black-div').click(function(){
		console.log('clicked on black')
		$('.black-div').removeClass('show-popup');
		$('.slide-popup').removeClass('show-popup');
		for( let i=0; i<$('.carousel-item').length;i++){
				$('.carousel-item')[i].classList.remove('active')
		}
	})
})