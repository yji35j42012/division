var technology_detail = document.querySelectorAll("[name=technology_detail]");
var moreBtn = null;
for (let i = 0; i < technology_detail.length; i++) {
	const element = technology_detail[i];
	element.onclick = function() {
		location.href = "./technology_detail.html";
	};
}

var checkOverTxt = document.querySelectorAll("[name=checkOverTxt]");

function isTextOverflowed(element) {
	return (
		element.scrollWidth > element.clientWidth ||
		element.scrollHeight > element.clientHeight
	);
}
function checkOverTxtHadnler() {
	for (let i = 0; i < checkOverTxt.length; i++) {
		const element = checkOverTxt[i];
		if (isTextOverflowed(element)) {
			element.classList.add("showMore");
			// element.setAttribute("data-showNum", "data-showNum" + i);
			const childSpan = document.createElement("span");
			childSpan.setAttribute("name", "showmore" + i);
			childSpan.setAttribute("style", "display:none;");
			childSpan.innerHTML = element.innerHTML;
			element.parentElement.append(childSpan);

			document
				.querySelector('.showMore + [data-more="more_btn"]')
				.setAttribute("data-showNum", +i);
		} else {
			return;
		}

		var lineNum = element.getAttribute("data-maxline");
		var lastTxt = element.getAttribute("data-last");
		var text = element.innerText;
		var textLen = text.length;
		var baseWidth = window.getComputedStyle(element).width;
		var fontsize = window.getComputedStyle(element).fontSize;
		var lineWidth = baseWidth.slice(0, -2);
		var charCount = Math.floor(lineWidth / fontsize.slice(0, -2)); // 计算一行内可容纳字数
		var content = "";
		var totalStrNum = Math.floor(charCount * lineNum); // 多行可容纳总字数
		var lastIndex = totalStrNum - textLen;
		if (textLen > totalStrNum)
			content = text.slice(0, lastIndex - lastTxt).concat("...");
		else content = text;

		element.innerText = content;
	}

	// moreBtn = document.querySelectorAll("[name='more_btn']");
	// console.log("moreBtn", moreBtn);
	// if (moreBtn.length >= 0) {
	// 	for (let i = 0; i < moreBtn.length; i++) {
	// 		const element = moreBtn[i];
	// 		element.onclick = function() {
	// 			document.querySelector("#alert_summary").style.display = "";
	// 			// let show = "showmore" + element.getAttribute("data-showNum");
	// 			// let showInfo = document.querySelector(`[name = ${show}]`);
	// 			// console.log("showInfo", showInfo.innerHTML);
	// 		};
	// 	}
	// }
}

if (checkOverTxt) {
	checkOverTxtHadnler();
}

var filter_select = document.querySelectorAll("[name='filter_select']");
var filter_select_txt = document.querySelectorAll("[name='filter_select_txt']");

var filter_select_item = document.querySelectorAll(
	"[name='filter_select_ul'] > li"
);
var filter_count = null;

function setfilter_select() {
	for (let i = 0; i < filter_select.length; i++) {
		const element = filter_select[i];
		element.onclick = function() {
			console.log("filter_select");
			if (filter_count == null) {
				element.classList.add("on");
				filter_count = i;
			} else if (filter_count == i) {
				element.classList.remove("on");
				filter_count = null;
			} else {
				filter_select[filter_count].classList.remove("on");
				element.classList.add("on");
				filter_count = i;
			}
		};
	}
}
if (filter_select) {
	setfilter_select();
}
function setfilter_item() {
	for (let i = 0; i < filter_select_item.length; i++) {
		const element = filter_select_item[i];
		element.onclick = function() {
			filter_select_txt[filter_count].innerHTML = element.innerHTML;
		};
	}
}
if (filter_select_item) {
	setfilter_item();
}

var filter_search = document.querySelector("#filter_search");
var nodata = document.querySelector("#nodata");
var data = document.querySelector("#data");

