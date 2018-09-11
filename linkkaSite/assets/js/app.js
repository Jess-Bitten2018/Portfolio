/**
 * Arquivos que possui as funções responsaveis por manipular
 * o DOM e os Eventos da página.
 */  

(function ($) {
    "use strict";

    var Init = {

    	$functionTimeOut: '',

		/**
		 * Função que inicia os métodos quando a página é carregada.
		 * @method construct
		 */   
	    construct: function(){
	    	this.helperCheckPostionSession();
	    	this.helperAnchorAnimateHash();
	    	this.helperAnimeScrollSection();
	    },

	    helperVideoBg: function(){

	    },

	    /**
		* Função que verifica se a página do mapa ou galeria com 2 fotos, foram inseridas na ultima posição da session.
		* @method helperCheckPostionSession
		*/
	    helperCheckPostionSession: function(){

	    	var $last = $(".session-contato");

	    	if( $last.closest("div.session:last-child").length ){
	    		$last.closest("section.session").addClass("no-padding-bott")
	    	}

	    },

		 /**
	    * Função que habilita os links com ancora com scroll suave.
	    * @method anchorAnimateHash
	    */
	    helperAnchorAnimateHash: function(){
	    	var $y = 0;
	    	setTimeout(function() {
		    	var $target = window.location.hash;	    		
			    if ($target) {
			        var $targetIn = $($target);
			        $('html, body').stop().animate({
			            scrollTop: $targetIn.offset().top - $y
			        }, 1000, 'swing', function() {
			            //window.location.hash = $target;
			        });
			    }
		    }, 1);

			//Evento clique que captura links com hash
		    $("a[rel*=\\#]").on("click", function(e){     
			    
			    var $anchor = $(this).attr("rel"),
			    	$posScroll = $anchor == "#inicio" ? 0 : $($anchor).offset().top - $y;


		    	if( $("*").is($anchor) ){

		    		if($("body").hasClass("menu-resp-active")){
		    			$("body").removeClass("menu-resp-active");
		    			$("body .mask-menu").remove();
		    		}

				    $("html,body").animate({scrollTop: $posScroll}, 1000, function(){
				    	e.preventDefault();	
				    	location.hash = $anchor != "#inicio" ? $anchor : "";
				    	$(document).scrollTop($posScroll);
				    });

				    e.preventDefault();		
			   }
			    
			});

	    },

	    /**
	    * Função que verifica em que section estamos no scroll.
	    * @method helperCheckIfSection
	    */
	    helperCheckIfSection: function(){

	    	if($(".effin").length) {

		    	var $windowHeight = $(window).height(),
					$windowTopPosition = $(window).scrollTop(),
					$windowBottomPosition = ($windowTopPosition + $windowHeight);

				$.each($('.effin'), function() {
					var $element = $(this),
						$elementID = $element.closest(".session").attr("id"),
						$elementHeight = $element.outerHeight(),
						$elementTopPosition = $element.offset().top,
						$elementBottomPosition = ($elementTopPosition + $elementHeight);

					if (($elementBottomPosition >= $windowTopPosition) &&
					    ($elementTopPosition <= $windowBottomPosition)) {

					  	$element.addClass('view-in');	
		
					}
					if ( $elementTopPosition >= $windowBottomPosition ) {
							$element.removeClass('view-in');
					}
				});

			}

	    },

	    /**
	    * Função que inicia o processo de animação no scroll.
	    * @method helperAnimeScrollSection
	    */
		helperAnimeScrollSection: function(){
			$(window).on('scroll resize', Init.helperCheckIfSection);
			$(window).trigger('scroll');
		},

		/**
		* Função que cria um load em SVG.
		* @method loadingHTML
		*/
		helperLoadAjax: function(){
			var $loadingHTML = '';
			  	$loadingHTML += '<div id="send-ajax">';
		  		$loadingHTML += '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve">';
		  		$loadingHTML +=	'<g transform="rotate(20.003 64 64)">';
		  		$loadingHTML += '<path fill="#63b6ed" fill-opacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="720ms" repeatCount="indefinite"/>';
		  		$loadingHTML +=	'</g>';
		  		$loadingHTML +=	'</svg>';
		  		$loadingHTML +=	'<div>';

		  	return $loadingHTML;
		}

    };

	var $init = Init;
	$init.construct();

}(jQuery));