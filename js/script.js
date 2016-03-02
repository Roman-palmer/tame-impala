$(document).ready(function () {
	$('#fullpage').fullpage({
		sectionsColor: ['#FE7751', '#027381', '#0EB9CB', '#440C11'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
		menu: '#menu',
		scrollingSpeed: 1000

        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 2 && direction =='down'){
                alert("Going to section 3!");
            }

            else if(index == 2 && direction == 'up'){
                alert("Going to section 1!");
            }
        }
	});

	var fullpage_item_active,
		menu_page = $('#menu');
		color_options;

	$('#menu li a').on('click',function(){
		fullpage_item_active = $('#fullpage active').attr('id');
		switch (fullpage_item_active) {
		  case 'section0':
		  		color_options = 'one-color-menu';
		    break;
		  case 'section1':
				color_options = 'two-color-menu';
		    break;
		  case 'section2':
				color_options = 'three-color-menu';
		    break;
		  case 'section3':
				color_options = 'four-color-menu';
		    break;
		  default:
		    alert( 'ERROR' );
		}
		menu_page.removeClass();
		menu_page.addClass(color_options);
	});
});