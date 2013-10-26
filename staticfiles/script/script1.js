function middleCenter()
	{
	if(window.innerHeight>512)
		{
		var a=(window.innerHeight-367-58-64)/2;
		jQuery("#middle").css("margin",(a-10)+'px auto '+(a+10)+'px auto')
	}
	else
		{
		$("#middle").css("margin",'10px auto 26px auto');
		$("#bottom").css("margin",'0px auto 10px auto')
	}
}
$(function(e)
	{
	middleCenter()
}
);
function submitform(a)
	{
	$("#"+a).trigger("click");
	return false
}
function divHeight(a,b)
	{
	var c=new Array();
	c=b.split(" ");
	var d=c.length;
	var e=0;
	if(d!=1)
		{
		for(i=0;
		i<=d;
		i++)
			{
			var f=$(c[i]).height();
			if(f>=e)
				{
				e=$(c[i]).height()
			}
		}
	}
	else
		{
		e=$(b).height()
	}
	$(a).css("height",e+"px")
};
function animateR()
	{
	var a=$("#slidingDiv").css("margin-left");
	var b=a.split('px');
	if(b[0]%502==0&&b[0]>=-502)
		{
		var c=$("#slidingDiv").css("margin-left");
		var d=c.split("px");
		newMarNum=d[0]-502;
		$("#slidingDiv").animate(
			{
			marginLeft:newMarNum+"px"
		}
		,500,function()
			{
			if(newMarNum==-502)
				{
				$("#sliderCircle1").css(
					{
					"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
				}
				);
				$("#sliderCircle2").css(
					{
					"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
				}
				)
			}
			else
				{
				$("#sliderCircle2").css(
					{
					"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
				}
				);
				$("#sliderCircle3").css(
					{
					"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
				}
				)
			}
		}
		)
	}
}
function animateL()
	{
	var a=$("#slidingDiv").css("margin-left");
	var b=a.split('px');
	if(b[0]%502==0&&b[0]<0)
		{
		var c=$("#slidingDiv").css("margin-left");
		var d=c.split("px");
		newMarNum=Number(d[0])+502;
		$("#slidingDiv").animate(
			{
			marginLeft:newMarNum+"px"
		}
		,500,function()
			{
			if(newMarNum==-502)
				{
				$("#sliderCircle3").css(
					{
					"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
				}
				);
				$("#sliderCircle2").css(
					{
					"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
				}
				)
			}
			else
				{
				$("#sliderCircle2").css(
					{
					"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
				}
				);
				$("#sliderCircle1").css(
					{
					"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
				}
				)
			}
		}
		)
	}
}
function skipToSliderNum(x)
	{
	$("#slidingDiv").animate(
		{
		marginLeft:x
	}
	,500,function()
		{
		if(x=='0px')
			{
			$("#sliderCircle1").css(
				{
				"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
			}
			);
			$("#sliderCircle2").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			);
			$("#sliderCircle3").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			)
		}
		else if(x=='-502px')
			{
			$("#sliderCircle1").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			);
			$("#sliderCircle2").css(
				{
				"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
			}
			);
			$("#sliderCircle3").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			)
		}
		else
			{
			$("#sliderCircle1").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			);
			$("#sliderCircle2").css(
				{
				"box-shadow":"inset 0 0 5px 0 #3e3e3e","background-color":"#909090"
			}
			);
			$("#sliderCircle3").css(
				{
				"box-shadow":"inset 0 0 5px 0 #025668","background-color":"#15C1FB"
			}
			)
		}
	}
	)
}
$(function()
	{
	$("#cr_2si>a:nth-child(1)").click(function(e)
		{
		$(".pop_up_").css(
			{
			"visibility":"visible"
		}
		);
		$("#pop_up_cont").css("margin-top",(window.innerHeight/2)-$("#pop_up_cont").innerHeight()/2);
		return false
	}
	);
	$("#cr_2si>a:nth-child(2)").click(function(e)
		{
		$(".pop_up_").css(
			{
			"visibility":"visible"
		}
		);
		$("#pop_up_cont").css("margin-top",(window.innerHeight/2)-$("#pop_up_cont").innerHeight()/2);
		return false
	}
	);
	$("#cr_2si>a:nth-child(3)").click(function(e)
		{
		$(".pop_up_").css(
			{
			"visibility":"visible"
		}
		);
		$("#pop_up_cont").css("margin-top",(window.innerHeight/2)-$("#pop_up_cont").innerHeight()/2);
		return false
	}
	);
	$("#back").css("height",$(document).height()+'px')
}
);
function verticalCentre(a,b)
	{
	var c=$(b).height();
	var d=$(a).height();
	var e=(c/2)-d/2;
	$(a).css("margin-top",e+'px')
}
$(function(e)
	{
	verticalCentre(document.getElementById("span_1"),document.getElementById("div_1"));
	verticalCentre(document.getElementById("span_2"),document.getElementById("div_2"));
	verticalCentre(document.getElementById("span_3"),document.getElementById("div_3"));
	verticalCentre(document.getElementById("span_4"),document.getElementById("div_4"));
	verticalCentre(document.getElementById("span_5"),document.getElementById("div_5"));
	verticalCentre(document.getElementById("span_6"),document.getElementById("div_6"));
	/*$("#log_in").click(function(e)
		{
		$("#log_in_button").trigger("click")
	}
	);
	$("#log_in_form").submit(function(e)
		{
		var d=$("#su_si div:nth-child(1) tr:nth-child(1) input").val();
		var f=$("#su_si div:nth-child(1) tr:nth-child(2) input").val();
		if(d!=""&&f!="")
			{
			var g=$("#su_si div:nth-child(1) tr:nth-child(1) input").val();
			var h=$("#su_si div:nth-child(1) tr:nth-child(2) input").val();
			$.ajax('other/login.php',
				{
				type:'POST',data:
					{
					e_m:g,p_w:h
				}
				,success:function(a)
					{
					if(a=='done')
						{
						window.location="user.php"
					}
					else if(a=="error_1")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Email cannot contain "+c+" or '",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_2")
						{
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"Wrong password inserted\nVerify that caps lock is not on",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_3")
						{
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"Email does not exist in our database\nCheck email address correctly or register first",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
				}
			}
			)
		}
		else
			{
			$().toastmessage('showToast',
				{
				inEffectDuration:600,stayTime:5000,text:"Fill the form properly",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
			}
			)
		}
		return false
	}
	);
	$("#register").click(function(e)
		{
		$("#register_button").trigger("click")
	}
	);
	$("#register_form").submit(function(e)
		{
		var d=$("#su_si div:nth-child(2) tr:nth-child(1) input").val();
		var f=$("#su_si div:nth-child(2) tr:nth-child(2) input").val();
		var g=$("#su_si div:nth-child(2) tr:nth-child(4) input").val();
		var h=$("#su_si div:nth-child(2) tr:nth-child(3) input").val();
		if(d!=""&&f!=""&&g!=""&&h!="")
			{
			var i=$("#su_si div:nth-child(2) tr:nth-child(1) input").val();
			var j=$("#su_si div:nth-child(2) tr:nth-child(2) input").val();
			var k=$("#su_si div:nth-child(2) tr:nth-child(3) input").val();
			var l=$("#su_si div:nth-child(2) tr:nth-child(4) input").val();
			$.ajax('other/register.php',
				{
				type:'POST',data:
					{
					f_n:i,e_m:j,p_w:k,rp_w:l
				}
				,success:function(a)
					{
					if(a=='done')
						{
						window.location="user.php"
					}
					else if(a=="error_1error_2")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Full name and Email cannot contain "+c+" or '",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_1error_3")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Full name cannot contain "+c+" or '\nPassword does not match",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_2error_3")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Email cannot contain "+c+" or '\nPassword doess not match",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_1error_2error_3")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Full name and Email cannot contain "+c+" or '\nPassword does not match",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_1")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Full name cannot contain "+c+" or '",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_2")
						{
						var c='"';
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:"The Email cannot contain "+c+" or '",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_3")
						{
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:'Passwords does not match',sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else if(a=="error_4")
						{
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:'Email entered is already registered...\nTry loging in',sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
					else
						{
						$().toastmessage('showToast',
							{
							inEffectDuration:600,stayTime:5000,text:'Something went wrong...\nTry registering again :(',sticky:false,type:'error',position:'middle-center',closeText:'',close:null
						}
						)
					}
				}
			}
			)
		}
		else
			{
			$().toastmessage('showToast',
				{
				inEffectDuration:600,stayTime:5000,text:"Fill the form properly",sticky:false,type:'error',position:'middle-center',closeText:'',close:null
			}
			)
		}
		return false
	}
	);*/
	$("#close").click(function(e)
		{
		$(".pop_up_").css("visibility","hidden")
	}
	)
}
);