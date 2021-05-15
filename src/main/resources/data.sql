INSERT INTO users (username, password, enabled)
SELECT 'admin', 'manage', 'TRUE'
WHERE NOT EXISTS (SELECT * FROM users WHERE username='admin');