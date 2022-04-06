// pageYOffset- vertical olaraq window-nun 0px-den scroll-u hereket etdirib mueyyen yerde dayandigimiz yere qeder ki mesafeni teyin edir.
// offsetHeight- hansi elemente verilibse,onun height-nin,padding-top ve padding-bottom-nun,border-top ve border-bottom-nun cemidir(Margin daxil deyil).
// offsetTop- hansi elemente verilibse,onun ana elementi ile onun arasindaki mesafewni teyin edir.Bu mesafeye ovlad elemente verilen top ve margin-top,ana elemente verilen padding-top ve border-top daxildir.

window.addEventListener('scroll', _ => {
    let header = document.querySelector('header')
    let home = document.querySelector('.home')
    let about = document.querySelector('.about')
    let skill = document.querySelector('.skill')
    let footer = document.querySelector('footer')
    let body = document.querySelector('body')

    
    let scrollY = window.pageYOffset
    let toptobtn = document.querySelector('.toptobtn')


    toptobtn.innerHTML = scrollY + '<br>' + body.offsetTop + '<br>' + body.offsetHeight
  
})
