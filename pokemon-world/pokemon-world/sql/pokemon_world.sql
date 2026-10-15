CREATE DATABASE IF NOT EXISTS pokemon_world
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE pokemon_world;

CREATE TABLE IF NOT EXISTS pokemons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    tipo VARCHAR(30) NOT NULL,
    descricao TEXT,
    altura DECIMAL(4,2) NOT NULL,
    peso DECIMAL(6,2) NOT NULL
);

INSERT INTO pokemons (nome, numero, tipo, descricao, altura, peso) VALUES
('Pikachu', 25, 'Elétrico', 'Um Pokémon fofo e elétrico, símbolo da franquia.', 0.4, 6.0),
('Eevee', 133, 'Normal', 'Pode evoluir para vários tipos diferentes.', 0.3, 6.5);
