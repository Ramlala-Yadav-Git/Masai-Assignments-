import axios from "axios";
import { navbar, body_sec } from "../components/navbar.js";

let key = [
	"travel",
	"technology",
	"wallpapers",
	"nature",
	"people",
	"architecture",
	"events",
	"business",
	"experimental",
	"fashion",
	"film",
	"interiors",
	"street",
];
// Making GET request using axios

let head = document.querySelector("header");
let main_container = document.querySelector(".main_container");
head.innerHTML = navbar();
main_container.innerHTML = body_sec();
for (let i = 0; i < 13; i++) {
	document
		.querySelectorAll(`header nav:nth-child(2) ul li`)
		[i].addEventListener("click", function () {
			main_container.style.display = "none";
			run(key[i]);
		});
}

let img_1 = document.getElementsByClassName("img_1")[0];
let img_2 = document.getElementsByClassName("img_2")[0];
let img_3 = document.getElementsByClassName("img_3")[0];
let pop_up = document.getElementsByClassName("pop_up")[0];
let run = (data) => {
	axios
		.get(
			`https://api.unsplash.com/search/photos?client_id=LkrsBWs_nGjOeMlsyjZ8G_ISB8zMGeooNjHeg6SPywM&page=10&query=${data}`
		)
		.then((res) => {
			//	console.log(res.data.results);
			draw(res.data.results, img_1);
		});
	axios
		.get(
			`https://api.unsplash.com/search/photos?client_id=LkrsBWs_nGjOeMlsyjZ8G_ISB8zMGeooNjHeg6SPywM&page=30&query=${data}`
		)
		.then((res) => {
			//	console.log(res.data.results);
			draw(res.data.results, img_2);
		});
	axios
		.get(
			`https://api.unsplash.com/search/photos?client_id=LkrsBWs_nGjOeMlsyjZ8G_ISB8zMGeooNjHeg6SPywM&page=20&query=${data}`
		)
		.then((res) => {
			//	console.log(res.data.results);
			draw(res.data.results, img_3);
		});
};
let draw = (data, el) => {
	el.innerHTML = null;
	data.forEach(({ urls }) => {
		let img = document.createElement("img");
		img.src = `${urls.regular}`;
		img.style.cursor = "pointer";

		img.style.width = "100%";
		el.append(img);
		img.addEventListener("click", function () {
			img_view(`${urls.regular}`);
		});
	});
};

document.getElementById("inp_2_btn").addEventListener("click", function () {
	main_container.style.display = "none";
	let middle_input = document.getElementById("inp_2").value;
	run(middle_input);
});
document.getElementById("inp_1_btn").addEventListener("click", function () {
	main_container.style.display = "none";
	let first_input = document.getElementById("inp_1").value;
	run(first_input);
});
let main = () => {
	main_container.style.display = "flex";
	run("popular");
};
let sec = document.querySelector("section");
let logo = document.querySelector("#logo");
sec.addEventListener("mouseover", function () {
	sec.style.opacity = "1";
	pop_up.style.transform = "translateY(-100vh)";
});
logo.addEventListener("click", function () {
	main();
});
main();
let img_view = (data) => {
	pop_up.style.transform = "translateY(0)";
	sec.style.opacity = "0.4";
	pop_up.style.background = `url(${data}) no-repeat`;
	pop_up.style.backgroundSize = "cover";
	console.log(data);
};
