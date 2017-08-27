$('#my-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip(); 
});