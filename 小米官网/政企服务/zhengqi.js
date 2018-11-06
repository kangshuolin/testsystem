/**
 * Created by admin on 2018/9/28.
 */
window.onload=function(){
    var warp=document.getElementById('warp');
    var cont=warp.children;
      console.log(cont);
    var tit=document.querySelectorAll('.warp .ding .tit');
    var timer=null;
    var imgWidth=document.documentElement.clientWidth;
    console.log(imgWidth);
    var   pic=0;
    var square = 0;

    var bian=document.getElementById('bian');
    var ch=bian.children;
    //console.log(ch);

    var paixu=document.getElementById('header');
    var alis=paixu.children;
    //console.log( alis);


    let pruducData=null;
    //原生js   利用ajax获取数据   4步骤
    //1.创建XMLHttpRequest实例
    let  xhr=new XMLHttpRequest();
    //2.打开与服务器的链接
    xhr.open('get','1.json',false);   //请求方式    url地址   false表示同步请求
    //3.等待服务器返回数据
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            pruducData=JSON.parse(xhr.responseText);
        }
    };

    //4.向服务器发送数据
    xhr.send();
    console.log(pruducData);


    //绑定数据
    let  str=``;  //空的模板字符串
    for (var i = 0; i < pruducData.length; i++) {
        let{title,price,time,hot,image}=pruducData[i];   //结构赋值
        str+=`<li  data-time="${time}" data-price="${price}" data-hot="${hot}">
        <a href="javascript:;">
        <img src="${image}" alt="">
        <p>${title}</p>
        <span>￥${price}</span>
        <span>热度：${hot}</span>
        <span>上架时间：${time}</span>

        </a>
        </li>`

    }
    list.innerHTML=str;



    var  pcont=list.getElementsByTagName('li');
    var  atit=header.getElementsByTagName('a');
    //console.log(atit);


    function Sort(tit,datas){
        var flag= 1;
        tit.onclick = function(){
            var arrList = [].slice.call(pcont);//将类数组转换为数组
            arrList.sort(function(a,b){
                if(datas==='data-time'){
                    var atime = new Date(a.getAttribute(datas)),
                        btime = new Date(b.getAttribute(datas));
                    var     a = atime.getTime(),
                        b = btime.getTime();
                }else{
                    var a = a.getAttribute(datas),
                        b = b.getAttribute(datas);
                }
                return (a-b)*flag;
            });
            for (var j = 0; j < arrList.length; j++) {
                list.appendChild(arrList[j]);//遍历添加到容器中
            }
            flag = -flag
        }
    }
    Sort(atit[0],'data-time');
    Sort(atit[1],'data-price');
    Sort(atit[2],'data-hot');


    for (let i = 0; i <ch.length; i++) {
        ch[i].onmouseover=function(){
        console.log(ch.length);
        for (var j = 0; j < ch.length; j++) {
          ch[j].classList.remove('active');
        }
        ch[i].classList.add('active');
    }
};




    tit[0].className="tit active";
      var firstImg=cont[0].cloneNode(true);
      warp.appendChild(firstImg);
      //console.log(cont.length);

      var target = 0;
    for (var i = 0; i < tit.length; i++) {
        tit[i].index = i;
        tit[i].onclick = function () {
            for (var j = 0; j < tit.length; j++) {
                tit[j].className = "tit";
            }
            this.className = "tit active";

            target = -this.index * imgWidth;
            animate(warp, 30, target);
            pic = square = this.index;
        };
    }
    function right(){
        if (pic === cont.length - 1) {
            warp.style.left = 0;
            pic = 0;
        }
        pic++;
        target = -pic * imgWidth;
        animate(warp, 30, target);
        if (square < tit.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i <tit.length; i++) {
            tit[i].className = "tit";
        }
        tit[square].className = "tit active";
    };



      banner.onmouseover = function(){
          clearInterval(timer);
      };
      banner.onmouseout = function(){
          timer = setInterval(right,2000);
      };


  };
