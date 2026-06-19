import os
from pathlib import Path

from dotenv import load_dotenv

# Load the backend-local .env even when the process starts from another directory.
BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env", override=True)

DATABASE_URL: str = os.environ["DATABASE_URL"]
SECRET_KEY: str = os.environ["SECRET_KEY"]  # MUST be set in production (32+ chars)
ALGORITHM: str = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "1440"))
ADMIN_USERNAME: str = os.environ["ADMIN_USERNAME"]  # MUST be set in production
ADMIN_PASSWORD: str = os.environ["ADMIN_PASSWORD"]  # MUST be set in production
ADMIN_RECOVERY_EMAIL: str = os.getenv("ADMIN_RECOVERY_EMAIL", os.getenv("ADMIN_EMAIL", ""))
ALLOWED_ORIGINS: str = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:3000")
DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"

SMTP_HOST: str = os.getenv("SMTP_HOST", "")
SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME: str = os.getenv("SMTP_USERNAME", "")
SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")
SMTP_FROM_EMAIL: str = os.getenv("SMTP_FROM_EMAIL", SMTP_USERNAME)
SMTP_FROM_NAME: str = os.getenv("SMTP_FROM_NAME", "iZone Technologies")
SMTP_USE_TLS: bool = os.getenv("SMTP_USE_TLS", "true").lower() == "true"
PASSWORD_RESET_CODE_EXPIRE_MINUTES: int = int(os.getenv("PASSWORD_RESET_CODE_EXPIRE_MINUTES", "10"))
