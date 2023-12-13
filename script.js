/*
 * Author: Melinda Sowole
 * Description: Generate a grid of squares containing different colors
 * Date: 15/11/2023
 */

////////////////////////////////////////////////////////////
// CONFIG
const size = 200;
const amount = 4;
const fillingAmount = 10;

////////////////////////////////////////////////////////////
// CODE
document.body.style.cssText =
	"min-height: 100vh; display: grid; place-content: center";

// wrapper div that contains pattern
const wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.style.cssText = `display: grid; grid-auto-rows: ${size}px; grid-template-columns: ${size}px ${size}px;`;

// create each pattern square
for (let i = 0; i < amount; i++) {
	let parent = wrapper;

	for (let j = 0; j < fillingAmount; j++) {
		const square = document.createElement("div");
		parent.append(square);

		const nSize = `calc(${size}px - ${(size / fillingAmount) * j}px)`;
		square.style.height = nSize;
		square.style.width = nSize;
		square.style.background = `hsl(${i * 100 + j * 30}, 100%, 60%)`;

		// every 4th, starting from 2 and 3
		if (i % 4 == 1 || i % 4 == 2) square.style.float = "right";

		parent = square;
	}
}
