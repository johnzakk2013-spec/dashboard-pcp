export default async function handler(req, res) {
  const SHEET_ID = '1BcTuI0h-Z3jTYfjEg9pHlI_A5jwg2MMuFfT2KH5FjP8';
  const GID = '1031547903';
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GID}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Google Sheets retornou ${response.status}`);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
