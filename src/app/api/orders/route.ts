import { NextRequest, NextResponse } from 'next/server';
import { GelatoAPI } from '@/lib/gelato';

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    // Create order with Gelato
    const gelatoResponse = await GelatoAPI.createOrder(orderData);
    
    // Return order confirmation
    return NextResponse.json({
      success: true,
      orderId: gelatoResponse.id,
      orderReference: orderData.orderReferenceId,
      gelatoOrderId: gelatoResponse.id,
      checkoutUrl: gelatoResponse.checkoutUrl,
      status: gelatoResponse.status || 'pending',
      totalPrice: gelatoResponse.totalPrice,
      currency: gelatoResponse.currency || 'GBP',
    });

  } catch (error) {
    console.error('Order creation error:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create order',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('orderId');

  if (!orderId) {
    return NextResponse.json(
      { error: 'Order ID is required' },
      { status: 400 }
    );
  }

  try {
    // In a real app, you would fetch order status from your database
    // For now, return a mock response
    return NextResponse.json({
      orderId,
      status: 'processing',
      trackingNumber: null,
      estimatedDelivery: null,
    });

  } catch (error) {
    console.error('Order status fetch error:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch order status' },
      { status: 500 }
    );
  }
} 