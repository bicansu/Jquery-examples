//Each istediğimiz yerde istediğimiz özelliği atayabiliriz.
$(document).redy(function(){
    $('#button').click(function(){
       var paragraf_birlestir = ''; 
     
       $('input[type="text"]').each(function(each){
             paragraf_birlestir += $(this).val() + ' ';
       });
       $('#paragraf').text(paragraf_birlestir);
    });
});
