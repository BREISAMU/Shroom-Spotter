from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:3000', 
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
    )

class IdentificationBase(BaseModel):
    amount: float
    category: str
    description: str
    is_income: bool
    date: str

class IdentificationModel(IdentificationBase):
    id: int
    class Config:
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

@app.post("/identifications/", response_model=IdentificationModel)
async def create_identification(identification: IdentificationBase, db: db_dependency):
    db_identification = models.Identification(**identification.dict())
    db_identification.description = db_identification.category + ":  " + "This is the description, amount: " + str(db_identification.amount)
    db.add(db_identification)
    db.commit()
    db.refresh(db_identification)
    return db_identification

@app.get("/identifications/", response_model=List[IdentificationModel])
async def read_identifications(db: db_dependency, skip: int = 0, limit: int = 100):
    identifications = db.query(models.Identification).offset(skip).limit(limit).all()
    return identifications


