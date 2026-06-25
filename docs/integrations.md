# ArtBridge Integration Guide

## WhatsApp Integration (Pabbly Chatflow)

### Setup
1. Create Pabbly Chatflow account
2. Set up WhatsApp Business account
3. Create flow for artist registration
4. Connect to backend webhook: `POST /api/v1/artists/whatsapp_register/`

### Flow Steps
```
1. Welcome message in local language
2. Collect phone number (verification)
3. Ask for name, region, city, art form
4. Send voice note prompt
5. Collect photos (up to 5)
6. Trigger backend API
7. Send confirmation + OTP via WhatsApp
```

## Google Gemini Integration

### API Setup
```bash
export GOOGLE_GEMINI_API_KEY="your-api-key"
```

### Usage
- **Product descriptions**: Generates 150-200 word descriptions
- **Artist stories**: Creates cultural narratives
- **Auto-categorization**: Detects art form and category
- **Pricing suggestions**: Recommends market-competitive prices

## Razorpay Integration

### Payment Flow
1. Frontend calls `POST /api/v1/payments/initiate_payment/`
2. Backend creates Payment record
3. Frontend redirects to Razorpay checkout
4. User completes payment
5. Razorpay webhook calls `POST /api/v1/payments/{id}/confirm_payment/`
6. Platform splits: 80% artist, 20% platform
7. Automatic payout to artist's bank/UPI

### Supported Methods
- Card (Visa, Mastercard, Amex)
- UPI (Google Pay, PhonePe, etc.)
- Netbanking
- Wallets

## SendPulse Email Marketing

### Campaigns
- **Welcome**: Sent to new buyers
- **Abandoned Cart**: 24 hours after cart abandonment
- **New Arrivals**: Weekly digest of new products
- **Order Updates**: Tracking + delivery confirmation
- **Re-engagement**: For inactive users (30+ days)

### Setup
1. Create SendPulse account
2. Add email templates
3. Connect to backend
4. Configure automation workflows

## India Post ITPS

### How It Works
- Weight-based pricing: ~₹1,500 for 1kg to Australia/UK
- Coverage: 40+ countries including US, UK, Canada
- Timeline: 7-14 days (varies by destination)
- Tracking: Real-time GPS updates

### Manual Shipping (MVP)
1. Calculate postage based on weight/destination
2. Generate customs form (CM/CN 23)
3. Print shipping label
4. Update tracking in system
5. Send tracking link to buyer via WhatsApp

## Insurance (Aon India/Howden India)

### Coverage
- Transit: Pickup to delivery
- Theft: During storage/transit
- Damage: Handling/environmental
- Premium: 1-2% of declared value

### MVP Process (Manual)
1. Calculate premium
2. Generate policy number
3. Email policy document to buyer
4. In case of claim: Buyer submits evidence, platform facilitates with insurer
5. Resolution within 48 hours (target)

## Third-Party Services

| Service | Purpose | Cost | Status |
|---------|---------|------|--------|
| Pabbly Chatflow | WhatsApp automation | Free tier | Active |
| Google Gemini | AI content generation | Free tier | Active |
| Razorpay | Payment gateway | 2% transaction fee | Active |
| SendPulse | Email marketing | Free tier (500 subscribers) | Active |
| India Post ITPS | Shipping | ₹1,500/kg (approximate) | Manual |
| Aon India | Insurance | 1-2% of value | Manual |
