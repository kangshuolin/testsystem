/**
 * Created by admin on 2018/8/29.
 */
window.onload=function () {
    var aMi = document.querySelectorAll('.nav2 .inner .kai .hv'),
        aDmi = document.querySelectorAll('.nav2 .y-xm');
    var tits1= document.querySelectorAll('.banner .inner li'),
        conts1= document.querySelectorAll('.banner .inner .bt');

    var arrow = document.querySelector('.banner .inner .arrow');
    var zy = document.querySelectorAll('.banner .inner .arrow div');
    var index=0;

    var  tits2=document.querySelectorAll('.more .tab-list li');
    var  conts2=document.querySelectorAll('.inner2 .inner2-r .one');
    //console.log(tits2);
    //console.log(conts2);

    var aUl=document.getElementById('hua-wei');
    var aSan=document.getElementById('san');
    var aXsan=san.children;
    var timerId=null;
    var  dist2=0;
    //console.log(aXsan[0]);
    //console.log(aXsan[1]);

    var goUp = document.getElementById("goUp");
    var goDown = document.getElementById("goDown");
    var pic = document.getElementById("pic");
    var dist = 0;
    var timerId = null;


    var   ul1=document.getElementById('yi1');
    var   ulLis1=ul1.children;
    var   ulDian1=document.getElementById('dian1');
    var   ulDianL1=ulDian1.children;
    var   arr1=document.getElementById('arr1');
    var   zy21=arr1.children;
    var   wid1=document.getElementById('wid1');

    var   ul2=document.getElementById('yi2');
    var   ulLis2=ul2.children;
    var   ulDian2=document.getElementById('dian2');
    var   ulDianL2=ulDian2.children;
    var   arr2=document.getElementById('arr2');
    var   zy22=arr2.children;
    var   wid2=document.getElementById('wid2');

    var   ul3=document.getElementById('yi3');
    var   ulLis3=ul3.children;
    var   ulDian3=document.getElementById('dian3');
    var   ulDianL3=ulDian3.children;
    var   arr3=document.getElementById('arr3');
    var   zy23=arr3.children;
    var   wid3=document.getElementById('wid3');


    var   ul4=document.getElementById('yi4');
    var   ulLis4=ul4.children;
    var   ulDian4=document.getElementById('dian4');
    var   ulDianL4=ulDian4.children;
    var   arr4=document.getElementById('arr4');
    var   zy24=arr4.children;
    var   wid4=document.getElementById('wid4');


    var   box1=document.getElementById('box1');
    var   box2=document.getElementById('box2');
    var   box3=document.getElementById('box3');
    var  GDate=new Date(2018,9,20);
    var  t1=GDate.getTime();




    function  toDub(num){
        if(num<10){
            return  '0'+num;
        }
        else{
            return ''+num;
        }
    }
    function  clock(){
        var  NowDate=new Date();
//        document.write(NowDate);
        var t2=NowDate.getTime();
        var total=parseInt((t1-t2)/1000);
        var h=parseInt(total/3600);
        total=total%3600;
        var  m=parseInt(total/60);
        var  s=total%60;
        box1.innerHTML=toDub(h);
        box2.innerHTML=toDub(m);
        box3.innerHTML=toDub(s);
    }
    clock();
    setInterval(clock,1000);


    hua(ul1,ulLis1,ulDian1,ulDianL1,arr1,zy21, wid1);
    hua(ul2,ulLis2,ulDian2,ulDianL2,arr2,zy22, wid2);
    hua(ul3,ulLis3,ulDian3,ulDianL3,arr3,zy23, wid3);
    hua(ul4,ulLis4,ulDian4,ulDianL4,arr4,zy24, wid4);

  function  hua(ul,ulLis,ulDian,ulDianL,arr,zy2, wid){

    var   imgWidth=wid.offsetWidth;
    var  pic2=0;  //记录当前显示的图片的索引
    var square=0;   //记录当前亮起的按钮的索引
    var target = 0;
    zy2[1].onclick=function(){
        if(pic2===ulLis.length-1){
            ul.style.left=0;
            pic2=0;
        }
        else{
            pic2++;
            target=-pic2*imgWidth;
            animate(ul,30,target);
        }
        if(square<ulDianL.length-1){
            square++;
        }
        else{
            square=0;
        }
        for (var i = 0; i < ulDianL.length; i++) {
            ulDianL[i].classList.remove('pager-active');
        }
        ulDianL[square].classList.add('pager-active')
    };
    zy2[0].onclick=function(){
        if(pic2===0){
            ul.style.left=-(ulLis.length - 1) * imgWidth + "px";
            pic2 = ulLis.length - 1;
        }
        else{
            pic2--;
            target = -pic2 * imgWidth;
            animate(ul, 30, target);
        }
        if (square > 0) {
            square--;
        }
        else{
            square=ulDianL.length-1;
        }
        for (var i = 0; i <ulDianL.length; i++) {
            ulDianL[i].classList.remove('pager-active');
        }
        ulDianL[square].classList.add('pager-active')

    };
  }





    goUp.onmouseover=function(){
         clearInterval(timerId);
         timerId=setInterval(function(){
             dist--;
            if(dist>-314){
                pic.style.top=dist+'px';
            }
             else{
                clearInterval(timerId);
            }
         },15);

     };


    goDown.onmouseover=function(){
        clearInterval(timerId);
        timerId=setInterval(function(){
            dist++;
            if(dist<=0){
                pic.style.top=dist+'px';
            }
            else{
                clearInterval(timerId);
            }
        },15);
    };
    pic.parentNode.onmouseout=function(){
        clearInterval(timerId);
    };


    aXsan[1].onclick=function(){
        clearInterval(timerId);
        timerId=setInterval(function(){
            dist2+=12.72;
            if(dist2<0){
                aUl.style.left= dist2+'px';
            }
            else{
                clearInterval(timerId);
            }

        },5)
    };
    aXsan[0].onclick=function() {
        clearInterval(timerId);
        timerId=setInterval(function(){
            dist2-=12.72;
            if(dist2>-1272){
                aUl.style.left= dist2+'px';
            }
            else{
                clearInterval(timerId);
            }

        },5)

    };




    for (let i = 0; i <aMi.length; i++) {
        aMi[i].onmouseover = function () {
            aDmi[i].classList.add('now');
        }
        aMi[i].onmouseout = function () {
            aDmi[i].classList.remove('now');
        }
    }

    banner.onmouseover = function(){
        clearInterval(timer);
    };
    banner.onmouseout = function(){
        timer = setInterval(right,1000);
    };


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
    tab(tits1,conts1,'onclick');
    tab(tits2,conts2,'onmouseover');



    zy[1].onclick =right;
    function right(){
        index++;
        if(index>conts1.length-1){
            index=0;
        }
        for (var j = 0; j < conts1.length; j++) {
            conts1[j].classList.remove('active');
            tits1[j].classList.remove('active');
        }
        conts1[index].classList.add('active');
        tits1[index].classList.add('active');
    };
    zy[0].onclick = function(){
        index--;
        if(index<0){
            index=conts1.length-1;
        }
        for (var j = 0; j < conts1.length; j++) {
            conts1[j].classList.remove('active');
            tits1[j].classList.remove('active');
        }
        conts1[index].classList.add('active');
        tits1[index].classList.add('active');
    };





};