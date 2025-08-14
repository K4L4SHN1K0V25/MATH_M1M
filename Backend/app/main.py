from fastapi import FastAPI, HTTPException
from fastapi.responses import Response
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
from passlib.context import CryptContext
from jose import jwt
from .model.userConnection import userConnection
from .schema.userSchema import UserSchema, LoginData
from fastapi.middleware.cors import CORSMiddleware

SECRET_KEY = "mi_clave_secreta"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

app = FastAPI()
conn = userConnection()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O pon la IP de tu app, ej: ["http://localhost:8081"]
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos (incluye OPTIONS)
    allow_headers=["*"],  # Permite todos los encabezados
)

# ---------------------- CRUD ----------------------
@app.get("/", status_code=HTTP_200_OK)
def root():
    items = []
    for data in conn.read_all():
        items.append({
            "id": data[0],
            "nombre": data[1],
            "email": data[2],
            "contraseña": data[3]
        })
    return items

@app.get("/api/usuario/{id}", status_code=HTTP_200_OK)
def get_one(id: str):
    data = conn.read_one(id)
    if not data:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return {
        "id": data[0],
        "nombre": data[1],
        "email": data[2],
        "contraseña": data[3]
    }

@app.post("/api/insert", status_code=HTTP_201_CREATED)
def insert(user_data: UserSchema):
    data = user_data.dict()
    data.pop("id", None)
    conn.write(data)
    return Response(status_code=HTTP_201_CREATED)

@app.put("/api/update/{id}", status_code=HTTP_204_NO_CONTENT)
def update(user_data: UserSchema, id: str):
    data = user_data.dict()
    data["id"] = id
    conn.update(data)
    return Response(status_code=HTTP_204_NO_CONTENT)

@app.delete("/api/deleteUsuario/{id}", status_code=HTTP_204_NO_CONTENT)
def delete(id: str):
    conn.delete(id)
    return Response(status_code=HTTP_204_NO_CONTENT)

# ---------------------- AUTH ----------------------
@app.post("/register", status_code=HTTP_201_CREATED)
def register(user_data: UserSchema):
    data = user_data.dict()
    data.pop("id", None)
    data["contraseña"] = pwd_context.hash(data["contraseña"])
    conn.write(data)
    return {"message": "Usuario registrado correctamente"}

@app.post("/login")
def login(user_data: LoginData):
    users = conn.read_all()
    user = next((u for u in users if u[2] == user_data.email), None)
    if not user or user_data.contraseña != user[3]:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    token = jwt.encode({"sub": user[2]}, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}

