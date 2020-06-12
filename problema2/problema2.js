

$(document).ready(function () {
    $("form strong").css("font-family",'Arial Black');
    $("form strong").css("font-size",'medium');
    $("form input").css("font-size",'medium');
    $("#submit").css("background-color",'lightgreen').css("border-color",'transparent')
        .click(function () {
            var nameInput = $('#Nume');
            var birthDateInput = $('#DataNasterii');
            var ageInput = $('#Varsta');
            var emailInput = $('#AdresaEmail');
            if (/[^a-zA-Z ]/.test(nameInput.val()) || nameInput.val() === ""){
                nameInput.addClass('invalid');
            }else{
                nameInput.attr('style','border-color:green').removeClass('invalid');
            }
            var inputDate = new Date(birthDateInput.val());
            var today = new Date();
            var pastDate = new Date(1900,0);
            if (inputDate.getTime() > today.getTime() || inputDate.getTime() <= pastDate.getTime() || isNaN(inputDate.getTime())){
                birthDateInput.addClass('invalid');
            }else{
                birthDateInput.attr('style','border-color:green').removeClass('invalid');
            }
            if (ageInput.val() <= 0 || ageInput.val() >= 150){
                ageInput.addClass('invalid');
            }else{
                ageInput.attr('style','border-color:green').removeClass('invalid');
            }

            if (/[ ]/.test(emailInput.val()) || emailInput.val() === ""){
                emailInput.addClass('invalid');
            }else{
                emailInput.attr('style','border-color:green').removeClass('invalid');
            }
            var errors =[];
            $('#form').find('input.invalid').each(function () {
                errors.push($(this).attr('id'));
                $(this).css('borderColor','red').css('borderSize','20px')
            });

            if ( errors.length !== 0){
                var alertMsg = "";
                var afterAlertMsg ="";
                if (errors.length === 1){
                    alertMsg = "Campul ";
                    afterAlertMsg = " nu este completat corect!";
                }
                else{
                    alertMsg = "Campurile ";
                    afterAlertMsg = " nu sunt completate corect!";
                }
                for (var i=0;i<errors.length;i++){
                    if(errors.length > 1 && i === errors.length-1){
                        alertMsg += " si "+errors[i];
                    }else if(errors.length > 1 && i === errors.length-2){
                        alertMsg += errors[i];
                    }
                    else if(errors.length > 1){
                        alertMsg += errors[i]+",";
                    }
                    else{
                        alertMsg += errors[i]
                    }
                }
                alert(alertMsg+afterAlertMsg);
                return false;
            }
            else{
                alert("Datele sunt completate corect!");
            }
        });
});



