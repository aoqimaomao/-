/**
 * Created by xuqiying on 16/9/11.
 */
$(function(){
    $("#header").find("button").click(function(){
        $("#window").slideToggle(400);
    });

    $(".draggable").draggable({

        helper:"clone",
        cursor: "move",
        revert: "true"
    });

    $("#screen").find("[id^='part']").droppable({
        //activeClass: "ui-state-hover",
        //hoverClass: "ui-state-active",
        drop:function(event,ui){
            $(this).children().remove();
            var source = ui.draggable.clone();
            $(source).find(".edit").css("display","none");
            $(source).find(".heading").css({"width":"100%","height":"16%","background":"#444","color":"#fff","position":"absolute","top":"0"});
            $(source).find(".part").css({"width":"100%","height":"84%","position":"absolute","top":"16%"});
            $(source).css({"width":"100%","padding":"0","height":"100%","position":"relative"});
            $(source).find(".block").css("border","#fff");
            $(this).append(source);


        }
    });
})