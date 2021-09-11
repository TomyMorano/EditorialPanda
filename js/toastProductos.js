var option= {
    animation:true,
    delay:15000,
    autohide:false
};
    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample,option)
    
    toast.show(true)
    })
}  