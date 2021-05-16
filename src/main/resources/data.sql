INSERT INTO authorities (username, authority)
SELECT 'admin', 'ADMIN'
WHERE NOT EXISTS (SELECT * FROM authorities WHERE username='admin');