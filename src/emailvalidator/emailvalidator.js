/**
 * @description Validates Email from form
 * @param   {Submit Action}    theForm  HTML action for submit of the form
 * @return  {Boolean}                   true/false
 */
function validateEmail(theForm) {
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)) return(true);
    alert('ERROR: Invalid e-mail address!');
    return(false);
}
