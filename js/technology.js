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
}

if (checkOverTxt) {
	checkOverTxtHadnler();
}
// window.onresize = function() {
// 	checkOverTxtHadnler();
// };

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

// 彈窗系列
var alert = document.querySelectorAll("[name='alert']");
var openAlert = document.querySelectorAll("[name='openAlert']");
var closeAlert = document.querySelectorAll("[name='alert_close']");
var alert_back = document.querySelector("#alert_back");
if (openAlert) {
	for (let i = 0; i < openAlert.length; i++) {
		const element = openAlert[i];
		element.onclick = function() {
			event.stopPropagation();
			closeAlertHandler();
			let showAlert = document.querySelector(
				"#" + element.getAttribute("data-alertid")
			);
			showAlert.style.display = "";
			if (element.getAttribute("data-alertclass")) {
				showAlert.setAttribute(
					"class",
					`alert ${element.getAttribute("data-alertclass")}`
				);
			}
			if (element.getAttribute("data-alertback")) {
				// document.querySelector("#" + element.getAttribute("data-alertback")).style.display = 'none';
				alert_back.setAttribute(
					"data-alertid",
					element.getAttribute("data-alertback")
				);
			}
		};
	}
}
if (closeAlert) {
	for (let i = 0; i < closeAlert.length; i++) {
		const element = closeAlert[i];
		element.onclick = function() {
			closeAlertHandler();
		};
	}
}

