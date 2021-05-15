INSERT INTO users (username, password, enabled)
SELECT 'vc', 'manage', 'TRUE'
WHERE NOT EXISTS (SELECT * FROM users WHERE username='vc');