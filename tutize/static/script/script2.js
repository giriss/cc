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
	var h1=398;
	var h2=$("#middle>div:nth-child(2)").innerHeight();
	var h3=$("#middle>div:nth-child(3)").innerHeight();
	var largst_H=largestH(h1,h2,h3);
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
}
$(function(e){
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
	
	$("#middle>div:nth-child(2)>div>div:nth-child(2)>div:not(.num)").click(function(e){
		var id=$(this).attr("data-id");
		window.location="/tut/"+id+"/";
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