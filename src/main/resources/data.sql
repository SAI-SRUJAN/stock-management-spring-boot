INSERT INTO users (username, password, enabled)
SELECT 'admin', '$2a$10$uXBi7ZbeGrdX17aeA7lXZ.F.mXpdUIcO8AM5iWyHWRtbIjQ1xb9DG', '1'
WHERE NOT EXISTS (SELECT * FROM users WHERE username='admin');
INSERT INTO authorities (username, authority)
SELECT 'admin', 'ADMIN'
WHERE NOT EXISTS (SELECT * FROM authorities WHERE username='admin');