if (filter_search) {
	filter_search.onclick = function(params) {
		if (nodata.style.display == "none") {
			nodata.style.display = "";
			data.style.display = "none";
		} else {
			nodata.style.display = "none";
			data.style.display = "";
		}
	};
}

var addFilter = document.querySelector("#addFilter");
var filter_inpGroup = document.querySelector("#filter_inpGroup");
var filter_inpGroup_items = document.querySelectorAll(
	"#filter_inpGroup > .filter_inpBox"
);
var icon_minus = null;
if (addFilter) {
	addFilter.onclick = function() {
		let idIndex = "filter_inpBox" + filter_inpGroup_items.length;
		var clild_tab = "clild_tab" + filter_inpGroup_items.length;
		const div = document.createElement("div");
		div.setAttribute("class", "filter_inpBox");
		div.setAttribute("id", idIndex);

		const divChild1 = document.createElement("ul");
		divChild1.setAttribute("class", "tab");
		divChild1.setAttribute("id", clild_tab);
		const divChild1_1 = document.createElement("li");
		divChild1_1.setAttribute("class", "tab_item on");
		divChild1_1.innerHTML = "and";
		const divChild1_2 = document.createElement("li");
		divChild1_2.setAttribute("class", "tab_item");
		divChild1_2.innerHTML = "or";
		divChild1.append(divChild1_1);
		divChild1.append(divChild1_2);
		const divChild2 = document.createElement("label");
		divChild2.setAttribute("class", "filter_input");
		const divChild2_1 = document.createElement("i");
		divChild2_1.setAttribute("class", "icon _search");
		const divChild2_1_img = document.createElement("img");
		divChild2_1_img.setAttribute("src", "./images/icon_search_normal.svg");
		divChild2_1.append(divChild2_1_img);
		const divChild2_1_inp = document.createElement("input");
		divChild2_1_inp.setAttribute("type", "text");
		divChild2_1_inp.setAttribute(
			"placeholder",
			"請輸入姓名、現職單位、職級、合作專長、IPC(如：G06K)、技術名"
		);
		divChild2.append(divChild2_1);
		divChild2.append(divChild2_1_inp);

		const divChild3 = document.createElement("i");
		divChild3.setAttribute("class", "icon _minus");
		divChild3.setAttribute("data-num", filter_inpGroup_items.length);
		divChild3.setAttribute("name", "icon_minus");
		const divChild3_1 = document.createElement("img");
		divChild3_1.setAttribute("src", "./images/icon_minus_normal.svg");
		divChild3.append(divChild3_1);

		const divChild4 = document.createElement("label");
		divChild4.setAttribute("name", "filter_select");
		divChild4.setAttribute("class", "filter_select");
		const divChild4_1 = document.createElement("span");
		divChild4_1.setAttribute("name", "filter_select_txt");
		divChild4_1.setAttribute("class", "filter_select_txt");
		divChild4_1.innerHTML = "標題";
		const divChild4_2 = document.createElement("ul");
		divChild4_2.setAttribute("name", "filter_select_ul");
		divChild4_2.setAttribute("class", "filter_select_ul");
		divChild4_2.innerHTML = `<li class="filter_select_li">標題</li>
								<li class="filter_select_li">摘要及關鍵字</li>
								<li class="filter_select_li">IPC</li>
								<li class="filter_select_li">姓名</li>
								<li class="filter_select_li">現職單位</li>
								<li class="filter_select_li">職級</li>
								<li class="filter_select_li">合作專長</li>
								<li class="filter_select_li">BaseSEQ</li>`;

		divChild4.append(divChild4_1);
		divChild4.append(divChild4_2);

		div.append(divChild1);
		div.append(divChild2);
		div.append(divChild4);
		div.append(divChild3);
		filter_inpGroup.append(div);

		filter_inpGroup_items = document.querySelectorAll(
			"#filter_inpGroup > .filter_inpBox"
		);
		icon_minus = document.querySelectorAll("[name=icon_minus]");
		icon_minusHandler();
		filter_select = document.querySelectorAll("[name='filter_select']");
		setfilter_select();
		filter_select_item = document.querySelectorAll(
			"[name='filter_select_ul'] > li"
		);
		setfilter_item();
		filter_select_txt = document.querySelectorAll(
			"[name='filter_select_txt']"
		);
		// clild_tab
		for (
			let i = 0;
			i < document.querySelectorAll("#" + clild_tab + ">li").length;
			i++
		) {
			const element = document.querySelectorAll("#" + clild_tab + ">li")[
				i
			];
			element.onclick = function() {
				if (i == 1) {
					document
						.querySelectorAll("#" + clild_tab + ">li")[0]
						.classList.remove("on");
					element.classList.add("on");
				} else {
					document
						.querySelectorAll("#" + clild_tab + ">li")[1]
						.classList.remove("on");
					element.classList.add("on");
				}
			};
		}
	};
}

