import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["estuary_insights"]

class User:
    
    @staticmethod
    