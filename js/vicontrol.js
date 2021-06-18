document.addEventListener("DOMContentLoaded", function(){
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const play = document.querySelector('#play');
    const stop = document.querySelector('#stop');

    let item = document.querySelectorAll('.swiper-slide');

    console.log("item.length ====> " + item.length);

    item.forEach(img => {
        console.log(img);
    });

    // prev.addEventListener("click",function(){
    //     alert("이전");
    // });

    // next.addEventListener("click",function(){
    //     alert("이전");
    // });

    // play.addEventListener("click",function(){
    //     alert("이전");
    // });

    // stop.addEventListener("click",function(){
    //     alert("이전");
    // });

});
