// JavaScript Document
var count, pageImg, pageGallery, homeGallery, historyGallery;

function init(){
	count = 0;
	pageImg = document.getElementById("mainImg");
	
	homeGallery = new Array();
	homeGallery[0] = "homeGallery01.jpg";
	homeGallery[1] = "homeGallery02.jpg";
	homeGallery[2] = "homeGallery03.jpg";
	
	historyGallery = new Array();
	historyGallery[0] = "historyGallery01.jpg";
	historyGallery[1] = "historyGallery02.jpg";
	historyGallery[2] = "historyGallery03.jpg";
	historyGallery[3] = "historyGallery04.jpg";
	historyGallery[4] = "historyGallery05.jpg";
	
	historyImgs = new Array();
	historyImgs[0] = "history01.jpg";
	historyImgs[1] = "history02.jpg";
	historyImgs[2] = "history03.jpg";
	historyImgs[3] = "history04.jpg";
	historyImgs[4] = "history05.jpg";
	
	locationGallery = new Array();
	locationGallery[0] = "locationGallery01.jpg";
	locationGallery[1] = "locationGallery02.jpg";
	
}
	
function homeSlider(){
	pageGallery = homeGallery;
	nextImg();
}

function historySlider(){
	pageGallery = historyGallery;
	changeHistory();
	nextImg();
}

function locationSlider(){
	pageGallery = locationGallery;
	nextImg();
}

function nextImg(){
	count++;
	if (count==pageGallery.length) {
		count=0;
	}
	TweenMax.to(pageImg, 1, {css:{autoAlpha:0}, delay:8, onComplete:fadeImg});
	
	function fadeImg(){
		var pics= "images/"+pageGallery[count];
		pageImg.src = pics;
		TweenMax.to(pageImg, 1, {css:{autoAlpha:1}, delay:1, onComplete:nextImg});
	}
}

function changeHistory(){
	var image = document.getElementById("gallery");
	TweenMax.to(image, 1, {css:{autoAlpha:0}, delay:8, onComplete:fadeHistory});
	function fadeHistory(){
		image.src = "images/"+historyImgs[count];
		TweenMax.to(image, 1, {css:{autoAlpha:1}, delay:1, onComplete:changeHistory});
	}
}

window.onload = init();