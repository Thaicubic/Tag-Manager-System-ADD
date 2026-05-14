const SPREADSHEET_ID = '1eaiPY8Hm-zjpCSNoNBm-vFqldNtWh6WglC9_niXlqb8';
const SHEET_GID = 1720180950;

function doGet() {
  return jsonResponse({ ok: true, message: 'Tag Manager API ready' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: 'Missing request body' });
    }

    const payload = JSON.parse(e.postData.contents);
    const record = normalizePayload(payload);

    const sheet = getSheetByGid(SPREADSHEET_ID, SHEET_GID);
    sheet.appendRow([
      record.model,
      record.partName,
      record.partNo,
      record.qtyPcs,
      record.customer,
      record.photoBase64,
      record.idCode
    ]);

    return jsonResponse({
      ok: true,
      message: 'Saved',
      row: sheet.getLastRow()
    });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function normalizePayload(payload) {
  return {
    model: toText(payload.model),
    partName: toText(payload.partName),
    partNo: toText(payload.partNo),
    qtyPcs: toNumber(payload.qtyPcs),
    customer: toText(payload.customer),
    photoBase64: toText(payload.photoBase64),
    idCode: toText(payload.idCode)
  };
}

function getSheetByGid(spreadsheetId, gid) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const targetSheet = spreadsheet.getSheets().find(function (sheet) {
    return sheet.getSheetId() === gid;
  });

  if (!targetSheet) {
    throw new Error('Sheet gid not found: ' + gid);
  }

  return targetSheet;
}

function toText(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim();
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
