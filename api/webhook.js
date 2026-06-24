export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = JSON.stringify(req.body);
    console.log('KIE_CALLBACK:', body);
    res.status(200).json({ ok: true });
  } else {
    // GET — return last logged body (won't persist across invocations, but logs are readable)
    res.status(200).json({ status: 'listening' });
  }
}
