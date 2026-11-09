window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m07", n: 7, title: "Estoque, compras e fornecedores", icon: "📦",
  desc: "Você vai controlar o estoque sem complicação, fazer pedidos claros aos fornecedores, comparar orçamentos com calma e negociar melhores condições com a ajuda da IA.",
  lessons: [
    {
      id: "m07-a1",
      title: "Controle de estoque simples",
      dur: 12,
      goal: "Ao final desta aula, você vai ter uma planilha de estoque que avisa quando um item está acabando.",
      intro: [
        "Faltar muçarela numa sexta à noite na pizzaria é prejuízo na certa. Sobrar tinta de cabelo vencida no salão também. Os dois problemas têm a mesma causa: não saber direito o que tem na prateleira.",
        "Você não precisa de um sistema caro. Uma planilha com o que tem, o mínimo que precisa ter e um aviso quando passa do limite já resolve a maior parte. A IA monta a planilha; você só conta e anota."
      ],
      steps: [
        "Faça uma lista dos 15 a 20 itens mais importantes do seu estoque (os que não podem faltar).",
        "Para cada um, pense: quanto uso por semana e quanto tempo o fornecedor demora para entregar.",
        "Use o primeiro pedido para criar a planilha de estoque.",
        "Cole no Google Planilhas e faça a primeira contagem, com o celular na mão, passando pela prateleira.",
        "Escolha um dia fixo da semana para atualizar a contagem.",
        "Quando um item ficar vermelho, ele vai para a lista de compras da próxima aula."
      ],
      prompts: [
        { label: "Criar a planilha de estoque", text: "Crie uma planilha de controle de estoque para um(a) [tipo de negócio], para eu colar no Google Planilhas. Colunas: Item | Unidade (kg, unidade, caixa, litro) | Quantidade atual | Estoque mínimo | Precisa comprar? | Fornecedor | Validade (se tiver).\n\nA coluna “Precisa comprar?” deve mostrar SIM quando a quantidade atual for menor ou igual ao estoque mínimo. Me diga a fórmula, em qual célula colar e como deixar a linha vermelha automaticamente.\n\nMeus itens:\n[item – unidade – uso por semana – dias que o fornecedor leva para entregar]" },
        { label: "Calcular o estoque mínimo", text: "Para cada item abaixo, sugira um estoque mínimo, considerando quanto uso por semana e quantos dias o fornecedor leva para entregar, com uma pequena folga. Mostre a conta passo a passo para eu conferir.\n[item – uso por semana – dias de entrega]" }
      ],
      example: {
        bad: "Como controlo meu estoque?",
        good: "Tenho uma oficina mecânica. Crie uma planilha de estoque para óleo de motor, filtros de óleo, filtros de ar e pastilhas de freio, com quantidade atual, mínimo e um aviso de “comprar” quando estiver no mínimo. Diga onde colar as fórmulas."
      },
      tip: "Para itens com validade (alimentos, cosméticos, tintas), peça à IA para destacar também o que vence nos próximos 15 dias. Assim você usa primeiro o que vence primeiro.",
      warn: "O estoque mínimo que a IA sugere é um ponto de partida. Confira as contas na calculadora e ajuste com a sua experiência: datas especiais e feriados mudam tudo.",
      exercise: "Crie a planilha com os seus 15 itens mais importantes e faça a primeira contagem hoje.",
      check: [
        "Tenho uma planilha de estoque com os itens que não podem faltar.",
        "Sei qual é o estoque mínimo de cada item.",
        "Sei ver rapidamente o que precisa comprar."
      ]
    },
    {
      id: "m07-a2",
      title: "Lista de compras e pedidos ao fornecedor",
      dur: 9,
      goal: "Ao final desta aula, você vai saber transformar o estoque em uma lista de compras e mandar ao fornecedor um pedido claro, sem confusão.",
      intro: [
        "Pedido feito de cabeça, por áudio no meio da correria, costuma voltar errado: veio a caixa de 12 em vez da de 24, faltou um item, chegou no dia errado. Cada erro custa tempo e dinheiro.",
        "Com a IA, você cola os itens que estão acabando e recebe uma lista organizada por fornecedor, com quantidades, e uma mensagem de pedido pronta para o WhatsApp ou e-mail."
      ],
      steps: [
        "Abra a planilha de estoque e copie os itens marcados com “SIM” para comprar.",
        "Use o primeiro pedido para a IA montar a lista separada por fornecedor.",
        "Confira as quantidades: elas fazem sentido para a próxima semana?",
        "Use o segundo pedido para gerar a mensagem de pedido de cada fornecedor.",
        "Envie pelo WhatsApp e peça a confirmação por escrito.",
        "Quando a mercadoria chegar, confira item por item com a lista antes de assinar o recebimento."
      ],
      prompts: [
        { label: "Montar a lista de compras", text: "Estes itens do meu estoque estão no mínimo:\n[cole os itens: item – quantidade atual – estoque mínimo – uso por semana – fornecedor]\n\nMonte uma lista de compras separada por fornecedor, com a quantidade sugerida para durar [1 semana / 15 dias]. Mostre a conta de cada quantidade passo a passo. Formate como tabela para eu colar no Google Planilhas." },
        { label: "Mensagem de pedido", text: "Escreva uma mensagem de WhatsApp educada e objetiva para o meu fornecedor [nome da empresa] com este pedido:\n[cole a lista: item – quantidade – unidade/embalagem]\n\nInclua: data de entrega desejada [data], horário em que posso receber [horário], forma de pagamento [forma] e um pedido para confirmar os itens, o valor total e o prazo por escrito." }
      ],
      example: {
        bad: "Me manda farinha e ovo.",
        good: "Escreva um pedido para o meu fornecedor: 10 sacos de farinha de trigo de 5 kg, 6 bandejas de ovos com 30 unidades, 4 latas de leite condensado de 395 g. Entrega na quinta até 10h. Pagamento no boleto de 14 dias. Peça confirmação do total por escrito."
      },
      tip: "Salve as mensagens de pedido que ficaram boas. Na próxima compra, é só pedir para a IA “usar o mesmo formato” com os itens novos.",
      warn: "A IA não sabe os preços nem o que o seu fornecedor tem disponível. Valores, prazos e condições valem só depois que o fornecedor confirmar por escrito.",
      exercise: "Faça a lista de compras da próxima semana com a IA e envie pelo menos um pedido ao fornecedor usando a mensagem pronta.",
      check: [
        "Sei transformar o estoque em uma lista de compras.",
        "Sei mandar um pedido claro e completo ao fornecedor.",
        "Confiro a mercadoria com a lista quando ela chega."
      ]
    },
    {
      id: "m07-a3",
      title: "Comparar orçamentos de fornecedores",
      dur: 10,
      goal: "Ao final desta aula, você vai saber colocar orçamentos lado a lado e ver qual é de fato o melhor, além do preço.",
      intro: [
        "O mais barato nem sempre é o melhor negócio. Um fornecedor de tecido pode cobrar menos por metro, mas cobrar frete, exigir pedido mínimo alto e demorar 20 dias para entregar. Na ponta do lápis, o “barato” sai caro.",
        "A IA organiza os orçamentos numa tabela única e mostra a conta do custo total de cada um, para você comparar banana com banana. A decisão continua sua."
      ],
      steps: [
        "Peça orçamento para pelo menos 3 fornecedores do mesmo item, sempre com a mesma quantidade.",
        "Junte as respostas: preço, frete, pedido mínimo, prazo de entrega, forma de pagamento e qualidade.",
        "Cole tudo na IA usando o primeiro pedido. Pode colar o texto das mensagens dos fornecedores, apagando telefones e nomes de pessoas.",
        "Confira na calculadora o custo total que a IA calculou para cada um.",
        "Use o segundo pedido para pensar nos riscos antes de decidir.",
        "Escolha e anote o motivo, para lembrar na próxima compra."
      ],
      prompts: [
        { label: "Comparar orçamentos", text: "Preciso comprar [quantidade] de [item] para o meu/minha [tipo de negócio]. Recebi estes orçamentos:\n\nFornecedor A: [preço, frete, pedido mínimo, prazo, pagamento, observações]\nFornecedor B: [...]\nFornecedor C: [...]\n\nMonte uma tabela comparando todos. Calcule o custo total de cada um para a minha quantidade, incluindo frete, e mostre a conta passo a passo. Depois me explique, em linguagem simples, as vantagens e desvantagens de cada um. Se faltar alguma informação, me diga o que perguntar ao fornecedor." },
        { label: "Pensar nos riscos", text: "Antes de escolher o fornecedor [A, B ou C], que perguntas eu deveria fazer a ele sobre qualidade, troca de produto com defeito, atraso na entrega e reajuste de preço? Faça uma lista curta e simples." }
      ],
      tip: "Peça amostra antes de uma compra grande, principalmente de matéria-prima (tecido, madeira, ingrediente). Qualidade não aparece no orçamento.",
      warn: "A IA pode errar contas: confira o custo total na calculadora. Ela também não sabe se um fornecedor é confiável. Pesquise a reputação, converse com outros comerciantes e leia as condições antes de fechar.",
      exercise: "Pegue orçamentos de 2 ou 3 fornecedores de um item que você compra sempre, compare com a IA e confira as contas.",
      check: [
        "Sei comparar orçamentos pelo custo total, não só pelo preço.",
        "Sei quais perguntas fazer antes de escolher um fornecedor.",
        "Confiro as contas da comparação na calculadora."
      ]
    },
    {
      id: "m07-a4",
      title: "Negociar com fornecedores",
      dur: 10,
      goal: "Ao final desta aula, você vai ter uma mensagem de negociação pronta e saber o que pedir ao seu fornecedor.",
      intro: [
        "Muita gente não negocia por vergonha ou por não saber o que dizer. Mas negociar não é brigar: é conversar para os dois saírem ganhando. Você pode pedir desconto, sim, mas também prazo maior para pagar, frete grátis, entrega mais rápida ou um brinde.",
        "O dono da marcenaria que compra chapas todo mês tem força para pedir condições melhores. A IA ajuda você a preparar os argumentos e a escrever uma mensagem firme e educada, que mantém a boa relação."
      ],
      steps: [
        "Escolha um fornecedor com quem você compra sempre.",
        "Anote os seus argumentos: há quanto tempo compra, quanto compra por mês, se paga em dia, se recebeu orçamento mais barato.",
        "Decida o que quer pedir: desconto, prazo, frete, entrega ou outra coisa.",
        "Use o primeiro pedido para preparar a negociação.",
        "Use o segundo pedido para treinar: a IA faz o papel do fornecedor e você responde.",
        "Mande a mensagem ou ligue, e anote o que foi combinado. Peça a confirmação por escrito."
      ],
      prompts: [
        { label: "Preparar a negociação", text: "Sou dono(a) de um(a) [tipo de negócio] e quero negociar com um fornecedor de [item].\n- Compro com ele há: [tempo]\n- Compro por mês, em média: [quantidade ou valor]\n- Pago: [em dia / às vezes atraso]\n- Outra oferta que recebi: [se tiver]\n- O que quero: [desconto, prazo maior, frete grátis, etc.]\n\nMe dê: 1) os meus melhores argumentos; 2) o que posso oferecer em troca (ex.: pedido maior, pagamento à vista); 3) uma mensagem de WhatsApp educada e firme para começar a negociação; 4) o que responder se ele disser não." },
        { label: "Treinar a conversa", text: "Vamos treinar. Você faz o papel do meu fornecedor de [item], que é simpático mas não gosta de dar desconto. Eu vou tentar negociar [o que quero]. Responda como ele responderia, uma mensagem de cada vez. No final, me dê dicas do que eu fiz bem e do que posso melhorar." }
      ],
      example: {
        bad: "Como peço desconto?",
        good: "Compro chapas de MDF do mesmo fornecedor há 2 anos, cerca de 20 chapas por mês, e sempre pago em dia. Recebi uma oferta 5% mais barata de outro. Quero manter o meu fornecedor, mas pedir 30 dias para pagar em vez de 15. Me ajude a escrever a mensagem."
      },
      tip: "Nem sempre o melhor pedido é desconto. Um prazo maior para pagar pode aliviar muito o seu caixa, e para o fornecedor às vezes é mais fácil de aceitar.",
      warn: "Não invente propostas de concorrentes para pressionar: além de antiético, pode estragar a relação. Se a negociação virar contrato de fornecimento com multas ou exclusividade, leve ao advogado ou contador antes de assinar.",
      exercise: "Prepare com a IA uma negociação com um fornecedor de verdade, treine a conversa uma vez e envie a mensagem esta semana.",
      check: [
        "Sei o que posso pedir além de desconto.",
        "Tenho meus argumentos organizados antes de negociar.",
        "Sei treinar uma conversa difícil com a IA."
      ]
    }
  ]
});
