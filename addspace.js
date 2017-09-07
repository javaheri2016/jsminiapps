document.getElementById("input").addEventListener("blur", addSpace);
            
function addSpace() {
    x = document.getElementById("input");
    x.value = x.value.match(/\w{1,4}/g).join(' ')
}