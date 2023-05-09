
var addInventor_select = document.querySelectorAll(
	"[name='addInventor_select']"
);
var addInventor_check = document.querySelectorAll("[name='addInventor_check']");
console.log("addInventor_select", addInventor_select);

var addInventor_count = null;
if (addInventor_select) {
	for (let i = 0; i < addInventor_select.length; i++) {
		const element = addInventor_select[i];
		element.onclick = function(event) {
			console.log("ADSF");
			event.stopPropagation();
			if (addInventor_count == null) {
				element.classList.add("on");
				addInventor_count = i;
			} else if (addInventor_count == i) {
				element.classList.remove("on");
				addInventor_count = null;
			} else {
				addInventor_select[addInventor_count].classList.remove("on");
				element.classList.add("on");
				addInventor_count = i;
			}
		};
	}
}
if (addInventor_check) {
	for (let i = 0; i < addInventor_check.length; i++) {
		const element = addInventor_check[i];
		element.onclick = function(event) {
			event.stopPropagation();
		};
	}
}
// name="addInventor_select"
