import pymongo
from bson import ObjectId


def create_resume(db: pymongo.database.Database, data: bytes) -> dict:
    # data is pdf file in binary
    result = db.resumes.insert_one({'data': data})
    return {"id": str(result.inserted_id)}
           
            
def create_position(db: pymongo.database.Database, position_name: str) -> dict:
    result = db.positions.insert_one({"name": position_name})
    return {"id": str(result.inserted_id), "name": position_name}


def create_valid_id(db: pymongo.database.Database, data: bytes) -> dict:
    result = db.valid_ids.insert_one({'data': data})
    return {"id": str(result.inserted_id)}


def create_application(db: pymongo.database.Database, resume_id: ObjectId, position_id: ObjectId, valid_id: ObjectId, name: str) -> dict:
    result = db.applications.insert_one({
        "resume_id": resume_id,
        "position_id": position_id,
        "valid_id": valid_id,
        "name": name
    })
    return {"id": str(result.inserted_id), "resume_id": resume_id, "position_id": position_id, "valid_id": valid_id, "name": name}  # TODO: Clean
