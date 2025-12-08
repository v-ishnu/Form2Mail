export default function healthCheckup(req, res){
    res.setHeader("Cache-Control", "no-store");

    return res.status(200).json({
        ok: true,
        time: new Date().toISOString()
    });
}
