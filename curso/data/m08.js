window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m08", n: 8, title: "Equipe e gestão", icon: "👥",
  desc: "Você vai organizar a escala da equipe, criar checklists para o dia a dia, treinar funcionários novos e contratar com mais segurança usando a IA como assistente.",
  lessons: [
    {
      id: "m08-a1",
      title: "Escala e agenda da equipe",
      dur: 10,
      goal: "Ao final desta aula, você vai ter um rascunho de escala semanal organizado numa tabela, pronto para conferir e compartilhar com a equipe.",
      intro: [
        "Montar a escala toda semana dá dor de cabeça: um pediu folga no sábado, outra só pode de manhã, e o movimento da sexta pede mais gente. No salão ou na pizzaria, uma escala mal feita significa cliente esperando ou funcionário parado.",
        "A IA é boa para encaixar essas peças. Você conta quem está disponível, quando o movimento é maior e as regras que já combinou com a equipe, e ela devolve uma tabela. Depois você confere e ajusta."
      ],
      steps: [
        "Anote os horários de funcionamento e os dias e horários de maior movimento.",
        "Anote a disponibilidade de cada pessoa usando só o primeiro nome ou uma função (ex.: “Atendente 1”).",
        "Anote os pedidos de folga da semana e as regras de jornada e folga que o seu contador orientou.",
        "Use o primeiro pedido para gerar a escala em tabela.",
        "Confira se ninguém ficou sobrecarregado e se as regras foram respeitadas. Peça ajustes à IA se precisar.",
        "Cole no Google Planilhas e compartilhe com a equipe, ou mande uma foto da tabela no grupo do WhatsApp."
      ],
      prompts: [
        { label: "Montar a escala da semana", text: "Monte uma escala semanal para o meu/minha [tipo de negócio].\n- Funcionamento: [dias e horários]\n- Horários de mais movimento: [ex.: sexta e sábado à noite]\n- Quantas pessoas preciso em cada turno: [ex.: 2 de manhã, 4 à noite]\n- Equipe e disponibilidade: [Atendente 1 – só manhã; Pizzaiolo 1 – todos os dias menos segunda; ...]\n- Pedidos de folga desta semana: [...]\n- Regras de jornada e folga que meu contador me orientou: [cole aqui]\n\nEntregue em tabela (dias nas colunas, pessoas nas linhas) para colar no Google Planilhas. Depois, liste quantas horas cada pessoa ficou na semana e aponte qualquer conflito." },
        { label: "Ajustar a escala", text: "Na escala que você fez, [pessoa] não pode mais trabalhar [dia]. Refaça mantendo [quantidade] pessoas no turno da [manhã/noite] e respeitando as mesmas regras. Mostre o que mudou." }
      ],
      tip: "Guarde a escala que funcionou bem como modelo. Na semana seguinte, peça só para a IA “ajustar com estas mudanças”, em vez de começar do zero.",
      warn: "As regras de jornada, folgas, descanso e horas extras dependem da lei e do tipo de contrato. A IA pode errar nisso. Confirme as regras com o seu contador antes de usar a escala. Não coloque na IA salários, CPF ou outros dados pessoais da equipe.",
      exercise: "Monte com a IA a escala da próxima semana, confira as horas de cada pessoa e compartilhe com a equipe.",
      check: [
        "Sei montar um rascunho de escala com a IA.",
        "Uso só primeiro nome ou função, sem dados pessoais.",
        "Confirmo as regras de jornada e folga com o contador."
      ]
    },
    {
      id: "m08-a2",
      title: "Procedimentos e checklists (abrir, fechar, limpar)",
      dur: 9,
      goal: "Ao final desta aula, você vai ter checklists de abertura, fechamento e limpeza prontos para imprimir ou mandar no grupo da equipe.",
      intro: [
        "“Esqueci de desligar o forno.” “Ninguém conferiu o caixa.” “A máquina de café ficou suja.” Esses erros acontecem porque cada um faz do seu jeito e ninguém escreveu o jeito certo. Quando o dono falta um dia, tudo desanda.",
        "Um checklist é uma lista curta do que precisa ser feito, em ordem, para marcar. A IA transforma o que está na sua cabeça em listas claras. Assim a equipe trabalha igual, mesmo quando você não está."
      ],
      steps: [
        "Grave um áudio ou escreva rapidinho tudo o que você faz para abrir e para fechar o negócio, do jeito que lembrar, sem ordem.",
        "Cole esse texto na IA com o primeiro pedido.",
        "Leia a lista e corrija o que estiver faltando ou fora de ordem.",
        "Use o segundo pedido para criar o checklist de limpeza por frequência (diária, semanal, mensal).",
        "Imprima e cole na parede, ou mande no grupo da equipe.",
        "Depois de uma semana, pergunte à equipe o que ficou confuso e peça à IA para melhorar."
      ],
      prompts: [
        { label: "Checklist de abrir e fechar", text: "Tenho um(a) [tipo de negócio]. Abaixo está, sem ordem, tudo o que fazemos para abrir e fechar:\n[cole o seu texto ou a transcrição do áudio]\n\nTransforme em dois checklists: ABERTURA e FECHAMENTO. Regras: itens curtos começando com verbo (ex.: “Ligar o forno”), em ordem lógica, com um quadradinho ☐ antes de cada item, no máximo 15 itens por lista. Marque com ⚠️ os itens de segurança (gás, energia, portas, dinheiro). Se achar que falta algo comum para este tipo de negócio, sugira no final, separado." },
        { label: "Checklist de limpeza", text: "Crie um checklist de limpeza para um(a) [tipo de negócio] com [descreva os espaços e equipamentos: cozinha, salão, banheiro, máquinas...], separado em: todo dia, toda semana e todo mês. Inclua uma coluna para a pessoa responsável e a data. Formate como tabela para eu colar no Google Planilhas e imprimir." }
      ],
      example: {
        bad: "Faz um checklist de abertura.",
        good: "Tenho um café. Para abrir: ligo a máquina de espresso 30 min antes, confiro o leite, faço o troco do caixa, ligo as luzes da vitrine, arrumo os bolos. Transforme isso num checklist de abertura em ordem, com ☐ e itens curtos."
      },
      tip: "Coloque horários nos checklists quando fizer sentido (“até 8h45: máquina ligada”). Fica mais fácil de cumprir e de cobrar.",
      warn: "Para itens de segurança, higiene de alimentos ou normas da vigilância sanitária e do corpo de bombeiros, não confie só na IA: confira as regras com o órgão responsável ou com quem orienta o seu negócio.",
      exercise: "Crie hoje o seu checklist de fechamento com a IA, imprima ou mande para a equipe e use já no fechamento de hoje.",
      check: [
        "Tenho checklists de abertura e fechamento escritos.",
        "Tenho um checklist de limpeza por frequência.",
        "Sei melhorar os checklists com a opinião da equipe."
      ]
    },
    {
      id: "m08-a3",
      title: "Treinar um funcionário novo",
      dur: 11,
      goal: "Ao final desta aula, você vai ter um plano de treinamento para a primeira semana de um funcionário novo, com o que ensinar em cada dia.",
      intro: [
        "O funcionário novo chega e, no meio da correria, recebe um “vai olhando e aprendendo”. Uma semana depois, ainda erra o preço, não sabe mexer na maquininha e se sente perdido. Muitos desistem logo no começo.",
        "Com a IA, você monta um plano simples: o que ensinar em cada dia, um guia de boas-vindas e até perguntas rápidas para ver se a pessoa aprendeu. Os checklists da aula anterior entram aqui como material de treino."
      ],
      steps: [
        "Defina a função da pessoa (atendente, auxiliar de cozinha, ajudante de marcenaria...) e o que ela precisa saber fazer sozinha ao fim da primeira semana.",
        "Use o primeiro pedido para gerar o plano dia a dia.",
        "Ajuste o plano à sua realidade e escolha quem da equipe vai acompanhar o novato.",
        "Use o segundo pedido para criar o guia de boas-vindas e mande no WhatsApp da pessoa antes do primeiro dia.",
        "Use o terceiro pedido para criar perguntas rápidas e faça no fim da semana, numa conversa leve.",
        "Converse com a pessoa no fim da semana: o que ficou claro e o que ainda precisa treinar."
      ],
      prompts: [
        { label: "Plano da primeira semana", text: "Tenho um(a) [tipo de negócio] e vou receber um(a) [função] novo(a). Ao fim da primeira semana, quero que essa pessoa saiba: [liste as tarefas].\n\nMonte um plano de treinamento de [número] dias, com: o que ensinar em cada dia, como ensinar (mostrar, fazer junto, fazer sozinho) e como saber se a pessoa aprendeu. Use linguagem simples e comece pelo mais fácil." },
        { label: "Guia de boas-vindas", text: "Escreva um guia de boas-vindas curto, para mandar pelo WhatsApp, para um(a) novo(a) [função] do meu/minha [tipo de negócio]. Inclua: mensagem calorosa, horário de chegada no primeiro dia, o que trazer, como se vestir, quem vai receber a pessoa e os 3 combinados mais importantes da casa: [liste]. No máximo 15 linhas." },
        { label: "Perguntas de revisão", text: "Com base neste conteúdo de treino:\n[cole o checklist ou o procedimento]\n\nCrie 8 perguntas curtas e práticas para eu fazer ao funcionário novo no fim da semana, com a resposta certa de cada uma. Tom leve, como conversa, não como prova." }
      ],
      tip: "Peça à pessoa nova para gravar áudios curtos com as dúvidas da semana. Depois cole as dúvidas na IA e transforme as respostas num guia para o próximo funcionário.",
      warn: "Contrato, período de experiência, registro e direitos do funcionário são assunto para o contador. A IA ajuda a organizar o treino, não a decidir questões trabalhistas. Não coloque dados pessoais do funcionário na IA.",
      exercise: "Monte com a IA o plano de primeira semana para uma função do seu negócio, mesmo que não tenha ninguém novo agora. Ele vai estar pronto quando precisar.",
      check: [
        "Tenho um plano de treinamento dia a dia para uma função.",
        "Tenho um guia de boas-vindas pronto para mandar.",
        "Sei verificar se o funcionário aprendeu, com perguntas simples."
      ]
    },
    {
      id: "m08-a4",
      title: "Anúncio de vaga e roteiro de entrevista",
      dur: 12,
      goal: "Ao final desta aula, você vai ter um anúncio de vaga claro e justo e um roteiro de entrevista para escolher melhor quem contratar.",
      intro: [
        "Um anúncio como “Precisa-se de ajudante, tratar aqui” atrai muita gente que não serve e afasta quem serviria. Um anúncio claro diz o que a pessoa vai fazer, o horário e o que você oferece. Isso economiza o seu tempo nas entrevistas.",
        "A IA também ajuda a preparar a entrevista: perguntas que mostram como a pessoa trabalha de verdade, e não só se ela fala bem. Assim você compara candidatos com mais justiça."
      ],
      steps: [
        "Anote o que a pessoa vai fazer, os dias e horários, o que é importante saber e o que você oferece.",
        "Use o primeiro pedido para gerar o anúncio, em versão para WhatsApp e para cartaz.",
        "Revise o anúncio e tire qualquer exigência de idade, gênero, aparência, estado civil ou outra que não tenha relação com o trabalho.",
        "Divulgue nos grupos do bairro, no status e na porta do negócio.",
        "Use o segundo pedido para criar o roteiro de entrevista e uma ficha para dar nota a cada candidato.",
        "Faça as mesmas perguntas para todos os candidatos e anote as respostas."
      ],
      prompts: [
        { label: "Anúncio de vaga", text: "Escreva um anúncio de vaga para [função] no meu/minha [tipo de negócio] em [bairro/cidade].\n- O que a pessoa vai fazer: [tarefas]\n- Dias e horários: [...]\n- O que é importante: [ex.: experiência com atendimento, saber usar maquininha]\n- O que oferecemos: [ex.: vale-transporte, refeição, treinamento]\n- Como se candidatar: [ex.: mandar mensagem no WhatsApp com um resumo da experiência]\n\nFaça uma versão para WhatsApp (até 10 linhas) e uma para cartaz. Use linguagem acolhedora. Importante: não inclua nenhuma exigência de idade, gênero, aparência, estado civil, religião ou outra característica pessoal que não tenha relação direta com o trabalho." },
        { label: "Roteiro de entrevista", text: "Crie um roteiro de entrevista de 20 minutos para a vaga de [função] no meu/minha [tipo de negócio]. Inclua: 2 perguntas para quebrar o gelo, 5 perguntas sobre situações reais do trabalho (ex.: “O que você faz se um cliente reclama do pedido?”), 1 tarefa prática rápida e o que observar em cada resposta. No final, crie uma ficha simples para eu dar nota de 1 a 5 a cada candidato nos mesmos critérios. Não inclua perguntas sobre vida pessoal, família, gravidez, religião, saúde ou idade." }
      ],
      example: {
        bad: "Faz um anúncio: preciso de moça bonita de até 25 anos pra atender.",
        good: "Faça um anúncio para atendente de loja de roupas: atender clientes, organizar araras e usar a maquininha. Terça a sábado, das 10h às 18h. Valorizamos simpatia e experiência com vendas. Oferecemos treinamento e vale-transporte."
      },
      tip: "Peça para a IA revisar o seu anúncio com a pergunta: “Este anúncio tem alguma exigência que pode ser discriminatória ou excluir pessoas sem motivo?”.",
      warn: "Anúncio de vaga não pode trazer exigências discriminatórias, como idade, gênero, aparência ou estado civil. Salário, tipo de contrato e registro devem ser confirmados com o seu contador. Não cole na IA currículos com CPF, endereço ou telefone dos candidatos.",
      exercise: "Escreva com a IA o anúncio para uma vaga que você tem ou vai ter, revise as exigências e monte o roteiro de entrevista.",
      check: [
        "Sei escrever um anúncio de vaga claro e sem exigências discriminatórias.",
        "Tenho um roteiro de entrevista com perguntas sobre situações reais.",
        "Sei comparar candidatos com os mesmos critérios."
      ]
    }
  ]
});
