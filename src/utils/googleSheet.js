import { google } from 'googleapis';
import path from 'path';
import { readFileSync } from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'service-account.json'); // Replace with your path

const authorize = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: SCOPES,
  });
  return auth;
};

export const appendToSheet = async (spreadsheetId, dataRow) => {
  const auth = authorize();
  const sheets = google.sheets({ version: 'v4', auth });
  console.log(dataRow)

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [dataRow],
    },
  });

  return response.data;
};
