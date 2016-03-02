$(document).ready(function () {

	var fullpage_item_active,
	menu_page = $('#menu'),
	color_options;

	function add_color_menu (color){
		menu_page.removeClass();
		menu_page.addClass(color);
	};

	$('#fullpage').fullpage({
		sectionsColor: ['#FE7751', '#027381', '#0EB9CB', '#440C11'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
		menu: '#menu',
		scrollingSpeed: 1000,

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(index == 1){
                color_options = 'one-color-menu';
                add_color_menu (color_options);
            }
            if(index == 2){
                color_options = 'two-color-menu';
                add_color_menu (color_options);
            }
            if(index == 3){
                color_options = 'three-color-menu';
                add_color_menu (color_options);
            }
            if(index == 4){
                color_options = 'four-color-menu';
                add_color_menu (color_options);
            }
        }
	});
});