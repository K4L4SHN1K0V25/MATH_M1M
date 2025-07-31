# Importamos FastAPI desde el paquete fastapi
from fastapi import FastAPI
# Importamos códigos de estado HTTP para mejorar la legibilidad
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
# Importamos la clase para la conexión con la base de datos
from .model.userConnection import userConnection
# Importamos el esquema del usuario para validar los datos
from .schema.userSchema import UserSchema
from fastapi import Response  # Importamos Response para enviar respuestas vacías con status code

# Creamos una instancia de la aplicación FastAPI con metadatos opcionales
app = FastAPI()
# Instanciamos la clase de conexión a la base de datos
conn = userConnection()

# Definimos una ruta raíz "/" que responderá a solicitudes GET
@app.get("/", status_code=HTTP_200_OK)
async def root():
    items = []  # Lista que contendrá todos los usuarios en forma de diccionario
    for data in conn.read_all():  # Itera sobre todos los registros obtenidos de la base de datos
        dictionary = {}  # Crea un diccionario vacío por cada registro
        dictionary["id"] = data[0]  # Asigna el id
        dictionary["nombre"] = data[1]  # Asigna el nombre
        dictionary["email"] = data[2]  # Asigna el email
        dictionary["contraseña"] = data[3]  # Asigna la contraseña
        items.append(dictionary)  # Agrega el diccionario a la lista de resultados

    return items  # Devuelve la lista de usuarios

# Ruta para obtener un solo usuario por su ID
@app.get("/api/usuario/{id}", status_code=HTTP_200_OK)
def get_one(id: str):
    dictionary = {}  # Diccionario para almacenar un solo usuario
    data = conn.read_one(id)  # Llama al método que obtiene un usuario por ID
    dictionary["id"] = data[0]
    dictionary["nombre"] = data[1]
    dictionary["email"] = data[2]
    dictionary["contraseña"] = data[3]

    return dictionary  # Devuelve el usuario como un diccionario

# Ruta para insertar un nuevo usuario
@app.post("/api/insert", status_code=HTTP_201_CREATED)
def insert(user_data: UserSchema):
    data = user_data.dict()  # Convierte el objeto Pydantic en diccionario
    data.pop("id")  # Elimina el id porque se genera automáticamente
    #print(data)  # Imprime los datos por depuración (puede quitarse en producción)
    conn.write(data)  # Llama al método para insertar en la base de datos
    return Response(status_code=HTTP_201_CREATED)  # Devuelve una respuesta vacía con código 201

# Ruta para actualizar un usuario existente
@app.put("/api/update/{id}", status_code=HTTP_204_NO_CONTENT)
def update(user_data: UserSchema, id: str):
    data = user_data.dict()  # Convierte los datos recibidos a diccionario
    data["id"] = id  # Asigna el id recibido por URL al diccionario
    conn.update(data)  # Actualiza el registro en la base de datos
    return Response(status_code=HTTP_204_NO_CONTENT)  # Devuelve respuesta vacía con código 204

# Ruta para eliminar un usuario por su ID
@app.delete("/api/deleteUsuario/{id}", status_code=HTTP_204_NO_CONTENT)
def delete(id: str):
    conn.delete(id)  # Llama al método para eliminar el usuario
    return Response(status_code=HTTP_204_NO_CONTENT)  # Devuelve respuesta vacía con código 204
