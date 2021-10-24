const container = document.querySelector('.dots-container');

const themes = [
	{ name: 'winterDay', label: 'Winter Day' },
	{ name: 'summerDay', label: 'Summer day' },
	{ name: 'winterNight', label: 'Winter night' },
	{ name: 'summerNight', label: 'Summer Night' }
];

const template = document.querySelector('template.dot');
let clone = template.content.cloneNode(true);

themes.forEach((theme) => {
	const checkBox = clone.querySelector('.dot-check');
	const dot = clone.querySelector('.dot');

	checkBox.id = theme.name;

	dot.id = theme.name;
	dot.setAttribute('for', theme.name);
	dot.setAttribute('data-tooltip-label', theme.label);

	container.append(checkBox);
	container.append(dot);

	clone = template.content.cloneNode(true);
});
