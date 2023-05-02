var technology_detail = document.querySelectorAll("[name=technology_detail]");
console.log("technology_detail", technology_detail);

for (let i = 0; i < technology_detail.length; i++) {
	const element = technology_detail[i];
	element.onclick = function() {
		console.log("~");

		location.href = "./technology_detail.html";
	};
}
