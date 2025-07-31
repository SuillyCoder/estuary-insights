from fastapi import FastAPI, APIRouter

from routers import test_route, models

app = FastAPI()
router = APIRouter()

app.include_router(test_route.router, prefix="/test", tags=["test"])
app.include_router(models.router, prefix="/models", tags=["models"])

@app.get("/")
async def root():
    return {"message": "Estuary Insights!"}

