import { Request, Response } from 'express';
import { Order } from '../../models/Order';
export async function cancelOrder(req: Request, res: Response) {
    try {
        const { orderId } = req.body;
        await Order.findByIdAndDelete(orderId);
        res.sendStatus(204);
    } catch {
        res.status(500);
    }
}
