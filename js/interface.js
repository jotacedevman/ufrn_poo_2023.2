class Interface {

// Classe possuí várias funções estáticas.
// Não é necessário implementação do construtor.
constructor() {
}

static el(elems) {
  if (elems.includes('#')) {
    return document.querySelector(elems);
  } else if (seletor.includes('.')) {
    return document.querySelectorAll(elems);
  }
  
  // Caso não tenha '#' nem '.', busca de forma padrão (como tag HTML)
  return document.querySelector(elems);
}

// Função para mostrar mensagens de alerta no elemento main-logs.
static msg(m) {
  Interface.el('#display').innerHTML = m;
}

static editar() {}

static salvar() {
  let nome = Interface.el('#nome').value.trim();
  
  let n1 = Number(Interface.el('#n1').value);
  let n2 = Number(Interface.el('#n2').value);
  let n3 = Number(Interface.el('#n3').value);

  let a1 = new Aluno(nome, n1, n2, n3);
  let m = a1.gerarMedia(n1, n2, n3);
  a1.gerarEstado(m);
  //turma[turma.length] = a1;
  //alert('aluno cadastrado');
  Interface.msg("Aluno cadastrado!");
  return a1;
}

static listar(turma) {
  const btnCadastrar = Interface.el('#btn-cadastrar');
  const tabCadastrar = Interface.el('#tab-cadastrar');
  const btnListar = Interface.el('#btn-listar');
  const tabListar = Interface.el('#tab-listar');

  btnListar.classList.add('active');
  btnCadastrar.classList.remove('active');

  // Ajusta o conteúdo visível
  tabListar.classList.add('active');
  tabCadastrar.classList.remove('active');
  let lista = '<table>';
  lista += '<tr><th>Nome</th> <th>N1</th> <th>N2</th> <th>N3</th> <th>Media</th> <th>Situação</th> <th>Editar</th></tr>';
  for (let i = 0; i < turma.length; i++) {
    lista =
      lista +
      "<tr>"+
      "<td>"+ turma[i].getNome() +"</td>"+
      "<td>"+ turma[i].getNota(1) +"</td>"+
      "<td>"+ turma[i].getNota(2) +"</td>"+
      "<td>"+ turma[i].getNota(3) +"</td>"+
      "<td>"+ turma[i].media.toFixed(2) +"</td>"+
      "<td>"+ turma[i].estado +"</td>"+
      "<td>"+ "<button>...</button>" +"<td>"+
      "</tr>";
  }
  lista += "</table>"
  Interface.el('#alunos').innerHTML = lista;
}

static cadastrar() {
  const btnCadastrar = Interface.el('#btn-cadastrar');
  const tabCadastrar = Interface.el('#tab-cadastrar');
  const btnListar = Interface.el('#btn-listar');
  const tabListar = Interface.el('#tab-listar');

  btnListar.classList.remove('active');
  btnCadastrar.classList.add('active');

  // Ajusta o conteúdo visível
  tabListar.classList.remove('active');
  tabCadastrar.classList.add('active');
}

}
//fim da classe
