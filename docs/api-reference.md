# Documentation

## Artist Onboarding Flow

Artists register via WhatsApp with zero technical friction:

1. **WhatsApp Registration**: Artist sends "Hi" → Bot collects details
2. **Photo Upload**: Send 3-5 artwork photos
3. **AI Processing**: Gemini generates descriptions, pricing, stories
4. **QR Code**: Each product gets unique QR linking to artist profile
5. **Live**: Product appears on storefront within 24 hours

## Buyer Journey

1. **Discovery**: Browse by category, region, or use AI search assistant
2. **Product Detail**: Read artist story, see QR code to maker
3. **Add to Cart**: Multi-currency support (INR, USD, GBP, EUR, AED)
4. **Checkout**: Calculate insurance, select shipping method
5. **Payment**: Razorpay multi-gateway support
6. **Fulfillment**: India Post ITPS, real-time tracking via WhatsApp
7. **Delivery**: Insured transit, QR code leads to artist profile

## API Endpoints

### Artists
- `POST /api/v1/artists/whatsapp_register/` - Register via WhatsApp
- `POST /api/v1/artists/verify_otp/` - Verify OTP
- `GET /api/v1/artists/{id}/profile/` - Get artist profile

### Products
- `GET /api/v1/products/` - List products
- `GET /api/v1/products/{id}/` - Get product details
- `POST /api/v1/products/` - Create product
- `GET /api/v1/products/trending/` - Get trending products

### Orders
- `POST /api/v1/orders/create_order/` - Create order
- `GET /api/v1/orders/{id}/` - Get order details
- `PATCH /api/v1/orders/{id}/update_status/` - Update status

### Payments
- `POST /api/v1/payments/initiate_payment/` - Initiate payment
- `POST /api/v1/payments/{id}/confirm_payment/` - Confirm payment

### Shipping
- `POST /api/v1/shipping/create_shipment/` - Create shipment
- `GET /api/v1/shipping/{id}/track/` - Track shipment
- `POST /api/v1/shipping/{id}/update_tracking/` - Update tracking

### Insurance
- `POST /api/v1/insurance/create_policy/` - Create insurance policy
- `POST /api/v1/insurance/{id}/file_claim/` - File claim

### AI
- `POST /api/v1/ai/generate_product_description/` - Generate description
- `POST /api/v1/ai/generate_artist_story/` - Generate story
- `POST /api/v1/ai/auto_categorize/` - Auto-categorize product

### Analytics
- `GET /api/v1/analytics/sales/dashboard/` - Get dashboard metrics
- `GET /api/v1/analytics/sales/trending_artists/` - Get trending artists
- `GET /api/v1/analytics/sales/trending_products/` - Get trending products
