function AnimationEnd(){}$(function(){$('input[type="submit"]').on("click",function(){var n=$("#start").val(),t=$("#end").val();if(""!=n&&""!=t){var i=t-n,a=Math.round(100*i)/100,o=a.toFixed(1);$(".result").html(o+" Timer")}})});