# Sass custom colour templates

The idea behind this project is to make theme generation easier using SASS(SCSS) Maps.

This project is setup using parcel, for more info check out [this repository](https://github.com/kevin-powell/sass-made-easy).

## How to use this repo


### Run the project

1. Dev command with hot reload `npm run dev` on `http://localhost:3000/`
2. build command `npm run build`, this command will create a `dist` folder.

### Add a theme

A sample SASS Map for a theme looks like this (in the `src/sass/abstracts/_colours.scss` file):

```css
winterDay: (
    body: (
        bg: hsl(195 100% 95%)
    ),
    contentContainer: (
        bg: hsl(195 49% 80%),
        text: hsl(216 100% 14%),
        title: hsl(216 100% 19%)
    ),
    button: (
        bg: hsl(216 100% 12% / 0.8),
        bgHover: hsl(216 100% 12% / 1),
        text: hsl(213 100% 94%)
    ),
    tooltip: (
        bg: hsl(0 0% 0% / 0.8),
        text: #e7f9ff
    )
)
```

In this map, `winterDay` is the name of the theme and the properties for different elements are given.

Here is the themes array in the JavaScript file (in the `src/js/themes.js` file):
```javascript
const themes = [
    { name: 'winterDay', label: 'Winter Day', color: '#77d0ed' },
    { name: 'summerDay', label: 'Summer day', color: '#dbb592' },
    { name: 'winterNight', label: 'Winter night', color: '#0f4b83' },
    { name: 'summerNight', label: 'Summer Night', color: '#71560d' }
];
```

in order to *add a theme*, all you need to do is:
1. Add your own colours and theme name in the `_colours.scss` file
2. Add the theme name in the themes array (same as in the SASS Map) to the `themes.js` file.
3. Add the custom properties to the new elements as follows:
	- The CSS custom properties will be genrated based on the SASS Map, so the `body bg`(from the above map) custom property would be `--clr-body-bg: hsl(195 100% 95%);`
	- You can add this to the custom elements you add with the property you want to change for that theme

Note: If you don't add any new elements doing the first 2 steps is sufficient.
