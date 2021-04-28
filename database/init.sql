BEGIN;

DROP TABLE IF EXISTS users, sessions, reviews CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE sessions (
    sid TEXT PRIMARY KEY,
    data JSON NOT NULL
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    park_name TEXT NOT NULL,
    park_location TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    review_content TEXT NOT NULL
);

-- INSERT INTO users (username, email, password) VALUES ;


COMMIT;