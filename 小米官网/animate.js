/**
 * Created by Administrator on 2016/7/25.
 */
/**
 * 能够让任意对象匀速移动到指定位置
 * @param obj
 * @param step
 * @param target
 */
function animate(obj, step, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        step = Math.abs(step);
        step = leader < target ? step : -step;
        //Math.abs(target - leader)  当前位置到目标的位置
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader += step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}

function animate1(obj,target){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var leader=obj.offsetLeft;//初始盒子距离左边的距离
        var step=(target-leader)/10;
        if(step>0){
            step=Math.ceil(step);
        }
        else{
            step=Math.floor(step);
        }
        leader=leader+step;
        obj.style.left=leader+'px';
        if(leader===target){
            clearInterval(obj.timer);
        }
    })
}