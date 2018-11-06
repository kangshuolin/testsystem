/**
 * Created by admin on 2018/9/18.
 */
window.onload=function () {
    var aMi = document.querySelectorAll('.nav2 .inner .kai .hv'),
        aDmi = document.querySelectorAll('.nav2 .y-xm');


    var bannerUl=document.getElementById('banner-ul');
    var lis=bannerUl.children;
    var  img=document.getElementsByClassName('banner-tu');
    var  arr=document.getElementById('arr');
    var  zy=arr.children;
    var  timer=null;
    var   index=0;
    //console.log(lis);
    //console.log(img);
    //console.log(zy);
    function  tab(tits,conts,ev){
        for (let i = 0; i < tits.length; i++) {
            tits[i][ev]=function(){
                for (var j = 0; j < conts.length; j++) {
                    //console.log(tits[j]);
                    conts[j].classList.remove('active');
                    tits[j].classList.remove('active');
                }
                conts[i].classList.add('active');
                tits[i].classList.add('active');
                index = i;
            }

        }
    }
    tab(lis,img,'onclick');
    zy[1].onclick =right;
    function right(){
        index++;
        if(index>img.length-1){
            index=0;
        }
        for (var j = 0; j < img.length; j++) {
            img[j].classList.remove('active');
            lis[j].classList.remove('active');
        }
        img[index].classList.add('active');
        lis[index].classList.add('active');
    };
    zy[0].onclick = function(){
        index--;
        if(index<0){
            index=img.length-1;
        }
        for (var j = 0; j < img.length; j++) {
            img[j].classList.remove('active');
            lis[j].classList.remove('active');
        }
        img[index].classList.add('active');
        lis[index].classList.add('active');
    };
    timer = setInterval(right,1000);

    banner.onmouseover = function(){
        clearInterval(timer);
    };
    banner.onmouseout = function(){
        timer = setInterval(right,1000);
    };




    for (let i = 0; i <aMi.length; i++) {
        aMi[i].onmouseover = function () {
            aDmi[i].classList.add('now');
        };
        aMi[i].onmouseout = function () {
            aDmi[i].classList.remove('now');
        }
    }


};
