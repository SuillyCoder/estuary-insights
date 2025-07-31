import pymongo
from pymongo import MongoClient
from os import environ


def get_mongodb_client() -> MongoClient:
    """
    Returns a MongoDB client connected to the database.
    """
    client = pymongo.MongoClient(environ.get("MONGODB_URI"))
    return client
