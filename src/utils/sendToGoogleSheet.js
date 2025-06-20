import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'service-account.json');

const SEND_TO_SHEET = async (sheetId, formData) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_FILE,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row to be inserted: [timestamp, field1, field2, ...]
    const timestamp = new Date().toISOString();
    const row = [timestamp];

    for (const key in formData) {
      row.push(formData[key]);
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1', // Change if your sheet name or start cell is different
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    return {
      success: true,
      message: 'Data written to Google Sheet successfully',
      updates: response.data.updates,
    };
  } catch (error) {
    console.error('Error writing to Google Sheet:', error.message);
    return {
      success: false,
      message: 'Failed to write to Google Sheet',
      error: error.message,
    };
  }
};

export default SEND_TO_SHEET;
