$(document).ready(function () {
    var nrOptionsSelect = $("select").children().size()/2;
    $('select').attr('size',nrOptionsSelect);
    $('select option').dblclick(function () {
        var thisSelect = $(this).parent();
        var otherSelect = thisSelect.siblings()[0];
        var aux = $(this);
        $(this).remove();
        aux.appendTo(otherSelect);
    })
});
