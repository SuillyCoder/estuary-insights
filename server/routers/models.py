from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def test():
    return {"message": "Route for Estuary Insights AI Models!"}