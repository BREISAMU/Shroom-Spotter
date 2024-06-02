from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, ARRAY

class Identification(Base):
    __tablename__ = 'identifications'
    id=Column(Integer, primary_key=True, index=True)
    amount=Column(Float)
    cap_diameter=Column(Float)
    stem_height=Column(Float)
    stem_width=Column(Float)
    category=Column(String)
    description=Column(String)
    is_income=Column(Boolean)
    date=Column(String)
    cap_shape=Column(ARRAY(String))
    cap_surface=Column(ARRAY(String))
    cap_color=Column(ARRAY(String))
    gill_attachment=Column(ARRAY(String))
    gill_spacing=Column(ARRAY(String))
    gill_color=Column(ARRAY(String))
    stem_root=Column(ARRAY(String))
    stem_surface=Column(ARRAY(String))
    stem_color=Column(ARRAY(String))
    veil_color=Column(ARRAY(String))
    ring_type=Column(ARRAY(String))
    spore_print_color=Column(ARRAY(String))
    habitat=Column(ARRAY(String))
    season=Column(ARRAY(String))