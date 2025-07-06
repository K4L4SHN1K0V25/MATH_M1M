from fastapi import FastAPI 

app = FastAPI(
    title = "Mi Backend FastAPI",
    description = "API inicial lista para desarrollo",
    version = "0.1.0"
)

@app.get("/")
async def root():
    return {"message": "API lista"}