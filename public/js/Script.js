
$(function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });

    //funcion para buscar en una tabla
    $.funcionBuscarenTabla = function(strCadena, strIdTabla) {
//        Se selecciona la tabla en la que se va a buscar la palabra
        var $objTabla = $('#' + strIdTabla);



//        Realizo la busqueda en todas las filas del tbody de la tabla
//        <tr>=fila
        $objTabla.find('tbody tr').each(function(iIndiceFila, objFila)
        {
            //Obtenemos todas las celdas de la fila
            var $objCeldas = $(objFila).find('td');

            //verificamos que la fila tenga celdas
            if ($objCeldas.length > 0) {
                var cadenaExiste = false;

                //recorremos todas las celdas de la fila actual
                $objCeldas.each(function(iIndiceCelda, objCeldaFila) {

                    //limpiamos la cadena que el usuario esta buscando (de caracteres que puedan chocar con
                    //codigo JavaScript, lo cual genera un error en runtime)
                    var objRex = new RegExp(RegExp.escape(strCadena), 'i');


                    //comparamos si la cadena buscada esta en la celda
                    if (objRex.test($(objCeldaFila).text())) {
                        //indicamos que hemos encontrado la cadena
                        cadenaExiste = true;
                        //salimos del bucle.						
                        return false;
                    }

                });
                if (cadenaExiste === true) {
                    $(objFila).show();
                }
                else {
                    $(objFila).hide();
                }

            }

        });

    };

//extendemos RegEx y agregamos un metodo que nos permita limpiar los caracteres
//que el usuario busca en la tabla, esto es para evitar errores de sintaxis en
//tiempo de ejecucion
    RegExp.escape = function(strCadena) {
        var strCaracteresEspeciales = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");
        //devolvemos la cadena limpia
        return strCadena.replace(strCaracteresEspeciales, "\\$&");

    };


    
    $('#txtBuscarNiacina').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tblTablaNiacina');
    });
    
    $('#txtBuscarRiboflavina').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tblTabla');
    });
    
    
    $('#txtBuscarTiamina').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tblTablaTiamina');
    });
  
    
    $('#txtBuscarTabla1').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla1');
    });
    
    $('#txtBuscarTabla2').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla2');
    });
    $('#txtBuscarTabla3').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla3');
    });
    $('#txtBuscarTabla4').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla4');
    });
    $('#txtBuscarTabla5').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla5');
    });
    $('#txtBuscarTabla6').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla6');
    });
    $('#txtBuscarTabla7').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla7');
    });
    $('#txtBuscarTabla8').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla8');
    });
    $('#txtBuscarTabla9').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla9');
    });
    $('#txtBuscarTabla10').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla10');
    });
    $('#txtBuscarTabla11').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tabla11');
    });
    
    //lista de estudiantes registrados
    $('#buscarEstudiante').keyup(function() {
        $.funcionBuscarenTabla($(this).val(), 'tableEstudiantes');
    });

});

function show_hide_panel(small, large) {
    var iconBtn = document.getElementById("iconBtnMenu");
    var cntSmall = document.getElementById(small);
    var cntLarge = document.getElementById(large);
    if (cntSmall.style.display === 'none') {
        $(cntSmall).show();
        $(cntLarge).removeClass("col-lg-8");
        $(cntSmall).removeClass("col-lg-0");
        $(cntLarge).addClass("col-lg-6");
        $(cntSmall).addClass("col-lg-3");
        $(iconBtn).removeClass("fa fa-arrow-circle-right");
        $(iconBtn).addClass("fa fa-arrow-circle-left");
    } else {
        $(cntSmall).hide();
        $(cntLarge).removeClass("col-lg-6");
        $(cntSmall).removeClass("col-lg-3");
        $(cntLarge).addClass("col-lg-8");
        $(cntSmall).addClass("col-lg-0");
        $(iconBtn).removeClass("fa fa-arrow-circle-left");
        $(iconBtn).addClass("fa fa-arrow-circle-right");
    }
};



$(document).ready(function() {

   

    $('.pag').on("click", function() {

        var paginacion = $(this).attr('paginacion');

        var div = "#page_" + paginacion;

        $("span[id!=" + div + "]").hide();

        $(div).fadeIn("slow");

    });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
});


$('#home a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});


$('.carousel').carousel()



$(document).ready(function(){/* copy loaded thumbnails into carousel */
$('.row .thumbnail').on('load', function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parents('div');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('.carousel-inner'); 
    if (i===0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
});

/* when clicking a thumbnail */
$('.row .thumbnail').click(function(){
    var idx = $(this).parents('div').index();
  	var id = parseInt(idx);
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	
});

});

