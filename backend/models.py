from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String,)
    last_name = Column(String)
    age = Column(Integer)

'''
For migrations:

docker-compose run web alembic revision --autogenerate -m "First migration"

docker-compose run web alembic upgrade head
'''