function icon_minusHandler() {
	for (let i = 0; i < icon_minus.length; i++) {
		const element = icon_minus[i];
		element.onclick = function() {
			let removeDiv = document.querySelector(
				"#filter_inpBox" + element.getAttribute("data-num")
			);
			filter_inpGroup.removeChild(removeDiv);
		};
	}
}

// var clild_tab = document.querySelectorAll("#clild_tab1 > li");

// for (let i = 0; i < clild_tab.length; i++) {
// 	const element = clild_tab[i];
// 	element.onclick = function(params) {
// 		if (i == 1) {
// 			clild_tab[0].classList.remove("on");
// 			element.classList.add("on");
// 		} else {
// 			clild_tab[1].classList.remove("on");
// 			element.classList.add("on");
// 		}
// 	};
// }

// 彈窗系列
var openAlert = document.querySelectorAll("[name='openAlert']");
var closeAlert = document.querySelectorAll("[name='alert_close']");
//
if (openAlert) {
	for (let i = 0; i < openAlert.length; i++) {
		const element = openAlert[i];
		element.onclick = function() {
			event.stopPropagation();
			let showAlert = document.querySelector(
				"#" + element.getAttribute("data-alertid")
			);
			showAlert.style.display = "";
		};
	}
}
if (closeAlert) {
	for (let i = 0; i < closeAlert.length; i++) {
		const element = closeAlert[i];
		element.onclick = function() {
			let closeAlert = document.querySelector(
				"#" + element.getAttribute("data-alertid")
			);
			closeAlert.style.display = "none";
		};
	}
}
// 彈窗系列

// resume 頁籤
var resume_item = document.querySelectorAll("[name='resume_item']");
var resume_info = document.querySelectorAll("[name='resume_info']");

var resume_count = 0;
if (resume_item) {
	for (let i = 0; i < resume_item.length; i++) {
		const element = resume_item[i];
		element.onclick = function() {
			resume_item[resume_count].classList.remove("on");
			element.classList.add("on");
			resume_info[resume_count].style.display = "none";
			resume_info[i].style.display = "";
			resume_count = i;
		};
	}
}

var folderGroup = document.querySelectorAll("#folderGroup .folderGroup_item");
var claarAllFolder = document.querySelector("#claarAllFolder");

if (folderGroup) {
	for (let i = 0; i < folderGroup.length; i++) {
		const element = folderGroup[i];
		element.onclick = function() {
			element.classList.toggle("on");
		};
	}
}
if (claarAllFolder) {
	claarAllFolder.onclick = function() {
		for (let i = 0; i < folderGroup.length; i++) {
			const element = folderGroup[i];
			element.classList.remove("on");
		}
	};
}


var alert_collectBtn = document.querySelector("#alert_collectBtn");
var alert_collect = document.querySelector("#alert_collect");
if(alert_collectBtn){
	alert_collectBtn.onclick = function () {
		alert_collect.classList.remove("_collect");
		alert_collect.classList.add("_collectEdit");
	}
}