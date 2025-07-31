class MongoException(Exception):
    pass


class UserNotFound(MongoException):
    def __init__(self, id_=None):
        super().__init__(f'User {id_} cannot be found.')
