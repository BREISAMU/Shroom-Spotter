from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware
from process import get_similarity_info

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
    cap_diameter: float
    stem_height: float
    stem_width: float
    bruise_or_bleed: bool
    has_ring: bool
    cap_shape: list
    cap_surface: list
    cap_color: list
    gill_attachment: list
    gill_spacing: list
    gill_color: list
    stem_root: list
    stem_surface: list
    stem_color: list
    veil_color: list
    ring_type: list
    spore_print_color: list
    habitat: list
    season: list
    veil_type: list
    similarity_score: float
    most_similar: str
    

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
    similarity_scores = get_similarity_info(db_identification.cap_diameter, db_identification.stem_height, db_identification.stem_width, db_identification.bruise_or_bleed, db_identification.has_ring, db_identification.cap_shape, db_identification.cap_surface, db_identification.cap_color, db_identification.gill_attachment, db_identification.gill_spacing, db_identification.gill_color, db_identification.stem_root, db_identification.stem_surface, db_identification.stem_color, db_identification.veil_color, db_identification.ring_type, db_identification.spore_print_color, db_identification.habitat, db_identification.season, db_identification.veil_type)
    db_identification.similarity_score = float(similarity_scores['Similarity'])
    db_identification.most_similar = str(similarity_scores['Name'])
    db.add(db_identification)
    db.commit()
    db.refresh(db_identification)
    return db_identification

@app.get("/identifications/", response_model=List[IdentificationModel])
async def read_identifications(db: db_dependency, skip: int = 0, limit: int = 100):
    identifications = db.query(models.Identification).offset(skip).limit(limit).all()
    return identifications


