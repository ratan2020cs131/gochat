export default function (req, res, next) {
    const period = 60 * 500;
    if (req.method === 'GET') {
        res.set("Cache-control", `public, max-age=${period}`)
    }
    next();
}