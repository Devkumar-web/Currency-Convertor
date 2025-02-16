# Currency Converter

## Overview
This is a simple Currency Converter web application built using **HTML, CSS, and JavaScript**. It allows users to convert an amount from one currency to another using real-time exchange rates fetched from a third-party API.

## Features
- Converts currencies in real-time.
- Fetches latest exchange rates using an API.
- Simple and user-friendly interface.
- Supports multiple international currencies.

## Technologies Used
- **HTML** - Structure of the web application.
- **CSS** - Styling and layout.
- **JavaScript** - Fetching API data and handling conversion logic.
- **Exchange Rate API** - Provides live currency conversion rates.

## How It Works
1. User selects the source and target currency.
2. Enters the amount to be converted.
3. Clicks the 'Convert' button.
4. The app fetches the latest exchange rates from the API and displays the converted amount.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Devkumar-web/currency-converter.git
   ```
2. Navigate to the project directory:
   ```sh
   cd currency-converter
   ```
3. Open `index.html` in a web browser.

## API Integration
- This project uses [Exchange Rate API](https://www.exchangerate-api.com/) (or any other API you are using).

Example API request:
```js
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Future Enhancements
- Add historical exchange rate charts.
- Support for cryptocurrency conversion.
- Implement a dark mode for UI.

## License
This project is licensed under the MIT License.

---
Feel free to modify this `README.md` file to match your specific implementation! 🚀

