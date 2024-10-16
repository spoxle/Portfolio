const root = document.querySelector(":root");

const sidebarResizer = document.getElementById("sidebar-resizer");
const sidebar = document.getElementById("sidebar");

let currentValue = sidebar.clientWidth;
let resizing = false;

document.addEventListener("mousemove", (event) => {
	if (resizing) {
		root.style.setProperty("--sidebar-width", (event.clientX - sidebarResizer.clientWidth * 1.5) + "px");
	}
});

sidebarResizer.addEventListener("mousedown", () => {
	resizing = true;
});

document.addEventListener("mouseup", (event) => {
	resizing = false;
});