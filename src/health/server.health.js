export default function healthCheckup(req, res) {
    const token = req.headers["x-health-token"];

    if (token !== process.env.HEALTH_TOKEN) {
      return res.status(401).json({ ok: false });
    }

    return res.status(200).json({
      ok: true,
      time: new Date().toISOString()
    });
  }
