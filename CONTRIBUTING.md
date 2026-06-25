# Contributing to ArtBridge

## Development Setup

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make changes
5. Test locally
6. Commit: `git commit -am 'Add feature'`
7. Push: `git push origin feature/your-feature`
8. Create Pull Request

## Code Style

### Backend (Django/Python)
- Follow PEP 8
- Use type hints
- Write docstrings
- Run `flake8` before committing

### Frontend (React/TypeScript)
- Use TypeScript strictly
- Follow React hooks best practices
- Use functional components
- Run `npm run lint` before committing

## Testing

```bash
# Backend tests
cd backend
python manage.py test

# Frontend tests
cd frontend
npm test
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request review from team
5. Address feedback
6. Merge after approval

## Commit Message Format

```
[TYPE] Brief description

Detailed explanation of changes

Fixes #123
```

Types: feat, fix, docs, style, refactor, test, chore
