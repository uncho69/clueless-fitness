import axios from 'axios';
import type {
  GelatoOrder,
  GelatoOrderItem,
  GelatoFile,
  ShippingAddress,
  CustomerInfo,
} from '@/types/product';

export class GelatoAPI {
  private static readonly API_BASE_URL = 'https://api.gelato.com/v1';
  private static readonly API_KEY = process.env.GELATO_API_KEY;

  private static getHeaders() {
    if (!this.API_KEY) {
      throw new Error('Gelato API key is not configured');
    }

    // Try different auth methods for Gelato
    return {
      'X-API-Key': this.API_KEY,
      'Content-Type': 'application/json',
    };
  }

  static async createOrder(orderData: {
    orderReferenceId: string;
    orderItems: GelatoOrderItem[];
    shippingAddress: ShippingAddress;
    customerInfo: CustomerInfo;
  }) {
    try {
      console.log('Creating Gelato order with data:', {
        orderRef: orderData.orderReferenceId,
        itemsCount: orderData.orderItems.length
      });

      const response = await axios.post(
        `${this.API_BASE_URL}/orders`,
        {
          orderReferenceId: orderData.orderReferenceId,
          orderItems: orderData.orderItems.map(item => ({
            productId: item.productId,
            productVariant: item.productCode,
            quantity: item.quantity,
            files: item.files,
          })),
          shippingAddress: orderData.shippingAddress,
          billingAddress: orderData.shippingAddress, // Same as shipping for now
          customerInfo: orderData.customerInfo,
          orderType: 'order', // or 'sample'
          currency: 'GBP',
          shipmentMethod: 'standard',
        },
        {
          headers: this.getHeaders(),
        }
      );

      return {
        id: response.data.id,
        orderReference: response.data.orderReferenceId,
        status: response.data.status,
        checkoutUrl: response.data.checkoutUrl || `https://checkout.gelato.com/orders/${response.data.id}`,
        totalPrice: response.data.totalPrice,
        currency: response.data.currency,
      };
    } catch (error) {
      console.error('Gelato API Error:', error);
      
      if (axios.isAxiosError(error)) {
        const errorDetails = error.response?.data;
        const message = errorDetails?.message || errorDetails?.error || error.message;
        
        console.error('Gelato API Response:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: errorDetails,
          headers: error.response?.headers
        });
        
        throw new Error(`Gelato API error (${error.response?.status}): ${message}`);
      }
      
      throw error;
    }
  }

  static async getProducts() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/products`, {
        headers: this.getHeaders(),
      });

      return response.data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  }

  static async getProduct(productId: string) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/products/${productId}`, {
        headers: this.getHeaders(),
      });

      return response.data;
    } catch (error) {
      console.error(`Failed to fetch product ${productId}:`, error);
      throw error;
    }
  }

  static async uploadFile(file: File, productId: string) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('productId', productId);

      const response = await axios.post(
        `${this.API_BASE_URL}/files`,
        formData,
        {
          headers: {
            ...this.getHeaders(),
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Failed to upload file:', error);
      throw error;
    }
  }

  static generateOrderReference(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `CF-${timestamp}-${random}`;
  }

  // Test API connection with different auth methods
  static async testConnection() {
    console.log('Testing Gelato API connection...');
    
    const authMethods = [
      { name: 'X-API-Key', headers: { 'X-API-Key': this.API_KEY, 'Content-Type': 'application/json' } },
      { name: 'Authorization Bearer', headers: { 'Authorization': `Bearer ${this.API_KEY}`, 'Content-Type': 'application/json' } },
      { name: 'Authorization Basic', headers: { 'Authorization': `Basic ${Buffer.from(`${this.API_KEY}:`).toString('base64')}`, 'Content-Type': 'application/json' } }
    ];

    for (const method of authMethods) {
      try {
        console.log(`Trying ${method.name} authentication...`);
        
        const response = await axios.get(`${this.API_BASE_URL}/products`, {
          headers: method.headers,
        });

        console.log(`✅ ${method.name} authentication successful!`, {
          status: response.status,
          productsCount: response.data?.products?.length || 0
        });

        return { success: true, method: method.name };
      } catch (error) {
        console.log(`❌ ${method.name} failed:`, error instanceof Error ? error.message : 'Unknown error');
        
        if (axios.isAxiosError(error)) {
          console.log(`Status: ${error.response?.status}, Data:`, error.response?.data);
        }
      }
    }

    return { success: false, method: null };
  }

  // Helper method to create a checkout session for testing
  static async createCheckoutSession(orderData: {
    orderReferenceId: string;
    orderItems: GelatoOrderItem[];
    shippingAddress: Partial<ShippingAddress>;
    customerInfo: Partial<CustomerInfo>;
  }) {
    // For testing purposes, we'll create a direct checkout URL
    // In production, this would create a proper Gelato checkout session
    
    const checkoutUrl = new URL('https://api.gelato.com/checkout');
    checkoutUrl.searchParams.set('ref', orderData.orderReferenceId);
    checkoutUrl.searchParams.set('currency', 'GBP');
    
    // Add order items as parameters
    orderData.orderItems.forEach((item, index) => {
      checkoutUrl.searchParams.set(`item_${index}_product`, item.productId);
      checkoutUrl.searchParams.set(`item_${index}_quantity`, item.quantity.toString());
    });

    return {
      id: orderData.orderReferenceId,
      checkoutUrl: checkoutUrl.toString(),
      status: 'pending',
    };
  }
} 