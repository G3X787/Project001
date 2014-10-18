// JavaScript Document
var image, navigation, descript, title, pdfLink, suites, linkArray;

function init(){
	navigation = document.getElementById("suiteNav");
	title = document.getElementById("layoutTitle");
	image = document.getElementById("layoutImg");
	pdfLink = document.getElementById("pdfLink");
	descript = document.getElementById("layoutDescript");
	
	linkArray = new Array();
		linkArray[0] = document.getElementById("0");
		linkArray[1] = document.getElementById("1");
		linkArray[2] = document.getElementById("2");
		linkArray[3] = document.getElementById("3");
		linkArray[4] = document.getElementById("4");
		linkArray[5] = document.getElementById("5");
		linkArray[6] = document.getElementById("6");
		linkArray[7] = document.getElementById("7");
		linkArray[8] = document.getElementById("8");
		linkArray[9] = document.getElementById("9");
		linkArray[10] = document.getElementById("10");
		linkArray[11] = document.getElementById("11");
		linkArray[12] = document.getElementById("12");
		linkArray[13] = document.getElementById("13");
	
	suites = new Array();
		suites[0] = ["1B - Geometry Suite - 1350Sq. Ft.","Suite_1B","A one bedroom suite with panoramic windows viewing the courtyard garden and an exposed limestone wall in the den.  This unit includes one indoor parking stall.","Suite_1B_Geometry"];
		suites[1] = ["1C - Music Suite - 1355Sq. Ft.","Suite_1C","A two bedroom suite with the only private garden and an expansive front entry hall with french doors.","Suite_1C_Music"];
		suites[2] = ["1D - Biology Suite - 910Sq. Ft.","Suite_1D","A one bedroom two bath suite with wonderful panoramic south-east windows.","Suite_1D_Biology"];
		suites[3] = ["1E - Drama Suite - 1150Sq. Ft.","Suite_1E","A unique one bedroom suite with an amazing limestone wall in the living room, expansive front foyer, and wonderful southern exposure.","Suite_1E_Drama"];
		suites[4] = ["2A - Physics Suite - 1580Sq. Ft.","Suite_2A","An amazing two bedroom plus den suite, spread over two floors with wonderful windows that fill the rooms with light. This unit includes one indoor parking stall.","Suite_2A_Physics"];
		suites[5] = ["2B - Chemistry Suite - 1200Sq. Ft.","Suite_2B","A two bedroom suite with an exposed brick wall in the dining room and great view of the private courtyard gardens. This unit includes one indoor parking stall.","Suite_2B_Chemistry"];
		suites[6] = ["2C - Library Suite - 1765Sq. Ft.","Suite_2C","Truly the most unique suite with its expansive windows in the half round turret, two generous sized bedrooms and central fireplace between the dining room and kitchen.  This unit includes one indoor parking stall.","Suite_2C_Library"];
		suites[7] = ["2D - Astronomy Suite - 1200Sq. Ft.","Suite_2D","A two bedroom suite with an exposed brick wall in the dining room and wonderful east views. This unit includes one indoor parking stall.","Suite_2D_Astronomy"];
		suites[8] = ["2E - Mathematics Suite - 950Sq. Ft.","Suite_2E","A one bedroom suite with exposed brick walls in the dining room and wonderful east views.","Suite_2E_Mathematics"];
		suites[9] = ["2F - Poetry Suite - 970Sq. Ft.","Suite_2F","A one bedroom 2 bath suite with exposed brick walls in the dining room and a bright southern exposure. This unit includes one indoor parking stall.","Suite_2F_Poetry"];
		suites[10] = ["3A - English Suite - 1900Sq. Ft.","Suite_3A","A Penthouse suite with 2 bedrooms plus a den, a lovely terrace overlooking the private gardens, wet bar, all with expansive living spaces to enjoy.  This unit includes one indoor parking stall.","Suite_3A_English"];
		suites[11] = ["3B - Geography Suite - 1750Sq. Ft.","Suite_3B","A Penthouse suite with two bedrooms plus a den, an amazing terrace over the half round turret, and generously sized kitchen and primary living spaces. This unit includes one indoor parking stall.","Suite_3B_Geography"];
		suites[12] = ["3C - History Suite - 1900Sq. Ft.","Suite_3C","A Penthouse suite with 3 full bedrooms, exposed brick features in the wet bar and bedroom/den, all with expansive living spaces to enjoy. This unit includes one indoor parking stall.","Suite_3C_History"];
		suites[13] = ["3D - Science Suite - 970Sq. Ft.","Suite_3D","A one bedroom suite with exposed brick walls in the dining room and a bright southern exposure. This unit includes one indoor parking stall.","Suite_3D_Science"];
		
	navigation.addEventListener("click",changeSuite,false);
}

function changeSuite(e){
	console.log(e.target.id);
	for(i=0;i<linkArray.length;i++){
		linkArray[i].className = "";
	}
	TweenMax.to(title,1,{autoAlpha:0});
	TweenMax.to(image,1,{autoAlpha:0});
	TweenMax.to(descript,1,{autoAlpha:0});
	TweenMax.delayedCall(1,nextLayout,[e]);
	function nextLayout(e){
		console.log(e.target.id);
		title.innerHTML = suites[e.target.id][0];
		image.src = "images/"+suites[e.target.id][1]+".png";
		image.alt = suites[e.target.id][1];
		descript.innerHTML = suites[e.target.id][2];
		pdfLink.href = "pdf/"+suites[e.target.id][1]+".pdf";
		e.target.className = "currentSuite";
		TweenMax.to(title,1,{autoAlpha:1, delay:1});
		TweenMax.to(image,1,{autoAlpha:1, delay:1});
		TweenMax.to(descript,1,{autoAlpha:1, delay:1});
	}
}

window.onload = init();