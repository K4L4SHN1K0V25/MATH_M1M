# Importamos FastAPI desde el paquete fastapi
from fastapi import FastAPI 

# Creamos una instancia de la aplicación FastAPI con metadatos
app = FastAPI(
    title="Mi Backend FastAPI",             # Título de la API (aparece en la documentación automática)
    description="API inicial lista para desarrollo",  # Descripción de la API
    version="0.1.0"                         # Versión de la API
)

# Definimos una ruta raíz "/" que responderá a solicitudes GET
@app.get("/")
async def root():
    # Retorna un diccionario en formato JSON como respuesta
    return {"message": "API lista"}