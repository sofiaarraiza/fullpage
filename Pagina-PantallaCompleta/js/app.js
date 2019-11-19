const seccionesPagina = new fullpage ("#fullpage", {
    
    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
    loopBottom: false,
    
    //menu de navegacion con circulitos
    navigation: true,
	menu: '#menu', //id que le pusimos a la ul
	anchors: ['home', 'portfolio', 'contacto'], //secciones
	navigationTooltips: ['home', 'portfolio', 'contacto'], //lo que va a decir cada sección
    showActiveTooltip: false,
    
    sectionsColor : ['#000', '#c2c2c2', '#000'], //color de fondo por defecto
    verticalCentered: true,
    
    controlArrows: true,
    slidesNavigation: false,
    afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer').querySelector('h2').style.opacity = 1;
		}
	}
});
