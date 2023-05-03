var technology_detail = document.querySelectorAll("[name=technology_detail]");

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
		console.log("element", element.getAttribute("data-maxline"));
		var lineNum = element.getAttribute("data-maxline");
		var lastTxt = element.getAttribute("data-last");
		var text = element.innerText;
		var textLen = text.length;
		console.log("textLen", textLen);
		var baseWidth = window.getComputedStyle(element).width;
		console.log("baseWidth", baseWidth);
		var fontsize = window.getComputedStyle(element).fontSize;
		var lineWidth = baseWidth.slice(0, -2);
		console.log("lineWidth", lineWidth);
		var charCount = Math.floor(lineWidth / fontsize.slice(0, -2)); // 计算一行内可容纳字数
		console.log("charCount", charCount);
		var content = "";
		var totalStrNum = Math.floor(charCount * lineNum); // 多行可容纳总字数
		console.log("totalStrNum", totalStrNum);

		var lastIndex = totalStrNum - textLen;
		if (textLen > totalStrNum)
			content = text.slice(0, lastIndex - lastTxt).concat("...");
		else content = text;

		element.innerText = content;

		//
		// console.log("element", element);
		// if (isTextOverflowed(element)) {
		// 	console.log("Text is overflowed");
		// } else {
		// 	console.log("Text is not overflowed");
		// }
	}
}

if (checkOverTxt) {
	checkOverTxtHadnler();
}
