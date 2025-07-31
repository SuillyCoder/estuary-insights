import pytest
from unittest.mock import MagicMock
import pymongo
from bson import ObjectId

from create import create_resume, create_position

@pytest.fixture
def mock_client():
    # Mocking pymongo client structure
    client = pymongo.MongoClient("mongodb://localhost:27017/local?authSource=admin")
    database = client.get_database("local")
    return database

def test_create_resume(mock_client):
    dummy_pdf_data = b"%PDF-1.4 binary content here"
    
    result = create_resume(mock_client, dummy_pdf_data)
    
    assert mock_client.resumes.find_one({'_id': ObjectId(result['id'])}) is not None

def test_create_position(mock_client):
    position_name = "Software Engineer"
    
    result = create_position(mock_client, position_name)

    assert mock_client.positions.find_one({'_id': ObjectId(result['id'])}) is not None
    