

const option= {
    animation:true,
    delay:15000,
    autohide:false
};
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
    const toast = new bootstrap.Toast(toastLiveExample,option)
    
    toast.show(true)
    })
}