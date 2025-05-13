'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Gallery item
	--------------------*/
	if($('.course-items-area').length > 0 ) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Realated courses
	--------------------*/
    $('.rc-slider').owlCarousel({
		autoplay:true,
		loop: true,
		nav:true,
		dots: false,
		margin: 30,
		navText: ['', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


    /*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);

$(document).ready(function () {
	const courses = [
        { name: 'Java Basics', page: 'java-basics.html' },
        { name: 'Java Advanced', page: 'java-advanced.html' },
        { name: 'Java Database Connectivity (JDBC)', page: 'java-database-connectivity-jdbc.html' },
        { name: 'Maven', page: 'maven.html' },
        { name: 'Hibernate', page: 'hibernate.html' },
        { name: 'Spring Basics with Spring Boot', page: 'spring-basics-with-spring-boot.html' },
        { name: 'Spring Data JPA with Spring Boot', page: 'spring-data-jpa-with-spring-boot.html' },
        { name: 'Spring REST with Spring Boot', page: 'spring-rest-with-spring-boot.html' },
        { name: 'Spring Microservices with Spring Boot', page: 'spring-microservices-with-spring-boot.html' }
    ];

    // Set up autocomplete for course input
    $("#courseInput").autocomplete({
        source: function(request, response) {
            const term = request.term.toLowerCase();
            const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(term));
            response(filteredCourses.map(course => course.name)); // Show course names only in dropdown
        },
        minLength: 1, // Start showing suggestions after typing at least one character
        autoFocus: true // Automatically focus on the first suggestion
    });

	$('.course-search-form').on('submit', function (e) {
		e.preventDefault(); // Prevent form submission

		const courseInput = $('#courseInput').val().toLowerCase();

		const matchedCourse = courses.find(course =>
            course.name.toLowerCase().includes(courseInput)
        );

		// If there's a match, redirect to the page of the course
		if (matchedCourse) {
			window.location.href = matchedCourse.page; // Redirect to the page
		} else {
			alert('No courses found matching your criteria.');
		}
	});
});