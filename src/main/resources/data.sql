INSERT INTO users (username, password, enabled)
SELECT 'admin', 'manage', 'TRUE'
WHERE NOT EXISTS (SELECT * FROM users WHERE username='admin');
INSERT INTO authorities (username, authority)
SELECT 'admin', 'ADMIN'
WHERE NOT EXISTS (SELECT * FROM authorities WHERE username='admin');