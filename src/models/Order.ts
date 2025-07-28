import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export interface IOrder extends Document {
  product: Types.ObjectId;
  buyerName: string;
  buyerEmail: string;
  deliveryAddress: string;
  paymentMethod: 'Stripe' | 'COD';
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema<IOrder> = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    buyerName: { type: String, required: true },
    buyerEmail: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    paymentMethod: { type: String, enum: ['Stripe', 'COD'], required: true },
  },
  { timestamps: true }
);

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
export default Order;
