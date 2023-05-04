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
};
xhr.send();
var navItem = document.querySelectorAll("[name='navItem']");
let getUrl = window.location.href;
function setItem() {
	for (let i = 0; i < navItem.length; i++) {
		const element = navItem[i];
		let h = element.getAttribute("href").split("./")[1];

		if (getUrl.indexOf(h) !== -1) {
			element.classList.add("on");
		}
	}
}
setTimeout(() => {
	navItem = document.querySelectorAll("[name='navItem']");
	setItem();
}, 10);
// 引入nav模組
