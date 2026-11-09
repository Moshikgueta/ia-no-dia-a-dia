window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m09", n: 9, title: "Documentos e burocracia", icon: "📄",
  desc: "Você vai usar a IA para organizar papéis, rascunhar recibos e contratos simples, entender a linguagem dos impostos e escrever e-mails formais sem sofrimento — sempre com a palavra final do seu contador ou advogado.",
  lessons: [
    {
      id: "m09-a1",
      title: "Do papel para o digital com uma foto",
      dur: 8,
      goal: "Ao final desta aula, você vai transformar a foto de um papel (nota de fornecedor, lista, caderno) em texto organizado que dá para guardar, buscar e copiar.",
      intro: [
        "Todo negócio pequeno vive cheio de papel: a nota do fornecedor de farinha, o caderninho de encomendas da confeitaria, a lista de preços escrita à mão na parede da marcenaria. O problema é que papel some, molha e não dá para procurar nada nele.",
        "A IA consegue “ler” uma foto e passar o conteúdo para texto, já organizado do jeito que você pedir: em lista, em tabela ou em resumo. Você tira a foto com o celular, envia na conversa e recebe tudo digitado em segundos.",
        "Atenção: a IA pode errar letras ou números, principalmente em letra de mão ou foto torta. Por isso, você sempre confere os valores antes de usar."
      ],
      steps: [
        "Escolha um papel do dia a dia: uma nota de fornecedor, uma página do caderno de pedidos ou uma lista de preços.",
        "Coloque o papel numa superfície plana, com boa luz, e tire a foto bem de cima, sem sombra e sem cortar as bordas.",
        "Abra o Claude ou o ChatGPT no celular, toque no ícone de anexar (geralmente um clipe ou um “+”) e envie a foto.",
        "Cole o pedido abaixo, dizendo em que formato você quer o resultado.",
        "Confira linha por linha, principalmente datas, quantidades e valores. Corrija o que estiver errado pedindo à própria IA.",
        "Copie o resultado e guarde num lugar fácil: uma nota no celular, uma planilha ou uma pasta no Google Drive com nome e data."
      ],
      prompts: [
        { label: "Foto vira tabela", text: "Estou enviando a foto de [uma nota de fornecedor / uma página do meu caderno de pedidos]. Passe o conteúdo para uma tabela com as colunas: [data, produto, quantidade, valor unitário, valor total].\nSe alguma palavra ou número estiver ilegível, escreva [?] no lugar e me avise no final. Não invente nada que não esteja na foto." },
        { label: "Caderno vira lista organizada", text: "Esta é a foto do meu caderno de encomendas da semana. Organize em uma lista por dia de entrega, com: nome do cliente (só o primeiro nome), o que foi pedido e o horário combinado. No final, me diga quantas encomendas tenho em cada dia." }
      ],
      example: {
        bad: "Lê isso aí.",
        good: "Passe esta nota de fornecedor para uma tabela com data, produto, quantidade e valor. Marque com [?] o que não der para ler e não invente nada."
      },
      tip: "Crie uma pasta “Notas digitalizadas” e salve cada resultado com a data no nome (ex.: 2026-11-09 Fornecedor Farinha). Daqui a três meses você encontra tudo em segundos.",
      warn: "Antes de fotografar, cubra ou recorte dados sensíveis: CPF, número de cartão, dados bancários e documentos pessoais de clientes não devem ir para a IA. E nunca confie em um valor sem conferir com o papel original.",
      exercise: "Pegue agora uma nota de fornecedor ou uma página de pedidos desta semana, tire a foto, transforme em tabela com a IA e confira todos os números com o papel.",
      check: [
        "Sei tirar uma foto boa de um documento para a IA ler.",
        "Sei pedir o resultado no formato que eu quero, sem a IA inventar o que não leu.",
        "Tenho o hábito de conferir os números e de guardar o resultado num lugar fácil."
      ]
    },
    {
      id: "m09-a2",
      title: "Recibos, termos e contratos simples",
      dur: 10,
      goal: "Ao final desta aula, você vai ter um modelo de recibo e um rascunho de termo de serviço do seu negócio, prontos para revisar e usar.",
      intro: [
        "A Dona Célia tem um ateliê de costura. Uma cliente pagou um sinal para um vestido de festa, desistiu na semana seguinte e pediu o dinheiro de volta. Não havia nada escrito sobre sinal, prazo ou desistência. Virou discussão.",
        "Um recibo bem feito e um termo simples, com as regras combinadas, evitam a maior parte dessas confusões. A IA ajuda a escrever esses textos em linguagem clara, a partir do jeito que você já trabalha.",
        "Mas lembre: a IA faz o rascunho. Para contratos de valor alto, aluguel, sociedade ou qualquer assunto sério, quem decide é um advogado."
      ],
      steps: [
        "Anote em poucas linhas como você trabalha: forma de pagamento, sinal, prazo de entrega, o que acontece se o cliente desistir ou atrasar.",
        "Abra o Claude ou o ChatGPT e cole a sua ficha do negócio (aquela do módulo de fundamentos) para a IA entender quem você é.",
        "Use o primeiro pedido abaixo para criar o modelo de recibo. Peça para deixar os campos variáveis em [colchetes].",
        "Use o segundo pedido para o termo de serviço. Leia tudo em voz alta: se alguma frase soar complicada, peça para simplificar.",
        "Peça à IA: “Quais pontos deste termo eu deveria confirmar com um advogado?”. Anote as respostas.",
        "Salve os modelos no celular ou no Google Drive. Para usar, é só trocar os campos em [colchetes]."
      ],
      prompts: [
        { label: "Modelo de recibo", text: "Crie um modelo de recibo simples para o meu negócio, [nome e tipo do negócio]. Deve ter: nome do negócio, cidade, data, nome de quem pagou, valor em número e por extenso, o que foi pago (ex.: sinal, pagamento total), forma de pagamento e espaço para assinatura.\nDeixe todos os campos que mudam a cada venda entre [colchetes]. Linguagem simples, cabendo em meia página." },
        { label: "Termo de serviço", text: "Escreva um termo de serviço curto e em linguagem simples para [tipo de serviço, ex.: confecção de roupa sob medida]. Minhas regras são:\n- Sinal: [ex.: metade do valor na encomenda]\n- Prazo de entrega: [ex.: até 20 dias após a prova]\n- Desistência: [o que acontece com o sinal]\n- Atraso do cliente para buscar: [regra]\n- Ajustes incluídos: [quantos]\nOrganize em tópicos numerados, com espaço para nome e assinatura das duas partes. No final, liste os pontos que eu devo revisar com um advogado." }
      ],
      tip: "Um termo curto que o cliente realmente lê vale mais do que três páginas que ninguém lê. Mande pelo WhatsApp antes de fechar e peça um “de acordo” por escrito.",
      warn: "A IA não é advogada e pode errar sobre leis e direitos do consumidor. Use o texto como rascunho, revise com um profissional quando houver valor alto ou dúvida, e não coloque dados pessoais de clientes (como CPF) dentro da conversa com a IA — preencha esses campos só no documento final.",
      exercise: "Escreva as regras do seu sinal e da desistência em três linhas, gere o termo de serviço com a IA e salve como modelo no celular.",
      check: [
        "Sei pedir à IA um modelo de recibo com os campos variáveis em colchetes.",
        "Tenho um rascunho de termo com as regras do meu negócio em linguagem simples.",
        "Sei que contratos importantes precisam da revisão de um advogado."
      ]
    },
    {
      id: "m09-a3",
      title: "Entender impostos, MEI e nota fiscal",
      dur: 10,
      goal: "Ao final desta aula, você vai usar a IA para entender termos e cartas sobre impostos e para preparar perguntas claras para o seu contador.",
      intro: [
        "O Seu Jorge tem uma loja de bairro e é MEI. Chegou uma mensagem falando de “DAS em atraso” e ele não sabia se era golpe, se era sério ou o que fazer. Ficou dois dias preocupado.",
        "A IA é ótima para traduzir “contabilês” para o português do dia a dia: o que significa uma sigla, o que uma carta está pedindo, quais perguntas fazer. Ela é como um amigo paciente que explica de novo quantas vezes você precisar.",
        "O que a IA não faz: decidir o seu enquadramento, calcular o imposto que você deve pagar ou dizer se você pode ou não emitir algo. Regras e valores mudam, e cada caso é um caso. Quem decide é o contador, e a fonte oficial é o site do governo."
      ],
      steps: [
        "Anote as palavras ou siglas que você não entende (ex.: DAS, declaração anual, nota fiscal de serviço, enquadramento).",
        "Peça à IA para explicar cada uma em linguagem simples, com um exemplo de negócio parecido com o seu.",
        "Se recebeu uma carta, e-mail ou mensagem, apague dados pessoais (CPF, CNPJ, endereço) e cole o texto para a IA explicar o que está sendo pedido.",
        "Peça à IA uma lista de perguntas para levar ao seu contador.",
        "Confirme tudo com o contador ou no site oficial do governo antes de pagar, assinar ou responder qualquer coisa."
      ],
      prompts: [
        { label: "Explicar em português simples", text: "Sou dono(a) de [tipo de negócio] e sou [MEI / não sei meu enquadramento]. Explique, em linguagem bem simples e com um exemplo do dia a dia, o que é [termo, ex.: DAS / nota fiscal de serviço / declaração anual].\nNão me dê valores, percentuais ou prazos exatos, porque isso muda; diga onde posso confirmar a informação oficial e o que devo perguntar ao meu contador." },
        { label: "Entender uma carta ou mensagem", text: "Recebi o texto abaixo (já tirei meus dados pessoais). Me explique:\n1. O que está sendo pedido, em poucas palavras.\n2. Se há algum sinal de que pode ser golpe (link estranho, pressa, pedido de senha ou pagamento por fora).\n3. Que perguntas devo levar ao meu contador.\n\nTexto: [cole aqui]" },
        { label: "Preparar a conversa com o contador", text: "Vou conversar com meu contador sobre [assunto, ex.: começar a vender por encomenda para empresas que pedem nota fiscal]. Meu negócio é [descrição curta]. Monte uma lista de até 8 perguntas claras e organizadas para eu levar, do mais importante para o menos importante." }
      ],
      example: {
        bad: "Quanto imposto eu pago?",
        good: "Sou MEI com uma confeitaria. Explique em linguagem simples o que é o DAS e me dê perguntas para eu confirmar com meu contador."
      },
      warn: "Não use a IA para calcular imposto ou decidir o seu enquadramento, e não confie em números de alíquota, limite ou prazo que ela der: podem estar errados ou desatualizados. Nunca clique em link de cobrança recebido por mensagem sem confirmar pelo site oficial ou com o contador. E nunca cole senhas, CPF ou CNPJ na conversa.",
      exercise: "Escolha uma sigla ou papel de imposto que sempre te deixou em dúvida, peça a explicação para a IA e gere três perguntas para o seu contador.",
      check: [
        "Sei pedir à IA para explicar termos de impostos em linguagem simples.",
        "Sei tirar meus dados pessoais antes de colar uma carta ou mensagem.",
        "Sei que quem decide sobre imposto e nota fiscal é o contador, e a IA só me ajuda a entender e a perguntar melhor."
      ]
    },
    {
      id: "m09-a4",
      title: "E-mails e cartas formais (banco, prefeitura, fornecedor)",
      dur: 9,
      goal: "Ao final desta aula, você vai escrever um e-mail ou carta formal, educada e clara em poucos minutos, com a ajuda da IA.",
      intro: [
        "A Patrícia tem um salão de beleza e precisava pedir à prefeitura informações sobre a licença para colocar uma placa na fachada. Ficou uma semana adiando porque “não sabia escrever do jeito certo”.",
        "Muita gente trava na hora de escrever para banco, prefeitura ou fornecedor grande. A IA resolve isso: você conta o que quer com as suas palavras, do jeito que falaria, e ela devolve um texto formal, organizado e educado.",
        "A regra é a mesma de sempre: você revisa, confere nomes, datas e valores, e só depois envia."
      ],
      steps: [
        "Escreva (ou dite pelo microfone do celular) o que você precisa, com as suas palavras: para quem é, o que aconteceu e o que você quer.",
        "Use o pedido abaixo, preenchendo os [colchetes].",
        "Leia o resultado. Se ficou longo ou difícil, peça: “Deixe mais curto e mais simples, mantendo o tom educado”.",
        "Confira nomes, datas, números de pedido e valores com os seus papéis.",
        "Copie para o seu e-mail ou WhatsApp, coloque os dados que faltam (como número de protocolo) e envie."
      ],
      prompts: [
        { label: "E-mail formal a partir das minhas palavras", text: "Transforme o texto abaixo em um e-mail formal, educado e direto.\nPara: [banco / prefeitura / fornecedor, e o setor se souber]\nQuem escreve: [seu nome], de [nome do negócio]\nObjetivo: [ex.: pedir informação, reclamar de um problema, pedir prazo]\nO que aconteceu, com minhas palavras: [cole ou escreva aqui]\nInclua um assunto claro para o e-mail, até 3 parágrafos curtos e um pedido final bem objetivo. Deixe em [colchetes] os dados que eu preciso completar." },
        { label: "Reclamação firme para fornecedor", text: "Escreva uma mensagem para o meu fornecedor de [produto]. O pedido [número ou data] chegou [problema: atrasado / faltando itens / com defeito]. Quero [troca / desconto / entrega do que faltou] até [data].\nTom: firme, mas educado, sem ameaças. No máximo 8 linhas. Termine pedindo confirmação por escrito." }
      ],
      example: {
        bad: "Escreve um e-mail pro banco.",
        good: "Escreva um e-mail formal ao gerente do meu banco pedindo para remarcar a reunião de quinta para a semana que vem, porque tenho uma entrega grande. Sou Marcos, da Marcenaria Bom Corte. Curto e educado."
      },
      tip: "Peça duas versões: uma formal para e-mail e uma curtinha para mandar no WhatsApp. Assim você já tem as duas prontas.",
      warn: "Não coloque na conversa senhas, número de conta completo, dados de cartão ou CPF. Escreva [conta] ou [CPF] no lugar e preencha só no e-mail final. E desconfie de qualquer “banco” ou “prefeitura” que peça senha por mensagem.",
      exercise: "Pense num e-mail ou mensagem formal que você está adiando (banco, prefeitura, fornecedor). Escreva com suas palavras, peça a versão formal para a IA, revise e envie hoje.",
      check: [
        "Sei transformar o que eu falo em um e-mail formal com a IA.",
        "Sei pedir ajustes de tamanho e de tom.",
        "Tenho o hábito de conferir dados e não colar informações sensíveis na conversa."
      ]
    }
  ]
});
