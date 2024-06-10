from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sqlalchemy.orm as sql_orm
from sqlalchemy.ext.declarative import declarative_base
import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
url = os.environ.get("SUPABASE_CONNECTION_URL")
key = os.environ.get("SUPABASE_KEY")
db_password = os.environ.get("SUPABASE_PASSWORD")

engine = create_engine(url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = sql_orm.declarative_base()