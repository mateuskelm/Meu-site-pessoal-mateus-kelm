// Função para mostrar a seção selecionada
function showSection(sectionId) {
  // Esconde todas as seções
  const sections = document.querySelectorAll("main > section");
  sections.forEach((section) => {
    section.classList.add("d-none"); // Esconde a seção
  });

  // Exibe a seção que foi clicada
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("d-none");
  }
}

// Função para mostrar as informações sobre a tarefa
function showTask(section, taskId) {
  // Esconde todas as informações de tarefas
  const taskInfoSections = document.querySelectorAll('[id^="task-info-"]');
  taskInfoSections.forEach((taskInfo) => {
    taskInfo.classList.add("d-none"); // Esconde as informações da tarefa
  });

  // Exibe as informações da tarefa selecionada
  const taskInfo = document.getElementById(`task-info-${section}`);
  if (taskInfo) {
    taskInfo.classList.remove("d-none");
    taskInfo.innerHTML = getTaskContent(section, taskId); // Preenche o conteúdo com base na tarefa
  }
}

// Função para obter o conteúdo de uma tarefa baseado na seção e tarefa
function getTaskContent(section, taskId) {
  switch (section) {
    case "humanas":
      return getHumanasTaskContent(taskId);
    case "natureza":
      return getNaturezaTaskContent(taskId);
    case "linguagens":
      return getLinguagensTaskContent(taskId);
    case "matematica":
      return getMatematicaTaskContent(taskId);
    default:
      return "<p>Sem informações sobre essa tarefa.</p>";
  }
}

// Funções específicas para cada seção, retornando o conteúdo da tarefa

function getHumanasTaskContent(taskId) {
  switch (taskId) {
    case "historia":
      return "<h3>Tarefa em História</h3>" +
             "<p> Análise de Movimentos Sociais nas Redes Digitais - A história é uma área fundamental para entender o contexto em que vivemos e como chegamos até aqui. No caso desta tarefa, a abordagem histórica está voltada para a análise dos movimentos sociais e sua adaptação ao ambiente digital, especialmente nas redes sociais, como o Instagram. A habilidade abordada envolve a caracterização e avaliação das redes de informação e comunicação na sociedade, considerando aspectos como regulamentação, democratização do acesso, segurança, privacidade e o direito à comunicação.</p>" +
             "<img src='assets images/images/historia.png' alt='Imagem de História' width='500' height='550'>";
    case "geografia":
      return "<h3>Tarefa em Geografia</h3>" +
      "<p>A atividade sobre Guerras Híbridas me chamou a atenção porque aborda uma temática extremamente atual e relevante no cenário global. O conceito de guerra híbrida vai além dos conflitos tradicionais, misturando ataques cibernéticos, desinformação e intervenções militares de forma estratégica e muitas vezes difícil de detectar. Esse tema despertou minha curiosidade, pois me fez refletir sobre como a tecnologia e as novas formas de comunicação estão mudando o conceito de guerra e impactando a segurança mundial.</p>" +
      "<img src='assets images/images/geografia.png' alt='Imagem de Geografia' width='500' height='550'>";

    case "filosofia":
      return "<h3>Tarefa em Filosofia</h3>" +
             "<p>Essa atividade examina a política de embranquecimento que foi promovida no Brasil durante o século XIX, com o objetivo de transformar a sociedade brasileira e formar uma grande nacionalidade brasileira. Através de textos históricos, a atividade explora a ideia de que a imigração de europeus deveria substituir a mão de obra africana e indígena, além de promover a civilização e a elevada moral trazida pelos imigrantes europeus.</p>" +
             "<img src='assets images/images/filosofia.png' alt='Imagem de Filosofia' width='500' height='550'>";
    case "sociologia":
      return "<h3>Tarefa em Sociologia</h3>" +
             "<p>Minha favorita em sociologia, foi a integrada que precisamos fazer uma simulação da ONU, nunca tinha feito isso antes e me diverti muito, foi uma experiencia diferente e legal.</p>" +
             "<img src='assets images/images/sociologia.png' alt='Imagem de Sociologia' width='500' height='550'>";
    default:
      return "<p>Tarefa não encontrada.</p>";
  }
}

