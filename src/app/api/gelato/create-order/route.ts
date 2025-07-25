import { NextRequest, NextResponse } from 'next/server';
import { GelatoAPI } from '@/lib/gelato';

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    // Validate required fields
    if (!orderData.orderItems || orderData.orderItems.length === 0) {
      return NextResponse.json(
        { error: 'Order items are required' },
        { status: 400 }
      );
    }

    // Create order with Gelato
    const gelatoOrder = await GelatoAPI.createOrder(orderData);
    
    // Return the order details including checkout URL
    return NextResponse.json({
      success: true,
      orderId: gelatoOrder.id,
      orderReference: orderData.orderReferenceId,
      checkoutUrl: gelatoOrder.checkoutUrl || null,
      message: 'Order created successfully'
    });

  } catch (error) {
    console.error('Gelato order creation error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create order',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Use POST to create an order' },
    { status: 405 }
  );
} 