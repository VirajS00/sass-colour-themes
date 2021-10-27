const container = document.querySelector('.dots-container');

const themes = [
	{ name: 'winterDay', label: 'Winter Day', color: '#77d0ed' },
	{ name: 'summerDay', label: 'Summer day', color: '#dbb592' },
	{ name: 'winterNight', label: 'Winter night', color: '#0f4b83' },
	{ name: 'summerNight', label: 'Summer Night', color: '#71560d' }
];

let checkBox, dot;

// let theme = localStorage.getItem('theme');

const template = document.querySelector('template.dot');
let clone = template.content.cloneNode(true);

themes.forEach((theme) => {
	checkBox = clone.querySelector('.dot-check');
	dot = clone.querySelector('.dot');

	checkBox.id = theme.name;

	dot.id = theme.name;
	dot.setAttribute('for', theme.name);
	dot.setAttribute('data-tooltip-label', theme.label);
	dot.style.backgroundColor = theme.color;

	container.append(checkBox);
	container.append(dot);

	clone = template.content.cloneNode(true);
});

const checkBoxes = document.querySelectorAll('.dot-check');

const changeTheme = (theme) => {
	document.body.removeAttribute('class');
	document.body.classList.add(theme);
};

checkBoxes.forEach((box) => {
	box.addEventListener('change', () => {
		const themeName = box.id;
		changeTheme(themeName);
	});
});
