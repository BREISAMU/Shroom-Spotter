import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(url, key)
def fetch_all_primary():
    response = supabase.table('primary').select("*").execute()
    return response.data

def fetch_all_secondary():
    response = supabase.table('secondary').select("*").execute()
    return response.data

def fetch_general(table_name="primary", column="*"):
    response = supabase.table(table_name).select(column).execute()
    return response.data
