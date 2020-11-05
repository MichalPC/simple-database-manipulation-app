from fastapi import FastAPI
from pymongo import MongoClient
import pprint

#VERY UNSAFE#
client = MongoClient("mongodb+srv://michalpc:test1234@simple-user-login-app-d.ki5ky.mongodb.net/db?retryWrites=true&w=majority")
db = client['db']
collection = db['users']

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