function closeAlertHandler() {
	for (let i = 0; i < alert.length; i++) {
		const element = alert[i];
		element.style.display = "none";
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

// 加入收藏
var alert_collectBtn = document.querySelector("#alert_collectBtn");
var alert_collect = document.querySelector("#alert_collect");
if (alert_collectBtn) {
	alert_collectBtn.onclick = function() {
		alert_collect.classList.remove("_collect");
		alert_collect.classList.add("_collectEdit");
	};
}

// 商化意願處理中

// var alert_progress = document.querySelector("#alert_progress");
// var each_develop = document.querySelector("#each_develop");
// if (alert_progress) {
// 	alert_progress.onclick = function() {
// 		each_develop.classList.remove("_summary");
// 		each_develop.classList.add("_progress");
// 	};
// }
// var alert_back_summary = document.querySelector("#alert_back_summary");
// if (alert_back_summary) {
// 	alert_back_summary.onclick = function() {
// 		each_develop.classList.remove("_progress");
// 		each_develop.classList.add("_summary");
// 	};
// }

// alert_tab
var patent_inside = document.querySelector("#patent_inside");
var alert_tab = document.querySelectorAll("[name='alert_tab']");
var alert_tab_count = 0;
if (alert_tab) {
	for (let i = 0; i < alert_tab.length; i++) {
		const element = alert_tab[i];
		element.onclick = function() {
			alert_tab[alert_tab_count].classList.remove("on");
			element.classList.add("on");
			alert_tab_count = i;
			if (i == 0) {
				patent_inside.classList.remove("_t20");
				patent_inside.classList.add("_unt20");
			} else if (i == 1) {
				patent_inside.classList.remove("_unt20");
				patent_inside.classList.add("_t20");
			}
		};
	}
}
// alert_tab

// js導向

var chanePage = document.querySelectorAll("[name='chanePage']");

if (chanePage) {
	for (let i = 0; i < chanePage.length; i++) {
		const element = chanePage[i];
		element.onclick = function() {
			let goPage = element.getAttribute("data-page");
			if (goPage == "goback") {
				history.go(-1);
			} else {
				location.href = goPage;
			}
		};
	}
}

// resume 頁籤
var chose_item = document.querySelectorAll("[name='chose_item']");
var otherTab_info = document.querySelectorAll("[name='otherTab_info']");

var chose_count = 2;
if (resume_item) {
	for (let i = 0; i < chose_item.length; i++) {
		const element = chose_item[i];
		element.onclick = function() {
			chose_item[chose_count].classList.remove("on");
			element.classList.add("on");
			otherTab_info[chose_count].style.display = "none";
			otherTab_info[i].style.display = "";
			chose_count = i;
		};
	}
}

var textarea = document.querySelectorAll("[name='textarea']");
if (textarea) {
	for (let i = 0; i < textarea.length; i++) {
		const element = textarea[i];
		let txt = element.innerHTML;
		var newtxt = "";
		for (let i = 0; i < txt.split(" ").length; i++) {
			if (txt.split(" ")[i] !== "") {
				let tab = txt.split(" ")[i].split("\t");
				for (let j = 0; j < tab.length; j++) {
					if (tab[j] !== "\t") {
						newtxt += tab[j];
					}
				}
			}
		}
		element.innerHTML = newtxt;
	}
}

var uploadDrop = document.querySelector("#uploadDrop");
if (uploadDrop) {
	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	// 設置拖曳效果
	function highlight() {
		uploadDrop.classList.add("highlight");
	}
	function unhighlight() {
		uploadDrop.classList.remove("highlight");
	}
	// 上傳檔案
	function uploadFile(file) {
		// const formData = new FormData();
		// formData.append("file", file);
		// // 使用 XMLHttpRequest 來上傳檔案
		// const xhr = new XMLHttpRequest();
		// xhr.open("POST", "/upload");
		// xhr.send(formData);
	}
	// 監聽拖曳事件
	["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
		uploadDrop.addEventListener(eventName, preventDefaults, false);
	});

	["dragenter", "dragover"].forEach(eventName => {
		uploadDrop.addEventListener(eventName, highlight, false);
	});

	["dragleave", "drop"].forEach(eventName => {
		uploadDrop.addEventListener(eventName, unhighlight, false);
	});

	// 處理拖曳上傳
	uploadDrop.addEventListener("drop", e => {
		const files = e.dataTransfer.files;
		for (let i = 0; i < files.length; i++) {
			uploadFile(files[i]);
		}
	});
}

// 新增收件人

var addOtherSend = document.querySelector("#addOtherSend");
var sendBox = document.querySelector("#sendBox");
var sendBefore = document.querySelector("#sendBefore");
if (addOtherSend) {
	addOtherSend.onclick = function() {
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "sendBox_info _user");

		var ul = document.createElement("ul");
		ul.setAttribute("class", "technology_item_detail _inp _send");

		var li1 = document.createElement("li");
		li1.setAttribute("class", "technology_item_list _alic _mailName");
		li1.setAttribute("data-title", "收件人名稱：");
		li1.setAttribute("data-title", "收件人名稱：");
		var li1_1 = document.createElement("input");
		li1_1.setAttribute("class", "normal_inp");
		li1_1.setAttribute("type", "text");
		li1_1.setAttribute("placeholder", "請輸入收件人名稱");
		li1.appendChild(li1_1);

		var li2 = document.createElement("li");
		li2.setAttribute("class", "technology_item_list _alic _email");
		li2.setAttribute("data-title", "email：");
		var li2_1 = document.createElement("input");
		li2_1.setAttribute("class", "normal_inp");
		li2_1.setAttribute("type", "text");
		li2_1.setAttribute("placeholder", "請輸入 email");
		li2.appendChild(li2_1);

		var li3 = document.createElement("li");
		li3.setAttribute("class", "technology_item_list _full _alic");
		li3.setAttribute("data-title", "信件標題：");
		var li3_1 = document.createElement("input");
		li3_1.setAttribute("class", "normal_inp");
		li3_1.setAttribute("type", "text");
		li3_1.setAttribute("placeholder", "請輸入信件標題");
		li3.appendChild(li3_1);

		var li4 = document.createElement("li");
		li4.setAttribute("class", "technology_item_list _full _alis");
		li4.setAttribute("data-title", "信件內容：");
		var li4_1 = document.createElement("textarea");
		li4_1.setAttribute("class", "normal_textarea");
		li4_1.setAttribute("placeholder", "請輸入信件內容");
		li4.appendChild(li4_1);

		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		ul.appendChild(li4);
		newDiv.appendChild(ul);
		sendBox.insertBefore(newDiv, sendBefore);
	};
}

// fileTab
var fileTab = document.querySelectorAll("#fileTab > li");
var fileInfo = document.querySelectorAll("[name='fileInfo']");
var fileTabCount = 0;
if (fileTab) {
	for (let i = 0; i < fileTab.length; i++) {
		const element = fileTab[i];
		element.onclick = function() {
			fileTab[fileTabCount].classList.remove("on");
			fileInfo[fileTabCount].style.display = 'none'
			element.classList.add("on");
			fileInfo[i].style.display = ''
			fileTabCount = i;
		};
	}
}

// stateTab
var stateTab = document.querySelectorAll("#stateTab > li");
var stateTabCount = 0;
if (stateTab) {
	for (let i = 0; i < stateTab.length; i++) {
		const element = stateTab[i];
		element.onclick = function() {
			stateTab[stateTabCount].classList.remove("on");
			element.classList.add("on");
			stateTabCount = i;
		};
	}
}
