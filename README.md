# Shroom-Spotter
Python based web application used to identify unknown mushrooms based on user input of variety of traits. 

# DISCLAIMERS
DO NOT CONSUME ANY MUSHROOM IDENTIFIED USING THIS MODEL WITHOUT CONFIRMATION OF THE PREDICTION PROVIDED

Also, this application requires general understanding of mushroom features and an ability to identify those featueres on a wild organism.
Good resources to assist with the use of this program listed below:
- [https://www.afdo.org/wp-content/uploads/2020/09/Basics-of-Wild-Harvested-Mushroom-Identification.pdf]
- [https://www.mushroom.world/mushrooms/idbasic]

#Stack
- SupaBase
- SQLAlchemy
- FastAPI
- Node.js
- React.js

# Building / Running locally
FASTAPI:
cd backend
uvicorn main:app --reload

REACT APP:
cd frontend/shroom-spotter-app
npm start

# Bibliography
Mushroom. (1987). UCI Machine Learning Repository. https://doi.org/10.24432/C5959T.
Utilized the primary data to create predictive model based on user input
