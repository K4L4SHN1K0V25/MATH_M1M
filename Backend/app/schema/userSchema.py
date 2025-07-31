from pydantic import BaseModel  # Importa BaseModel para definir esquemas de datos con validación
from typing import Optional  # Importa Optional para declarar campos que pueden ser None

class UserSchema(BaseModel):  # Define un esquema de datos llamado UserSchema
    id: Optional[int] = None  # Campo opcional 'id', por defecto None (útil para creación vs. actualización)
    nombre: str  # Campo obligatorio tipo string para el nombre
    email: str  # Campo obligatorio tipo string para el email
    contraseña: str  # Campo obligatorio tipo string para la contraseña
