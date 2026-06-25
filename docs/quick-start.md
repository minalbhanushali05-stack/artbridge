# Development Quick Start

## Prerequisites
- Python 3.9+
- Node.js 18+
- PostgreSQL (or use SQLite for dev)
- Git

## Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup database
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
```

Access admin panel: http://localhost:8000/admin
API docs: http://localhost:8000/api/docs

## Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with API URL

# Run dev server
npm run dev
```

Access app: http://localhost:3000

## Quick Test

### Create Test Artist
```bash
curl -X POST http://localhost:8000/api/v1/artists/whatsapp_register/ \
  -H "Content-Type: application/json" \
  -d '{
    "phone_number": "+919876543210",
    "name": "Ravi Painter",
    "region": "Bihar",
    "city": "Madhubani",
    "art_form": "Madhubani",
    "preferred_language": "hi"
  }'
```

### Create Test Product
```bash
curl -X POST http://localhost:8000/api/v1/products/ \
  -H "Content-Type: application/json" \
  -d '{
    "artist": "artist-id",
    "title": "Madhubani Painting",
    "description": "Traditional art",
    "category": "painting",
    "price": "5000.00",
    "status": "active"
  }'
```

## Common Commands

### Backend
```bash
# Migrations
python manage.py makemigrations
python manage.py migrate

# Tests
python manage.py test

# Lint
flake8 .

# Shell
python manage.py shell
```

### Frontend
```bash
# Build
npm run build

# Export static
npm run export

# Lint
npm run lint

# Tests
npm test
```

## Troubleshooting

### Port Already in Use
```bash
# Backend (change port)
python manage.py runserver 8001

# Frontend (change port)
npm run dev -- -p 3001
```

### Database Issues
```bash
# Reset database (WARNING: Deletes all data)
rm db.sqlite3
python manage.py migrate
```

### Module Not Found
```bash
# Backend
pip install -r requirements.txt

# Frontend
npm install
```

## Next Steps

1. Read [Artist Onboarding Flow](./artist-onboarding.md)
2. Read [Buyer Journey](./buyer-journey.md)
3. Check [API Reference](./api-reference.md)
4. Review [Integration Guide](./integrations.md)
5. Run locally and test

## Support

For issues or questions:
- Check existing GitHub issues
- Create new issue with details
- Email: dev@artbridgemarketplace.com
