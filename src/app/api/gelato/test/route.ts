import { NextRequest, NextResponse } from 'next/server';
import { GelatoAPI } from '@/lib/gelato';

export async function GET() {
  try {
    console.log('Testing Gelato API...');
    
    // Test the connection
    const isConnected = await GelatoAPI.testConnection();
    
    if (isConnected) {
      return NextResponse.json({
        success: true,
        message: 'Gelato API connection successful',
        timestamp: new Date().toISOString()
      });
    } else {
      return NextResponse.json(
        { 
          success: false,
          error: 'Failed to connect to Gelato API'
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Gelato API test error:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'API test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 