# Age-Calculator

A small, client-side web app that calculates a person's age (years, months, days) from their date of birth. It's implemented with a minimal HTML/CSS UI and a simple JavaScript function that computes the age using the current date.

## Demo

Open `index.html` in any modern browser (no server required). Use the date picker to choose your date of birth and click the calculate button to see your age displayed.

## Features

- Calculates age in:
  - Years
  - Months
  - Days
- Works entirely in the browser (no backend required)
- Small and easy-to-read JavaScript implementation

## Files

- `index.html` — Basic UI (date input, button, result area)
- `style.css` — Optional styling for UI
- `script.js` — Age calculation logic

(If your repository has different filenames, adjust accordingly. The included `script.js` expects an input element with id `dob` and a result container with id `result`.)

## How it works

1. The user selects their date of birth (input type="date").
2. The JavaScript reads the value, constructs a `Date` object for the birth date and for today's date.
3. It computes differences in years, months, and days.
   - If the month difference is negative, it subtracts one year and adjusts months.
   - If the day difference is negative, it subtracts one month and adjusts days by adding the number of days in the previous month.
4. The result is shown as: "You are X years, Y months, Z days old".

## Usage

Example HTML elements required for the script to work:

```html
<input type="date" id="dob" />
<button onclick="calculateAge()">Calculate</button>
<div id="result"></div>
```

Then include the JavaScript:

```html
<script src="script.js"></script>
```

Open the HTML file in a browser and use the date picker.

## Browser compatibility & notes

- Works in modern browsers that support `<input type="date">` and the JavaScript `Date` API.
- If the date input is left empty, the app prompts the user to enter a date of birth.
- The calculation handles month/day rollovers, including differences caused by varying month lengths (including leap-year February) by using the number of days in the previous month when adjusting negative day values.

## Contributing

Contributions, suggestions, and improvements are welcome.

Suggestions:
- Add validation for unreasonable dates (e.g., future dates or extremely old dates).
- Improve UI/UX and accessibility.
- Add unit tests for the age calculation logic.

To contribute:
1. Fork the repository
2. Create a feature branch
3. Open a pull request describing your changes

## License

This project is provided without a license. If you want to reuse or distribute it, consider adding a license (for example, MIT).

## Author

hosannadevarakonda9-lang

