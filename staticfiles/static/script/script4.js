var verticalCentre = function (a,b)
	{
	var c=$(b).height();
	var d=$(a).height();
	var e=(c/2)-d/2;
	$(a).css("margin-top",e+'px')
}
var largestH=function(h1,h2,h3)
{
	if(h1>h2)
	{
		if(h1>h3)
		{
			return h1
		}
		else
		{
			return h3
		}
	}else
	{
		if(h2>h3)
		{
			return h2
		}
		else
		{
			return h3
		}
	}
};
var middleHeight = function()
{
    if(window._theme_ == "2"){
        var title_h = $("#middle > div:nth-child(2) > div > div:nth-child(1)").height()+31;
        var tut_div_height = $(window).height()-64-25-62-15-title_h;
        if(tut_div_height > 200){
            $("#tut_content").css("height",(tut_div_height)+"px")  //try also maxHeight
        }
    }
    var dh=$(window).height()-64-25;
    var largst_H=$("#middle>div:nth-child(2)").innerHeight();
    if(dh>largst_H)
    {
        $("#middle>div:nth-child(1)").innerHeight(dh);
        $("#middle>div:nth-child(3)").innerHeight(dh);
        $("#middle").innerHeight(dh);
    }
    else
    {
        $("#middle>div:nth-child(1)").innerHeight(largst_H);
        $("#middle>div:nth-child(3)").innerHeight(largst_H);
        $("#middle").innerHeight(largst_H);
    }
	if($("#middle>div:nth-child(2)>div>div:nth-child(2)").length > 1)
	{
		$("#middle>div:nth-child(2)>div>div:nth-child(2)>div>div[contenteditable=\"true\"].t_det").html("");
	}
};
$(function(e){

    $(document).mouseover(function(){
        middleHeight()
    })

    if(window._theme_ == "2"){
        $("#tut_content>div:nth-child(1)").css("display", "block");
        $("#middle>div:nth-child(2)").css("paddingBottom", "0")
    }else{
        $("#tut_content>div").css("display", "block");
        $("#next_prev").css("display", "none");
    }

    var initial_step = 1;
    $("#next_step").click(function(){
        if(window._numStep_ == initial_step){
            alert("No more slides available")
        }else{
            if($("#tut_content>div:nth-child("+initial_step+")").css("opacity") == "1"){
                $("#tut_content>div:nth-child("+initial_step+")").fadeOut(500, function(){
                    initial_step = initial_step + 1
                    $("#tut_content>div:nth-child("+initial_step+")").fadeIn(500, function(){
                        middleHeight()
                    })
                })
            }
        }
    });
    $("#prev_step").click(function(){
        if(initial_step == 1){
            alert("No previous slides available")
        }else{
            if($("#tut_content>div:nth-child("+initial_step+")").css("opacity") == "1"){
                $("#tut_content>div:nth-child("+initial_step+")").fadeOut(500, function(){
                    initial_step = initial_step - 1
                    $("#tut_content>div:nth-child("+initial_step+")").fadeIn(500, function(){
                        middleHeight()
                    })
                })
            }
        }
    });

	$.ajax({
		url:"other/appendViews.php",
		type:"POST",
		data:{"t_id":window._G_tutorialID}		
	});
	
	verticalCentre(document.getElementById("span_1"),document.getElementById("div_1"));
	verticalCentre(document.getElementById("span_2"),document.getElementById("div_2"));
	verticalCentre(document.getElementById("span_3"),document.getElementById("div_3"));
	verticalCentre(document.getElementById("span_4"),document.getElementById("div_4"));
	verticalCentre(document.getElementById("span_5"),document.getElementById("div_5"));
	verticalCentre(document.getElementById("span_6"),document.getElementById("div_6"));
	
	middleHeight();
	
	$("#middle>div:nth-child(1)>span").click(function(){
		$("#middle>div:nth-child(1)>span").removeClass("selected");
		$(this).addClass("selected");
		$("#middle>div:nth-child(2)>div").removeClass("display");
		var n = parseInt($(this).attr("data-n"));
		var x;
		if(n>6)
		{
			x=n+2;
		}
		else if(n>4)
		{
			x=n+1;
		}
		else
		{
			x=n;
		};
		$("#middle>div:nth-child(1)>span>img:first-child").css("display","inline");
		$("#middle>div:nth-child(1)>span>img:nth-child(2)").css("display","none");
		$("#middle>div:nth-child(1)>span:nth-child("+x+")>img:first-child").css("display","none");
		$("#middle>div:nth-child(1)>span:nth-child("+x+")>img:nth-child(2)").css("display","inline");
		$("#middle>div:nth-child(2)>div:nth-child("+n+")").addClass("display");
		middleHeight();
	})
	
	$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>button").click(function(){
		var title=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(1)").val();
		var style=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(2)").val();
		var category=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(3)").val();
		var detail=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>textarea").val();
		$.ajax({
			url:"t_xml.php",
			data:{"title":title,"style":style,"category":category,"detail":detail},
			type:"POST",
			success:function(html){
				alert(html);
			}
		})
	})
});