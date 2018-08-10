/**
 * @description Auto resizes textarea html element based on size of content
 * @event       listens to window on page load
 */
window.addEventListener("load", function() {
    // Don't use keypress event. keypress event doesn't detect backspace and delete keys. 
    window.document.querySelector("textarea").addEventListener("keydown", function() {
        const content = window.document.querySelector("textarea").value;
        window.document.querySelector("#divContainer").innerHTML = content;
        window.document.querySelector("textarea").style.height = window.document.querySelector("#divContainer").scrollHeight + "px";
    }, false);
}, false);