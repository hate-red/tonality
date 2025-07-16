from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


app = FastAPI()

origins = [
    'http://localhost:5173',
    'localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials='True',
    allow_methods=['*'],
    allow_headers=['*']
)


class Text(BaseModel):
    text: str = Field(default='', description='Text for sentiment analysis')


@app.get('/', tags=['root'])
async def read_root() -> dict:
    return {'message': 'Welcome to tonality api!'}


@app.post('/at', tags=['sa'])
def analyze_tonality(text: Text) -> dict:
    tonality = len(text.text)

    return {
        'tonality': tonality,
        'description': 'Kinda random result for now',
    }
