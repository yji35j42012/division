// 引入nav模組
const xhr = new XMLHttpRequest();
xhr.open("GET", "./template/nav.html", true);
xhr.onload = function() {
	// 將模板插入到當前頁面中
	const parser = new DOMParser();
	const doc = parser.parseFromString(xhr.responseText, "text/html");
	const template = doc.querySelector("#navTemplate");
	const clone = document.importNode(template.content, true);
	const output = document.getElementById("navContent");
	output.append(clone);
	setTimeout(() => {
		navItem = document.querySelectorAll("[name='navItem']");
		setItem();
	}, 100);
};
xhr.send();
var navItem = document.querySelectorAll("[name='navItem']");
let getUrl = window.location.href;
function setItem() {
	console.log("~");
	for (let i = 0; i < navItem.length; i++) {
		const element = navItem[i];
		let h = element.getAttribute("data-name");
		if (getUrl.indexOf(h) !== -1) {
			element.classList.add("on");
		}
	}
}
setTimeout(() => {
	navItem = document.querySelectorAll("[name='navItem']");
	setItem();
}, 100);
// 引入nav模組

// gototop
var gototop = document.querySelector("#gototop");
var content = document.querySelector("#content");
gototop.onclick = function() {
	// console.log('top',content.scrollTop);

	let goTopTime = setInterval(() => {
		var nowTop = content.scrollTop;
		if (nowTop > 0) {
			nowTop -= 50;
			content.scrollTo(0, nowTop);
			goTopTime;
		} else {
			nowTop = 0;
			clearInterval(goTopTime);
		}
	}, 10);
	// content.scrollTo(0, 0);
};
