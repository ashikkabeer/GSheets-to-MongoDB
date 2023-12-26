# Google Sheets to MongoDB Converter

This project allows you to convert data from Google Sheets into a MongoDB database. It includes a script to fetch values from a Google Sheet and a script to insert the data into a MongoDB database.

## Prerequisites

Before using this project, make sure you have the following installed:

- Node.js and npm
- MongoDB
- Google Sheets API credentials (details on how to obtain these can be found [here](#link-to-google-sheets-api-credentials))

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables by creating a `.env` file in the project root and adding the following:

    ```env
    MONGO_URI=your_mongo_db_uri
    SPREADSHEET_ID=your_google_sheet_id
    SHEET_NAME=your_google_sheet_name
    ```

    Replace `your_mongo_db_uri`, `your_google_sheet_id`, and `your_google_sheet_name` with your MongoDB connection URI, Google Sheet ID, and the name of the sheet you want to import, respectively.

## Usage

1. Run the script to fetch data from Google Sheets:

    ```bash
    node index.js
    ```

2. The script will fetch the data and insert it into your MongoDB database.

## Google Sheets API Credentials

To use the Google Sheets API, you need to create credentials. Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the Google Sheets API for your project.
4. Create credentials (Service Account Key) and download the JSON file.
5. Rename the downloaded JSON file to `credentials.json` and place it in the project root.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to enhance or modify the README based on your project's specific needs. This is a basic template to get you started.