import pymongo
from pymongo import MongoClient
from os import environ


def get_mongodb_client() -> MongoClient:
    """
    Returns a MongoDB client connected to the database.
    """
    client = pymongo.MongoClient(environ.get("MONGODB_URI"))
    return client

def get_db(client, db_name: str):
    """
    Returns a database instance from the MongoDB client.
    """
    return client[db_name]
