const option= {
    animation:true,
    delay:5000,
};
    const toastTrigger = document.querySelectorAll('.addToCart')
    for(let i=0;i<toastTrigger.length;i++){
        const toastLiveExample = document.querySelector(`.toast${i}`)
        if (toastTrigger[i]){
            toastTrigger[i].addEventListener('click', function (e) {
            e.preventDefault()
            const toast = new bootstrap.Toast(toastLiveExample,option)
            
            toast.show(true)
            })
        }
    }
