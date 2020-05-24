var BigPics = [
	'VPNBypass1.jpg'
];

function BigPicView(n) {
	
	// Initialize.
	var BigPicFrame = document.getElementById("BigPicFrame");
	var BigPicFrameLayer = document.getElementById("BigPicFrameLayer");
	var pn = n-1;
	var nn = n+1;
	
	// Load the image.
	BigPicFrame.innerHTML = ''+
		'<img '+
			'src="./media/'+ BigPics[n] +'" '+
			'class="BigPic" '+
			'onclick="BigPicClose()"'+
		'><br>'+
		(pn<0?'':'<a href="javascript:BigPicPrev('+ pn +')" class="BigPicLinks">Prev</a> ')+
		'<a href="javascript:BigPicClose()" class="BigPicLinks">Close</a> '+
		(nn>BigPics.length-1?'':'<a href="javascript:BigPicNext('+ nn +')" class="BigPicLinks">Next</a>')+
		'<br><br>';
	
	// CSS.
	BigPicFrameLayer.style.display = "block";
	BigPicFrame.style.display = "block";
	BigPicFrame.onclick = function() { BigPicClose(); };
	BigPicFrameLayer.onclick = function() { BigPicClose(); };
}

function BigPicPrev(n) {
	if (n < 0)
		return;
	else
		BigPicView(n);
}

function BigPicNext(n) {
	if (n > BigPics.length-1)
		return;
	else
		BigPicView(n);
}

function BigPicClose() {
	var BigPicFrame = document.getElementById("BigPicFrame");
	var BigPicFrameLayer = document.getElementById("BigPicFrameLayer");
	BigPicFrameLayer.style.display = "none";
	BigPicFrame.style.display = "none";
	BigPicFrame.innerHTML = "";
}

function Changelog() {
	var CL = document.getElementById('Changelog').style;
	if (CL.display == 'none')
		CL.display = 'block';
	else
		CL.display = 'none';
}