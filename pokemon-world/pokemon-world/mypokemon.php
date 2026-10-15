<?php

require 'php/db.php';

$mensagem = "";

// EXCLUIR
if (isset($_GET['excluir'])) {
    $sql = $pdo->prepare("DELETE FROM pokemons WHERE id = ?");
    $sql->execute([$_GET['excluir']]);
    header("Location: mypokemon.php?sucesso=excluido");
    exit;
}

// CADASTRAR OU ATUALIZAR
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome']);
    $numero = trim($_POST['numero']);
    $tipo = trim($_POST['tipo']);
    $descricao = trim($_POST['descricao']);
    $altura = trim($_POST['altura']);
    $peso = trim($_POST['peso']);

    if ($nome !== "" && $numero !== "" && $tipo !== "") {

        if (isset($_POST['id']) && $_POST['id'] !== "") {
            // para editar um que já existe
            $sql = $pdo->prepare(
                "UPDATE pokemons SET nome=?, numero=?, tipo=?, descricao=?, altura=?, peso=? WHERE id=?"
            );
            $sql->execute([$nome, $numero, $tipo, $descricao, $altura, $peso, $_POST['id']]);
            header("Location: mypokemon.php?sucesso=atualizado");
        } else {
            // cadastro novo
            $sql = $pdo->prepare(
                "INSERT INTO pokemons (nome, numero, tipo, descricao, altura, peso) VALUES (?, ?, ?, ?, ?, ?)"
            );
            $sql->execute([$nome, $numero, $tipo, $descricao, $altura, $peso]);
            header("Location: mypokemon.php?sucesso=cadastrado");
        }
        exit;

    } else {
        $mensagem = "Preencha pelo menos nome, número e tipo!";
    }
}

$pokemonEditando = null;
if (isset($_GET['editar'])) {
    $sql = $pdo->prepare("SELECT * FROM pokemons WHERE id = ?");
    $sql->execute([$_GET['editar']]);
    $pokemonEditando = $sql->fetch(PDO::FETCH_ASSOC);
}

$todos = $pdo->query("SELECT * FROM pokemons ORDER BY numero")->fetchAll(PDO::FETCH_ASSOC);

if (isset($_GET['sucesso'])) {
    $textos = [
        'cadastrado' => 'Pokémon cadastrado com sucesso!',
        'atualizado' => 'Pokémon atualizado com sucesso!',
        'excluido'   => 'Pokémon removido.',
    ];
    $mensagem = $textos[$_GET['sucesso']] ?? "";
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meus Pokémon — Pokémon World</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Nunito:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="topo">
    <div class="logo"><span class="estrela">✦</span> Pokémon World</div>
    <nav>
      <ul class="menu">
        <li><a href="index.html">Início</a></li>
        <li><a href="pokedex.html">Pokédex</a></li>
        <li><a href="mypokemon.php" aria-current="page">Meus Pokémons</a></li>
      </ul>
    </nav>
  </header>

  <section class="painel">
    <h1>Meus Pokémons</h1>

    <?php if ($mensagem): ?>
      <p class="mensagem"><?= htmlspecialchars($mensagem) ?></p>
    <?php endif; ?>

    <form class="formulario" method="POST" action="mypokemon.php">

      <?php if ($pokemonEditando): ?>
        <input type="hidden" name="id" value="<?= htmlspecialchars($pokemonEditando['id']) ?>">
      <?php endif; ?>

      <div>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required
               value="<?= htmlspecialchars($pokemonEditando['nome'] ?? '') ?>">
      </div>

      <div>
        <label for="numero">Número (Pokédex)</label>
        <input type="number" id="numero" name="numero" required
               value="<?= htmlspecialchars($pokemonEditando['numero'] ?? '') ?>">
      </div>

      <div>
        <label for="tipo">Tipo</label>
        <input type="text" id="tipo" name="tipo" required
               value="<?= htmlspecialchars($pokemonEditando['tipo'] ?? '') ?>">
      </div>

      <div>
        <label for="altura">Altura (m)</label>
        <input type="number" step="0.01" min="0" id="altura" name="altura"
               value="<?= htmlspecialchars($pokemonEditando['altura'] ?? '') ?>">
      </div>

      <div>
        <label for="peso">Peso (kg)</label>
        <input type="number" step="0.01" min="0" id="peso" name="peso"
               value="<?= htmlspecialchars($pokemonEditando['peso'] ?? '') ?>">
      </div>

      <div class="campo-largo">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" name="descricao" rows="3"><?= htmlspecialchars($pokemonEditando['descricao'] ?? '') ?></textarea>
      </div>

      <div class="acoes-formulario">
        <button type="submit" class="botao">
          <?= $pokemonEditando ? 'Salvar alterações' : 'Cadastrar Pokémon' ?>
        </button>
        <?php if ($pokemonEditando): ?>
          <a class="botao secundario" href="mypokemon.php">Cancelar edição</a>
        <?php endif; ?>
      </div>
    </form>

    <table class="tabela-pokemons">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Altura</th>
          <th>Peso</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($todos as $p): ?>
          <tr>
            <td><?= htmlspecialchars($p['numero']) ?></td>
            <td><?= htmlspecialchars($p['nome']) ?></td>
            <td><?= htmlspecialchars($p['tipo']) ?></td>
            <td><?= htmlspecialchars($p['altura']) ?> m</td>
            <td><?= htmlspecialchars($p['peso']) ?> kg</td>
            <td class="acoes-tabela">
              <a class="editar" href="mypokemon.php?editar=<?= (int) $p['id'] ?>">Editar</a>
              <a class="excluir" href="mypokemon.php?excluir=<?= (int) $p['id'] ?>"
                 onclick="return confirm('Tem certeza que deseja excluir este Pokémon?');">Excluir</a>
            </td>
          </tr>
        <?php endforeach; ?>

        <?php if (empty($todos)): ?>
          <tr>
            <td colspan="6" style="text-align:center; color: var(--texto-claro);">
              Nenhum Pokémon cadastrado ainda.
            </td>
          </tr>
        <?php endif; ?>
      </tbody>
    </table>
  </section>

  <footer>
    Pokémon World — Lavínia Baere
  </footer>

</body>
</html>
