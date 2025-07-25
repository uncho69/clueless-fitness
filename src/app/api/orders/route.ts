import { NextRequest, NextResponse } from 'next/server';
import { GelatoAPI } from '@/lib/gelato';
import { GelatoOrder } from '@/types/product';

export async function POST(request: NextRequest) {
  try {
    const orderData: GelatoOrder = await request.json();

    // Validate required fields
    if (!orderData.orderReferenceId || !orderData.orderItems || !orderData.shippingAddress) {
      return NextResponse.json(
        { error: 'Missing required order fields' },
        { status: 400 }
      );
    }

    // Create order with Gelato
    const gelatoResponse = await GelatoAPI.createOrder(orderData);

    // Log the order for debugging
    console.log('Order created successfully:', {
      orderReference: orderData.orderReferenceId,
      gelatoOrderId: gelatoResponse.id,
      items: orderData.orderItems.length,
    });

    return NextResponse.json({
      success: true,
      orderReference: orderData.orderReferenceId,
      gelatoOrderId: gelatoResponse.id,
      estimatedDelivery: gelatoResponse.estimatedDelivery,
      trackingInfo: gelatoResponse.tracking,
    });

  } catch (error) {
    console.error('Error processing order:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process order',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderReference = searchParams.get('orderReference');

  if (!orderReference) {
    return NextResponse.json(
      { error: 'Order reference is required' },
      { status: 400 }
    );
  }

  try {
    // Here you would typically fetch order status from your database
    // and/or check with Gelato for order updates
    
    return NextResponse.json({
      orderReference,
      status: 'processing',
      message: 'Your order is being processed and will be shipped soon.',
    });

  } catch (error) {
    console.error('Error fetching order:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch order status' },
      { status: 500 }
    );
  }
} 