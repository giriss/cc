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
	/*
	var x=$("div")[1];
	var z=$(x).html();
	console.log(z)
	*/
	
	verticalCentre(document.getElementById("span_1"),document.getElementById("div_1"));
	verticalCentre(document.getElementById("span_2"),document.getElementById("div_2"));
	verticalCentre(document.getElementById("span_3"),document.getElementById("div_3"));
	verticalCentre(document.getElementById("span_4"),document.getElementById("div_4"));
	verticalCentre(document.getElementById("span_5"),document.getElementById("div_5"));
	verticalCentre(document.getElementById("span_6"),document.getElementById("div_6"));
	
	middleHeight();

	$("[contenteditable=\"true\"]").keyup(function(e) {
		middleHeight()
    });
	
	$("body").mouseover(function(e){
		middleHeight();
	})
	$("[contenteditable=\"true\"]").mouseup(function(e) {
		middleHeight()
    });
	$("[contenteditable=\"true\"]").mouseleave(function(e) {
		middleHeight()
    });
	
	$("#middle>div:nth-child(2)>div>div:nth-child(3)>span:nth-child(1)").click(function(e) {
		var num=$("#middle>div:nth-child(2)>div>div:nth-child(2)>div").length+1;
		var cont="<div>\
				<input class=\"t_tit\" type=\"text\" value=\"Step "+num+":&nbsp\" />\
				<span style=\"display: block;font-size: 0;line-height: 0;width: 556px;height: 1px;margin-left: -16px\"><img src=\"/static/pics/hr-line.png\" style=\"width: inherit\" /></span>\
				<div class=\"t_det\" contenteditable=\"true\">\
					&lt;!-- Explain the step "+num+" here --&gt;\
				</div>\
			</div>";
		$("#middle>div:nth-child(2)>div>div:nth-child(2)").append(cont); 
		middleHeight();
   	});
	
	$("#middle>div:nth-child(2)>div>div:nth-child(3)>span:nth-child(2)").click(function(e) {
		var num=$("#middle>div:nth-child(2)>div>div:nth-child(2)>div").length;
		if(num > 1){
			$("#middle>div:nth-child(2)>div>div:nth-child(2)>div:last-child").remove(); 
			middleHeight();
		}
    	});
	$("#middle>div:nth-child(2)>div>div:nth-child(3)>span:nth-child(3)").click(function(e) {
        var csrf = $("input[name='csrfmiddlewaretoken']").val()
		var length=$("#middle>div:nth-child(2)>div>div:nth-child(2)>div>input.t_tit").length;
		var count=0;
		var t_name=$("#middle > div:nth-child(2) > div > div:nth-child(1) > div > input").val();
		var tit="";
		var det="";
		while(count<length){
			count=count+1;
			tit+=$("#middle>div:nth-child(2)>div>div:nth-child(2)>div:nth-child("+count+")>input.t_tit").val()+"<!--I!L@o#v$e%A^n&s*h(i)_+-=-->";
			det+=$("#middle>div:nth-child(2)>div>div:nth-child(2)>div:nth-child("+count+")>div[contenteditable=\"true\"].t_det").html()+"<!--I!L@o#v$e%A^n&s*h(i)_+-=-->";
		}
		$.ajax({
			url:"/tut/add/",
			type:"POST",
			data:{"csrfmiddlewaretoken": csrf, "name":t_name,"title":tit,"detail":det},
			success: function(html){
				window.location = "/tut/"+html+"/";
			}
		})
	})
	
	$("#middle>div:nth-child(1)>span").mousedown(function(){
		$("#middle>div:nth-child(1)>span").removeClass("selected");
		$(this).addClass("selected");
		var n = parseInt($(this).attr("data-n"));
		var x;
		if(n>4)
		{
			x=n+2;
		}
		else if(n>1)
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
	})
	$("#middle>div:nth-child(1)>span").mouseup(function(){
		$(this).removeClass("selected");
		var n = parseInt($(this).attr("data-n"));
		var x;
		if(n>4)
		{
			x=n+2;
		}
		else if(n>1)
		{
			x=n+1;
		}
		else
		{
			x=n;
		};
		$("#middle>div:nth-child(1)>span:nth-child("+x+")>img:first-child").css("display","inline");
		$("#middle>div:nth-child(1)>span:nth-child("+x+")>img:nth-child(2)").css("display","none");
	})
	$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>button").click(function(){
		var title=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(1)").val();
		var style=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(2)").val();
		var category=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>input:nth-child(3)").val();
		var detail=$("#middle>div:nth-child(2)>div>div:nth-child(2)>form>textarea").val();
		$.ajax({
			url:"/tut/add/.php",
			data:{"title":title,"style":style,"category":category,"detail":detail},
			type:"POST",
			success:function(html){
				alert(html);
			}
		})
	})
});