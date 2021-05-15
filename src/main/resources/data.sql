INSERT INTO users (username, password, enabled)
SELECT 'vc', 'manage', '1'
WHERE NOT EXISTS (SELECT * FROM users WHERE firstname='admin');