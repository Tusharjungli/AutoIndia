interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    order_id: string;
    handler: (response: any) => void;
    [key: string]: any;
  }
  
  interface Window {
    Razorpay: new (options: RazorpayOptions) => any;
  }