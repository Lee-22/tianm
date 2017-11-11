window.onload = function() {
	var txt = document.getElementById("txt");
	var btn = document.getElementById("btn");
	var list = document.getElementsByClassName("list")[0];
	txt.onkeyup = function() {
		if(txt.value != "") {
			var script = document.createElement("script");
			script.src = "http://suggestion.baidu.com/su?wd=" + txt.value + "&cb=fn"
			document.body.appendChild(script)
			list.style.display = "block";
		} else {
			list.style.display = "none";
		}
	}
}

function fn(data) {
	var html = ""
	var list = document.getElementsByClassName("list")[0];
	if(data.s.length) {
		for(var i = 0; i < data.s.length; i++) {
			html += "<li><a target='_blank' href='https://www.baidu.com/s?wd=" + data.s[i] + "'>" + data.s[i] + "</a></li>"
		}
		list.innerHTML = html;
	} else {
		list.style.display = "none"
	}
}
$(function(){
	$("#thumbnailtitle .row .col-md-12 ").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#thumbnailtitle .row h4").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#thumbnailtitle .row div a img").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Exhibition_2 div h1").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Exhibition_2 div h4").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Exhibition_2 div a img").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Briancontent h4").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Briancontent p").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Briancontent #Briancontentitme .col-md-4 a").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Briancontent .row .col-md-6 .thumbnail img").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#Briancontent .row .col-md-6 .thumbnail div h4").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#buttomcopyRight li a").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
	$("#mynavbarbuttom li a").hover(function(){
		$(this).addClass("animated pulse")
	},function(){
		$(this).removeClass("animated pulse")
	})
})

































































