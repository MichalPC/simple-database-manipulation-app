from fastapi import FastAPI
from pymongo import MongoClient
import pprint

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
