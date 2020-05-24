function search_keyup(e, sVal) {
	kwlist = document.getElementById("search_kwlist");
	
	if (e.keyCode == 13) {
		// ENTER
		turnonkeydown();
		//search_all_articles(0);
		kwlist.style.display = "none";
		
	} else if (sVal.length >= 3 && e.keyCode != 38 && e.keyCode != 40) {
		turnonkeydown();
		search_all_articles(1);
		kwlist.style.display = "block";
	
	} else if (e.keyCode == 40 || e.keyCode == 38)  {
		turnoffkeydown();
		search_kw_navigator(e);
		
	} else {
		turnonkeydown();
		CurrentSL = 0;
		kwlist.style.display = "none";
	}
}

function turnoffkeydown() {
	window.onkeydown = function (event){ 
		var keynum = event.keyCode || event.which;
		if (keynum != 13)
			return false; 
	};
}
function turnonkeydown() {
	window.onkeydown = null;
}

function search_kw_navigator(e) {
	var keynum = e.keyCode || e.which;
	
	if (keynum == 38) { // up
		if (CurrentSL == 1) {
			document.getElementById('q').focus();
			document.getElementById('sl1').style.textDecoration = "none";
			CurrentSL = 0;
			return;
		}
		
		for (n = 1000; n >= 0; n--) {
			if (document.getElementById('sl'+n) != null && CurrentSL > n) {
				document.getElementById('sl'+n).focus();
				document.getElementById('sl'+n).style.textDecoration = "underline";
				if (document.getElementById('sl'+(n+1)) != null)
					document.getElementById('sl'+(n+1)).style.textDecoration = "none";
				CurrentSL = n;
				break;
			}
		}
	
	} else if (keynum == 40) { // down
		for (n = 0; n <= 1000; n++) {
			if (document.getElementById('sl'+n) != null && CurrentSL < n) {
				document.getElementById('sl'+n).focus();
				document.getElementById('sl'+n).style.textDecoration = "underline";
				if (document.getElementById('sl'+(n-1)) != null)
					document.getElementById('sl'+(n-1)).style.textDecoration = "none";
				CurrentSL = n;
				break;
			}
		}
	}
}

function search_submit_click() {
	if (document.getElementById('q').value== '')
		return false;
}

function search_all_articles(src) {
	
	var search_term = document.getElementById('q').value;
	if (search_term == '')
		return false;
	
	// Search articles.
	var xmlHttp, n;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	} else {
		return false;
	}

	xmlHttp.open("GET", "/ajaxSearchAll.php?q="+encodeURIComponent(search_term)+"&src="+src, true);
	xmlHttp.onreadystatechange=function() {
		if(xmlHttp.readyState == 4) {
			if (src == 0)
				document.getElementById('content').innerHTML = xmlHttp.responseText;
			else if (src == 1)
				document.getElementById('search_kwlist').innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.send(null);
}
