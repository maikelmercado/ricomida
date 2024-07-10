$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })



    $('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente")
    });


    $('body').on('dblclick', 'h4', function () {
        $(this).css("color", 'red');

    
    });

    $('.card-title').click(function () {
        $('.card-text').toggle();
    });

});