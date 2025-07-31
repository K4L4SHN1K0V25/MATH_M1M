import psycopg  # Importa el módulo psycopg para conectarse a PostgreSQL

class userConnection():  # Clase para manejar la conexión y operaciones con la base de datos
    conn = None  # Atributo para almacenar la conexión

    def __init__(self):  # Constructor de la clase
        try:
            # Intenta establecer conexión con la base de datos
            self.conn = psycopg.connect("dbname=Math_M1M user=postgres password=password host=localhost port=5432")
        except psycopg.OperationalError as err:
            # Si hay un error de conexión, lo imprime
            print(err)
            # No se debe cerrar la conexión si falló, porque aún no existe
            # self.conn.close()  # Esta línea podría dar error si self.conn no se asignó

    def read_all(self):  # Lee todos los registros de la tabla usuarios
        with self.conn.cursor() as cur:  # Abre un cursor
            data = cur.execute("""
                select * from "usuarios";
            """)  # Ejecuta la consulta
            return data.fetchall()  # Devuelve todos los resultados

    def read_one(self, id):  # Lee un solo usuario por su id
        with self.conn.cursor() as cur:
            data = cur.execute("""
                select * from "usuarios" where id = %s;
            """, (id,))  # Usa parámetro para evitar inyección SQL
            return data.fetchone()  # Devuelve un solo registro

    def write(self, data):  # Inserta un nuevo usuario
        with self.conn.cursor() as cur:
            cur.execute("""
                insert into public.usuarios ("nombre", "email", "contraseña") values (%(nombre)s,%(email)s,%(contraseña)s);
            """, data)  # Usa diccionario para insertar datos
        self.conn.commit()  # Guarda los cambios

    def delete(self, id):  # Elimina un usuario por id
        with self.conn.cursor() as cur:
            cur.execute("""
                delete from "usuarios" where id = %s;
            """, (id,))  # Usa parámetro id
        self.conn.commit()  # Guarda los cambios

    def update(self, data):  # Actualiza un usuario existente
        with self.conn.cursor() as cur:
            cur.execute("""
                update "usuarios" set nombre = %(nombre)s, email = %(email)s, contraseña = %(contraseña)s where id = %(id)s;
            """, data)  # Actualiza usando un diccionario con los datos
        self.conn.commit()  # Guarda los cambios

    def __del__(self):  # Destructor de la clase
        if self.conn:  # Si hay conexión activa
            self.conn.close()  # Cierra la conexión
