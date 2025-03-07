import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        if (!['WARNING', 'DONE', 'IN_PRODUCTION'].includes(status)) {
            res.status(400).json({ error: 'Invalid status' });
        }
        await Order.findByIdAndUpdate(orderId, { status });
        res.sendStatus(204);
    } catch {
        res.status(500);
    }
}
