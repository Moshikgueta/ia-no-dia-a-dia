window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m12", n: 12, title: "Projeto final", icon: "🏁",
  desc: "Você vai mapear as tarefas do seu negócio, montar um plano de 30 dias para colocar a IA na rotina e aprender a medir o que funcionou para continuar evoluindo.",
  lessons: [
    {
      id: "m12-a1",
      title: "O mapa de tarefas do seu negócio (o que a IA pode assumir)",
      dur: 12,
      goal: "Ao final desta aula, você vai ter uma lista das tarefas do seu negócio, separadas entre o que a IA pode ajudar, o que pode ajudar em parte e o que continua só com você.",
      intro: [
        "Você aprendeu muita coisa neste curso: atendimento, marketing, vendas, finanças, estoque, documentos, imagens, assistentes. Agora é hora de juntar tudo no seu negócio, do seu jeito.",
        "O primeiro passo é enxergar a semana inteira. O Carlos, dono de uma pizzaria, anotou tudo o que fazia durante uma semana e descobriu que passava quase uma hora por dia respondendo as mesmas perguntas no WhatsApp. Foi por ali que ele começou.",
        "O mapa de tarefas mostra onde a IA ajuda mais e onde ela não deve entrar: o sabor da massa, o abraço no cliente fiel, a decisão sobre dinheiro e imposto continuam com você."
      ],
      steps: [
        "Durante um dia (ou de memória), anote todas as tarefas da sua semana, por área: atendimento, marketing, vendas, finanças, estoque, equipe, documentos.",
        "Ao lado de cada uma, escreva quanto tempo leva por semana, mais ou menos.",
        "Cole a lista na IA com o pedido abaixo para ela separar em três grupos: a IA ajuda muito, a IA ajuda em parte, só você.",
        "Revise a classificação. Você conhece seu negócio melhor do que a IA: mude o que não fizer sentido.",
        "Marque as 3 tarefas que mais tomam tempo e onde a IA ajuda muito. Elas serão a base do seu plano de 30 dias."
      ],
      prompts: [
        { label: "Montar o mapa de tarefas", text: "Esta é a ficha do meu negócio: [cole a ficha].\nEstas são as tarefas da minha semana, com o tempo aproximado de cada uma: [cole a lista].\nOrganize em uma tabela com as colunas: tarefa, área, tempo por semana, como a IA pode ajudar (seja concreto), e classificação: “IA ajuda muito”, “IA ajuda em parte” ou “só eu”.\nTarefas que envolvem decisão de dinheiro, impostos, contratos ou contato pessoal importante com o cliente nunca devem ser “IA ajuda muito”.\nNo final, aponte as 3 tarefas onde começar, pelo maior ganho de tempo com menor risco." }
      ],
      example: {
        bad: "O que a IA pode fazer pelo meu negócio?",
        good: "Tenho um salão com 2 cadeiras. Gasto umas 5 horas por semana respondendo preços no WhatsApp, 2 horas fazendo posts e 1 hora confirmando horários. Organize essas tarefas e diga onde a IA ajuda mais."
      },
      tip: "Não tente mudar tudo de uma vez. Três tarefas bem resolvidas valem mais do que dez começadas e abandonadas.",
      warn: "A IA pode ajudar a pensar, mas a classificação final é sua. Tarefas com dados sensíveis de clientes, decisões financeiras e assuntos legais continuam sob a sua responsabilidade, com apoio do contador ou do advogado quando necessário.",
      exercise: "Liste agora pelo menos 10 tarefas da sua semana com o tempo de cada uma, gere o mapa com a IA e circule as 3 por onde você vai começar.",
      check: [
        "Tenho uma lista das tarefas da minha semana com o tempo de cada uma.",
        "Sei separar o que a IA pode assumir, o que ela ajuda em parte e o que fica comigo.",
        "Escolhi 3 tarefas para começar."
      ]
    },
    {
      id: "m12-a2",
      title: "O seu plano de 30 dias",
      dur: 10,
      goal: "Ao final desta aula, você vai ter um plano simples de 4 semanas para colocar a IA na rotina do seu negócio, com tarefas curtas para cada semana.",
      intro: [
        "Saber usar a IA é uma coisa; usar todo dia é outra. O que faz diferença é a rotina. Um plano curto, com passos pequenos, cabe na vida corrida de quem toca um negócio.",
        "A ideia é simples: uma tarefa principal por semana, tirada do seu mapa de tarefas, e de 15 a 20 minutos por dia de prática. A dona de um ateliê, por exemplo, pode usar a semana 1 para as respostas rápidas do WhatsApp, a semana 2 para os posts, a semana 3 para os orçamentos e a semana 4 para revisar tudo.",
        "O plano não precisa ser perfeito. Precisa ser seu e caber na sua agenda."
      ],
      steps: [
        "Pegue as 3 tarefas que você escolheu na aula anterior.",
        "Use o pedido abaixo para a IA montar o plano de 4 semanas, com tarefas diárias curtas.",
        "Ajuste ao seu ritmo: se a sexta é o dia mais corrido, deixe a sexta livre.",
        "Coloque um lembrete diário na Google Agenda ou no despertador do celular, no horário mais tranquilo do seu dia.",
        "Imprima ou salve o plano onde você vê sempre (na geladeira, no balcão, como fundo de tela).",
        "No fim de cada semana, marque o que fez e o que ficou para trás. Ajuste a semana seguinte sem culpa."
      ],
      prompts: [
        { label: "Montar o plano de 30 dias", text: "Esta é a ficha do meu negócio: [cole a ficha].\nAs 3 tarefas onde quero usar a IA são: [tarefa 1], [tarefa 2], [tarefa 3].\nTenho cerca de [15/20/30] minutos por dia, no horário [ex.: antes de abrir a loja]. Os dias mais corridos são [dias].\nMonte um plano de 4 semanas:\n- Uma tarefa principal por semana (a semana 4 é para revisar e ajustar).\n- Para cada dia útil, uma ação curta e concreta, que eu consiga fazer pelo celular.\n- Ao final de cada semana, um sinal simples de que deu certo.\nFormato de lista, linguagem simples, sem termos técnicos." },
        { label: "Replanejar quando atrasar", text: "Estou na semana [número] do meu plano de 30 dias e fiquei atrasado(a) porque [motivo]. Este é o plano: [cole]. Reorganize o que falta de forma realista, cortando o que for menos importante." }
      ],
      tip: "Junte a prática a algo que você já faz todo dia, como o café antes de abrir. Hábito novo pendurado num hábito antigo pega mais fácil.",
      exercise: "Monte agora o seu plano de 30 dias com a IA, ajuste ao seu ritmo e coloque o lembrete diário no celular.",
      check: [
        "Tenho um plano de 4 semanas com uma tarefa principal por semana.",
        "Tenho um horário e um lembrete diário para praticar.",
        "Sei replanejar com a IA quando a semana não sair como o previsto."
      ]
    },
    {
      id: "m12-a3",
      title: "Medir resultados e continuar aprendendo",
      dur: 10,
      goal: "Ao final desta aula, você vai saber medir, de forma simples, se a IA está ajudando o seu negócio e como continuar aprendendo depois do curso.",
      intro: [
        "Como saber se está valendo a pena? Não precisa de planilha complicada. Bastam poucas coisas anotadas antes e depois: quanto tempo você gastava numa tarefa, quantas mensagens ficavam sem resposta, quantos posts você conseguia fazer por semana.",
        "O Seu Antônio, da loja de bairro, anotou por duas semanas quanto tempo levava para responder clientes no WhatsApp. Depois das respostas rápidas e da ajuda da IA, anotou de novo. Os números eram dele, da vida real, e mostraram onde continuar investindo tempo.",
        "E a IA muda rápido: aparecem recursos novos, telas mudam, planos mudam. Quem continua aprendendo um pouquinho por mês não fica para trás."
      ],
      steps: [
        "Escolha 2 ou 3 medidas simples ligadas às suas tarefas, por exemplo: minutos por dia no WhatsApp, posts por semana, orçamentos enviados, clientes que voltaram.",
        "Anote o número de hoje (o “antes”) numa nota do celular.",
        "Uma vez por semana, durante o plano de 30 dias, anote o número de novo.",
        "No fim do mês, cole as anotações na IA com o primeiro pedido abaixo e analise o que melhorou e o que não mudou.",
        "Decida: o que continua, o que muda, qual a próxima tarefa a levar para a IA.",
        "Reserve um momento por mês para aprender algo novo: testar um recurso, rever uma aula deste curso ou perguntar à própria IA o que mudou."
      ],
      prompts: [
        { label: "Analisar meus resultados", text: "Durante um mês usei a IA no meu negócio, [tipo de negócio], para: [tarefas].\nEstas são as minhas anotações semanais: [cole os números de antes e de cada semana].\nCom base apenas nesses números, sem inventar dados:\n1. O que melhorou e o que ficou igual.\n2. Possíveis motivos.\n3. O que eu devo continuar, mudar ou parar.\n4. Qual a próxima tarefa que vale levar para a IA." },
        { label: "Continuar aprendendo", text: "Já sei usar a IA para [liste o que você já faz]. Tenho um(a) [tipo de negócio] e pouco tempo. Sugira 3 coisas novas para eu aprender no próximo mês, uma por semana, começando pela mais simples. Para cada uma, diga o que é, por que ajuda o meu negócio e um primeiro passo de 10 minutos." }
      ],
      tip: "Comemore os pequenos ganhos. Meia hora a menos por dia no celular são mais de três horas por semana de volta para você, para a família ou para o seu ofício.",
      warn: "Use os seus próprios números, mesmo que aproximados, e não confie em estatísticas que a IA citar sem fonte. Na análise, ela só deve trabalhar com os dados que você deu.",
      exercise: "Escolha agora 2 medidas, anote o número de hoje numa nota chamada “Antes e depois” e coloque um lembrete semanal para atualizar.",
      check: [
        "Sei escolher medidas simples para saber se a IA está ajudando.",
        "Tenho meus números de “antes” anotados.",
        "Tenho um jeito de continuar aprendendo um pouco todo mês."
      ]
    }
  ]
});
