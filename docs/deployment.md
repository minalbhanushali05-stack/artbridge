# Deployment Guide

## Local Development

```bash
# Clone repository
git clone https://github.com/minalbhanushali05-stack/artbridge.git
cd artbridge

# Setup environment
cp .env.example .env
# Edit .env with your keys

# Install dependencies
npm install
pip install -r requirements.txt

# Run database migrations
cd backend
python manage.py migrate
cd ..

# Start development servers
npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/api/docs/

## Docker Deployment

```bash
# Build containers
docker-compose build

# Start all services
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Production Deployment (AWS/Heroku)

### Backend (Django + Gunicorn + PostgreSQL)

```bash
# Deploy to Heroku
heroku create artbridge-backend
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set DJANGO_SECRET_KEY=your-secret-key
heroku config:set GOOGLE_GEMINI_API_KEY=your-api-key
git push heroku main
heroku run python manage.py migrate
```

### Frontend (Next.js + Vercel)

```bash
# Deploy to Vercel
cd frontend
vercel deploy --prod
```

## Environment Variables (Production)

```bash
# Django
DEBUG=False
SECRET_KEY=your-strong-secret-key
ALLOWED_HOSTS=artbridgemarketplace.com,www.artbridgemarketplace.com
DATABASE_URL=postgresql://user:pass@host:5432/artbridge
REDIS_URL=redis://host:6379/0

# APIs
GOOGLE_GEMINI_API_KEY=your-gemini-key
RAZORPAY_KEY_ID=your-razorpay-key
RAZORPAY_KEY_SECRET=your-razorpay-secret

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# Frontend
NEXT_PUBLIC_API_URL=https://api.artbridgemarketplace.com
NEXT_PUBLIC_RAZORPAY_KEY=your-public-razorpay-key
```

## Monitoring

- **Sentry**: Error tracking (configured in backend/settings.py)
- **Google Analytics**: User analytics
- **CloudWatch**: AWS logs and metrics
- **Status Page**: Uptime monitoring

## Backup & Recovery

```bash
# Backup PostgreSQL
pg_dump artbridge > backup.sql

# Restore
psql artbridge < backup.sql
```
