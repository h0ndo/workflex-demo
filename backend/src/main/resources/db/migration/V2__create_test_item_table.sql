CREATE TABLE test_item (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO test_item (name) VALUES ('Hello from PostgreSQL');
