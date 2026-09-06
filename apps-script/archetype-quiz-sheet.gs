/**
 * Archetype quiz → Google Sheet.
 *
 * Setup
 * 1. Open the Google Sheet you want the rows in.
 * 2. Extensions → Apps Script. Delete whatever is there, paste this in, save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as:      Me
 *      Who has access:  Anyone
 *    (It must be "Anyone", not "Anyone with a Google account" — the quiz posts
 *    from the visitor's browser, and they won't be signed in.)
 * 4. Copy the /exec URL it gives you and paste it into SHEET_WEBHOOK_URL in
 *    web/components/archetype-quiz/ArchetypeQuizContainer.tsx
 *
 * Note: the quiz sends the body as text/plain on purpose. A JSON content type
 * would make the browser fire a CORS preflight, which Apps Script web apps
 * don't answer — the request would fail before arriving. The body is still
 * JSON, which is why this reads it with JSON.parse below.
 */

var SCORE_CODES = ["HBV", "DEC", "IEX", "OVP", "HSW"];

var HEADERS = [
  "timestamp",
  "name",
  "email",
  "result",
  "HBV",
  "DEC",
  "IEX",
  "OVP",
  "HSW",
  "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",
  "q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19", "q20",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write the header row once, on the first submission.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    // The quiz sends scores and answers as nested objects, not flattened onto
    // the top level. Reading them flat produces a row with the name and result
    // filled in but every score 0 and every answer blank.
    var scores = data.scores || {};
    var answers = data.answers || {};

    var row = HEADERS.map(function (key) {
      if (SCORE_CODES.indexOf(key) !== -1) {
        return scores[key] !== undefined ? scores[key] : 0;
      }
      if (key.charAt(0) === "q") {
        return answers[key] !== undefined ? answers[key] : "";
      }
      return data[key] !== undefined ? data[key] : "";
    });
    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
