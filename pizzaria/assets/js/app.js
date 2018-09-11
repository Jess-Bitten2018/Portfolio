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

	    },
	 		
		/**
		* Função que carrega um modal na página.
		* @method helperCreateModal
		* @param = $title
		* @param = $content
		* @param = $id
		*/
        helperCreateModal: function($title = "", $content, $id){

			var $modal = '';
				$modal += '<section class="modal fade" id="'+$id+'" tabindex="-1" role="dialog" aria-hidden="true">';
				$modal += '<div class="modal-dialog" role="document">';
				$modal += '<div class="modal-content">';
				$modal += '<header class="modal-header">';
				if( $title != false ){
					$modal += '<h3 class="modal-title">'+$title+'</h3>';
				}
				$modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
				$modal += '<span aria-hidden="true">&times;</span>';			
				$modal += '</button>';			
				$modal += '</header>';
				$modal += '<div class="modal-body">'+$content+'</div>';
				$modal += '</div>';
				$modal += '</div>';
				$modal += '</section>';

			$("body").append($modal);	

			setTimeout(function(){
				$("#"+$id).modal("show");
			}, 200);

			//close modal			
			$("#"+$id).on('hidden.bs.modal', function (e) {
			  $("#"+$id).remove();
			});

		}

    };

	var $init = Init;
	$init.construct();

}(jQuery));