class AuthManager:
    def __init__(self):
        self.sessions = {}

    def login(self, username, password):
        if self.validate(username, password):
            token = self.generate_token()
            self.sessions[username] = token
            return token
        return None

    def validate(self, username, password):
        return len(password) >= 8

    def generate_token(self):
        import secrets
        return secrets.token_hex(32)

    def logout(self, username):
        self.sessions.pop(username, None)