function getNaturezaTaskContent(taskId) {
  switch (taskId) {
    case "fisica":
      return "<h3>Tarefa em Fisica</h3>" +
             "<p> Relatório de Experimento Digital: Efeito Fotoelétrico - Na atividade de Física, o foco foi o estudo do efeito fotoelétrico, um fenômeno no qual a luz incide sobre uma superfície metálica e faz com que elétrons sejam liberados dessa superfície. A atividade envolveu a realização de um experimento digital para observar como diferentes intensidades e frequências de luz podem afetar a emissão dos elétrons. Através desse experimento, foi possível aplicar conceitos fundamentais da física, como a dualidade da luz (luz como partícula e onda), e entender como a energia dos fótons está relacionada à liberação de elétrons.</p>" +
             "<img src='assets images/images/fisica.png' alt='Imagem de História' width='450' height='400'>";
    case "quimica":
      return "<h3>Tarefa em Quimica</h3>" +
      "<p>  Polímeros Naturais - Na atividade sobre Polímeros Naturais, os alunos realizaram uma pesquisa em grupo para explorar diferentes tipos de polímeros encontrados na natureza. Polímeros naturais são grandes moléculas formadas por unidades repetitivas, conhecidas como monômeros, que são derivadas de fontes naturais como plantas, animais e microrganismos. Exemplos de polímeros naturais incluem a celulose (encontrada nas paredes celulares das plantas), a quitina (presente no exoesqueleto de artrópodes), e a goma arábica (extraída de árvores).</p>" +
      "<img src='assets images/images/quimica.png' alt='Imagem de História' width='450' height='400'>";
    case "biologia":
      return "<h3>Tarefa em Biologia</h3>" +
      "<p> Reino animal - Na atividade sobre o Reino Animal, os alunos realizaram uma apresentação sobre as principais características e a diversidade dos animais. A tarefa envolveu a pesquisa sobre diferentes grupos de animais, suas adaptações ao ambiente, anatomia, fisiologia e importância ecológica. Durante a pesquisa, foram exploradas as classificações do Reino Animal, incluindo mamíferos, aves, répteis, anfíbios, peixes e invertebrados.</p>" +
      "<img src='assets images/images/biologia.png' alt='Imagem de História' width='450' height='400'>";
    default:
      return "<p>Tarefa não encontrada.</p>";
  }
}

function getLinguagensTaskContent(taskId) {
  switch (taskId) {
    case "portugues":
      return "<h3>Tarefa em Portugues</h3>" +
      "<p> Minha preferida foi o manifesto. A atividade do Manifesto Coletivo teve como objetivo promover uma reflexão crítica e a expressão coletiva sobre questões sociais, políticas e culturais que afetam os alunos no momento de transição para o mercado de trabalho ou para a educação superior. O manifesto foi elaborado a partir de uma pesquisa sobre temas relevantes, como desigualdade social, educação, meio ambiente e direitos humanos..</p>" +
      "<img src='assets images/images/portugues.png' alt='Imagem de História' width='450' height='400'>";
    case "ingles":
      return "<h3>Tarefa em Inglês</h3>" +
      "<p> Minha atividade facorita de ingles foi o advertising, onde tivemos que criar um instagram para divulgação do manifesto, completamente em inglês.</p>" +
      "<img src='assets images/images/ingles.png' alt='Imagem de História' width='450' height='400'>";
    case "artes":
      return "<h3>Tarefa em Artes</h3>" +
      "<p> Nesta atividade , cada um deveria criar uma página para o Livro Onírico da Classe com uma estética surrealista na frente e escrita dadaísta no verso. A proposta foi explorar o Dadaísmo e o Surrealismo através de colagens, desenhos, contornos e pintura, trazendo uma produção manual que representasse essas correntes artísticas de maneira criativa e pessoal.</p>" +
      "<img src='assets images/images/artes.png' alt='Imagem de História' width='450' height='400'>";
    case "educacao_fisica":
      return "<h3>Tarefa em Educação fisica</h3>" +
      "<p> Nesta atividade, o objetivo foi explorar os movimentos artísticos do Dadaísmo e do Surrealismo e aplicá-los de forma criativa na criação de um jogo de invasão, desconstruindo as regras tradicionais. Cada grupo deveria escolher um jogo, como o futebol, e adaptar suas regras, pensando em formas de torná-lo mais inclusivo e acessível para todas as pessoas, independentemente das habilidades físicas.</p>" +
      "<img src='assets images/images/educacaofisica.png' alt='Imagem de História' width='450' height='400'>";
    default:
      return "<p>Tarefa não encontrada.</p>";
  }
}

function getMatematicaTaskContent(taskId) {
  switch (taskId) {
    case "matematica":
      return "<h3>Tarefa em Matematica</h3>" +
      "<p> Meu assunto preferido esse ano em matematica, foi as conicas, esta tarefa sobre uma pesquisa de conicas foi a que mais me interessou e gostei muito de aprender sobre.</p>" +
      "<img src='assets images/images/matematica.png' alt='Imagem de História' width='500' height='400'>";
    default:
      return "<p>Tarefa não encontrada.</p>";
  }
}