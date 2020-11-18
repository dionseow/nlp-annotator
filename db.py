import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """ Create db conn to sqlite db"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        return conn, cursor
    except Error as e:
        print(e)

def init_db(db_file):
    conn, cursor = create_connection(db_file)
    cursor.execute("""CREATE TABLE annotated_text(text TEXT)""")
    cursor.close()
    conn.close()
    return True

def update_db(db_file, result):
    conn, cursor = create_connection(db_file)
    cursor.execute("""INSERT INTO annotated_text(text) VALUES (?)""", (result,))
    conn.commit()
    cursor.close()
    conn.close()
