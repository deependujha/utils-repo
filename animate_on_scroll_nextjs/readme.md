# Animate-on-Scroll 😎

<details>
  <summary>CSS for `animation-on-scroll`:</summary>

- Copy the below code in your `global.css` file.

```css

.reveal {
	position: relative;
	opacity: 0;
}

.reveal.active {
	opacity: 1;
}
.active.fade-bottom {
	animation: fade-bottom 1s ease-in;
}
.active.fade-left {
	animation: fade-left 1s ease-in;
}
.active.fade-right {
	animation: fade-right 0.75s ease-in;
}

@keyframes fade-bottom {
	0% {
		transform: translateY(50px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes fade-left {
	0% {
		transform: translateX(-100px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes fade-right {
	0% {
		transform: translateX(100px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
```
</details>

---

<details>
  <summary>JS function for `animation-on-scroll`:</summary>

- copy the following function in `src/utils/AnimateOnScrollFunction.ts` folder, and export it from there.

```js
const AnimateOnScrollFunction = () => {
	let reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
};

export default AnimateOnScrollFunction;

```
</details>

---

<details>
  <summary>Applying this effect on any component:</summary>

  - Apply the `reveal` & `fade-right` class to the component you want to animate on scroll.

  - `reveal` class is used to detect the position of the component on the screen.

  - `fade-right` class is used to apply the animation on the component. Instead of **`fade-right`** you can use **`fade-left`** or **`fade-bottom`** class to apply different animations.

```js
<div className="m-auto text-3xl font-bold font-mono text-white reveal fade-right">
	Hello world
</div>
```

- Also, we need to call the `AnimateOnScrollFunction` function when user scrolls.

- For this, find the `parent div` of the component you want to animate on scroll, and add the following code to it.

```js
<div
	style={{
		border: '1px solid black',
		width: '100vw',
		height: '100vh',
		overflow: 'auto',
	}}
	onScroll={AnimateOnScrollFunction}
>
	{...}
</div>
```
</details>

---

⚠️ If you face any issue, check out `src/app/newPage`.

## <div align="center">== X ==</div>