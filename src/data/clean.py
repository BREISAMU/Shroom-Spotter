import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(url, key)

def fetch_primary():
    response = supabase.table('primary').select("*").execute()
    return response.data

def fetch_secondary():
    response = supabase.table('secondary').select("*").execute()
    return response.data

primary_data = fetch_primary()
secondary_data = fetch_secondary()