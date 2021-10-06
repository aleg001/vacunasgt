from __future__ import print_function
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.service_account import Credentials
import pandas as pd


# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1TgGhJQO9XfWN9swtD-L8emANCFP3-MX__Gc6iLnPbW8'
SAMPLE_RANGE_NAME = 'Merge Centros, Horario e Info Vacunacion'


def process_data(df):
    df = df[df['DISPONIBILIDAD']=='SI']
    return df


def main():
    creds = Credentials.from_service_account_file('credentials.json')

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                range=SAMPLE_RANGE_NAME).execute()
    values = result.get('values', [])

    
    if not values:
        print('No data found.')
    else:
        df = pd.DataFrame(values[1:], columns=values[0])
        print(df.head())
        print(df.shape)
        df = process_data(df)
        print(df.shape)
        print(df.to_json(orient='records'))

if __name__ == '__main__':
    main()