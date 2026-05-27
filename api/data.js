export default async function handler(req, res) {
  const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_gxjeNQJi4gRJeTdEL6BZ3UxtGm7fiRIvFnBDkcBwXpGKg1gYgSDu5dSmGvYH4LKFLl_t4g4PkpW3/pub?gid=1031547903&single=true&output=csv';
 
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) throw new Error(`Erro ${response.status}`);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 
