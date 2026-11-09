window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m05", n: 5, title: "Vendas", icon: "🛍️",
  desc: "Você vai usar a IA para conhecer melhor o seu cliente, descrever o que vende, mandar mensagens que trazem clientes de volta e montar orçamentos com cara de profissional.",
  lessons: [
    {
      id: "m05-a1",
      title: "Quem é o seu cliente ideal",
      dur: 9,
      goal: "Ao final desta aula, você vai ter um retrato simples do seu melhor cliente, pronto para usar em todas as suas mensagens de venda.",
      intro: [
        "Quem tenta vender para todo mundo acaba falando com ninguém. Pense na confeitaria da Dona Rita: ela anunciava “bolos para todas as ocasiões”. Quando percebeu que quem mais comprava eram mães organizando aniversário de criança, mudou as mensagens e as encomendas cresceram.",
        "O “cliente ideal” é simplesmente o tipo de pessoa que mais compra de você, paga em dia e volta. Você já conhece essa pessoa, só nunca colocou no papel. A IA ajuda a organizar o que você já sabe, fazendo as perguntas certas."
      ],
      steps: [
        "Abra o Claude ou o ChatGPT no celular e cole a sua ficha do negócio.",
        "Pense em 3 clientes de verdade que você adora atender. Não precisa dizer o nome deles para a IA, só o jeito deles.",
        "Copie o primeiro pedido abaixo e responda às perguntas que a IA fizer, com calma, em mensagens curtas.",
        "Peça para a IA juntar tudo num retrato de no máximo 10 linhas.",
        "Copie o retrato e salve numa nota do celular com o nome “Meu cliente ideal”.",
        "Use o segundo pedido para descobrir onde encontrar mais clientes assim."
      ],
      prompts: [
        { label: "Entrevista sobre o cliente", text: "Você é um consultor de vendas para pequenos negócios no Brasil. Esta é a ficha do meu negócio:\n[cole aqui a sua ficha do negócio]\n\nQuero descobrir quem é o meu cliente ideal. Faça perguntas para mim, UMA de cada vez, sobre os clientes que mais compram, que pagam em dia e que voltam: idade aproximada, onde moram ou trabalham, o que compram, quando compram, por que me escolhem e o que reclamam. Depois de umas 8 perguntas, monte um retrato do meu cliente ideal em no máximo 10 linhas, em linguagem simples." },
        { label: "Onde encontrar mais clientes assim", text: "Com base neste retrato do meu cliente ideal:\n[cole o retrato]\n\nMe diga 5 lugares ou momentos (na internet e no meu bairro) onde eu posso encontrar mais pessoas assim, e qual mensagem curta eu poderia usar em cada um. Meu negócio é [tipo de negócio] em [cidade/bairro]." }
      ],
      example: {
        bad: "Quem é meu cliente?",
        good: "Tenho um salão de beleza em Campinas. Minhas melhores clientes são mulheres que trabalham fora e vêm a cada 15 dias. Me ajude a montar um retrato dessa cliente: o que ela valoriza, o que a incomoda e que horário prefere."
      },
      tip: "Você pode ter mais de um cliente ideal. Uma pizzaria pode ter “a família de sexta à noite” e “o pessoal do escritório no almoço”. Faça um retrato para cada um.",
      warn: "Descreva os clientes de forma geral. Não coloque nomes completos, telefones, CPF nem endereços de clientes na IA.",
      exercise: "Faça a entrevista com a IA agora e salve o retrato do seu cliente ideal numa nota do celular.",
      check: [
        "Sei descrever o meu melhor cliente em poucas linhas.",
        "Tenho o retrato do meu cliente ideal salvo no celular.",
        "Sei pedir para a IA ideias de onde encontrar mais clientes parecidos."
      ]
    },
    {
      id: "m05-a2",
      title: "Descrições de produtos, cardápio e catálogo",
      dur: 10,
      goal: "Ao final desta aula, você vai ter descrições de produtos que dão vontade de comprar, prontas para o cardápio, o catálogo do WhatsApp ou as redes sociais.",
      intro: [
        "“Pizza de calabresa — R$ 45” informa, mas não vende. “Calabresa fatiada na hora, cebola roxa e muçarela que puxa, na massa de fermentação lenta — R$ 45” faz a pessoa sentir o gosto. A diferença está nas palavras.",
        "Escrever 30 descrições sozinho cansa e toma o dia inteiro. Com a IA, você manda a lista do que vende e recebe tudo escrito em minutos. O seu papel é conferir se está tudo certo e com o seu jeito de falar."
      ],
      steps: [
        "Faça uma lista dos seus produtos ou serviços com o preço e o que tem em cada um (ingredientes, material, tamanho, tempo).",
        "Abra a IA, cole a ficha do negócio e o retrato do cliente ideal da aula passada.",
        "Use o primeiro pedido, colando a sua lista.",
        "Leia cada descrição e corrija o que não for verdade. A IA às vezes inventa detalhes.",
        "Peça versões curtas para o catálogo do WhatsApp, que tem pouco espaço.",
        "Copie e cole no cardápio, no catálogo ou no post."
      ],
      prompts: [
        { label: "Descrições que vendem", text: "Esta é a ficha do meu negócio:\n[cole a ficha]\n\nMeu cliente ideal é:\n[cole o retrato]\n\nEscreva uma descrição para cada item da lista abaixo. Regras: até 3 linhas cada, linguagem simples e calorosa, destaque o que deixa o item especial, não invente ingredientes, materiais ou qualidades que eu não informei, e mantenha o preço como está.\n\nLista:\n[produto 1 – o que tem – preço]\n[produto 2 – o que tem – preço]\n[...]" },
        { label: "Versão curta para o catálogo", text: "Agora transforme cada descrição em uma versão de no máximo 1 linha para o catálogo do WhatsApp Business. Mantenha nome e preço." },
        { label: "Organizar o cardápio", text: "Organize esta lista em categorias que façam sentido para o cliente (por exemplo: mais pedidos, para dividir, doces), e sugira em que ordem colocar os itens. Não mude preços.\n[cole a lista]" }
      ],
      example: {
        bad: "Escreve descrição dos meus bolos.",
        good: "Escreva descrições de até 3 linhas para os bolos abaixo, para mães que encomendam festa infantil. Destaque que são feitos no dia. Não invente recheios. Bolo de cenoura com cobertura de chocolate – R$ 60; Bolo de ninho com morango – R$ 85."
      },
      tip: "Para a marcenaria, a oficina ou o salão, a descrição de serviço também funciona: diga o que está incluso, quanto tempo leva e qual problema resolve.",
      warn: "Confira cada descrição antes de publicar. Se a IA escrever “sem glúten”, “sem lactose” ou “madeira maciça” e não for verdade, isso pode gerar reclamação séria.",
      exercise: "Escolha os seus 5 produtos ou serviços mais vendidos, gere as descrições com a IA, revise e coloque pelo menos uma no seu catálogo ou cardápio hoje.",
      check: [
        "Sei pedir descrições que dão vontade de comprar.",
        "Confiro se a IA não inventou nada sobre o meu produto.",
        "Tenho pelo menos 5 descrições prontas para usar."
      ]
    },
    {
      id: "m05-a3",
      title: "Mensagens de venda e reativar clientes antigos",
      dur: 10,
      goal: "Ao final desta aula, você vai ter mensagens prontas de WhatsApp para oferecer novidades e chamar de volta clientes que sumiram.",
      intro: [
        "Conquistar um cliente novo dá trabalho. Chamar de volta quem já comprou é muito mais fácil, porque essa pessoa já conhece você. O problema é que a gente fica sem saber o que escrever e acaba não mandando nada.",
        "Imagine a oficina mecânica do Seu Jorge: vários clientes fizeram revisão há mais de seis meses e não voltaram. Uma mensagem simpática lembrando da próxima revisão pode encher a agenda da semana. A IA escreve; você escolhe e manda."
      ],
      steps: [
        "Olhe as suas conversas do WhatsApp e anote, só para você, quem não compra há algum tempo.",
        "Decida o motivo da mensagem: novidade, data especial, lembrete ou promoção.",
        "Use o primeiro pedido para gerar 3 versões de mensagem.",
        "Escolha a que mais parece com o seu jeito de falar e ajuste o que quiser.",
        "Mande uma a uma, colocando o nome da pessoa na hora de enviar, no seu celular.",
        "Anote quem respondeu para saber qual mensagem funcionou melhor."
      ],
      prompts: [
        { label: "Mensagem para cliente sumido", text: "Esta é a ficha do meu negócio:\n[cole a ficha]\n\nEscreva 3 versões de uma mensagem de WhatsApp para clientes que compraram comigo e não voltam há [tempo, ex.: 3 meses]. O motivo da mensagem é [novidade / lembrete / promoção: descreva]. Regras: tom amigável e pessoal, no máximo 5 linhas, sem parecer propaganda, termine com uma pergunta fácil de responder. Deixe [NOME] no lugar do nome do cliente." },
        { label: "Mensagem de oferta", text: "Escreva uma mensagem curta de WhatsApp anunciando [produto ou promoção] para [tipo de cliente]. Inclua: o que é, por que vale a pena, até quando vale e como pedir. Use no máximo 2 emojis. Faça também uma versão para a lista de transmissão e uma para o status." }
      ],
      example: {
        bad: "Faz uma mensagem de promoção.",
        good: "Escreva uma mensagem de WhatsApp para clientes da minha loja de roupas que não compram há 2 meses, avisando que chegou a coleção de inverno. Tom de amiga, até 4 linhas, termine perguntando se a pessoa quer ver as fotos."
      },
      tip: "Mande poucas mensagens por vez e de forma pessoal. Mensagem igual disparada para muita gente parece robô e pode fazer clientes bloquearem o seu número.",
      warn: "Não cole a sua lista de contatos, telefones ou histórico de compras de clientes com nome na IA. Use [NOME] e coloque o nome só na hora de enviar.",
      exercise: "Escolha 5 clientes que sumiram, gere uma mensagem com a IA, ajuste e envie hoje para esses 5.",
      check: [
        "Sei pedir mensagens de venda curtas e com o meu jeito.",
        "Mandei mensagem para clientes antigos sem colocar dados deles na IA.",
        "Sei anotar qual mensagem trouxe mais respostas."
      ]
    },
    {
      id: "m05-a4",
      title: "Propostas e orçamentos profissionais",
      dur: 12,
      goal: "Ao final desta aula, você vai saber montar um orçamento claro e bonito com a ajuda da IA, conferindo cada valor.",
      intro: [
        "Quando um cliente pede orçamento para um móvel planejado, uma festa ou uma reforma, ele compara. Um orçamento rabiscado no WhatsApp perde para um orçamento organizado, mesmo com preço parecido. Organização passa confiança.",
        "A IA monta a estrutura: o que está incluso, o que não está, prazo, forma de pagamento e validade. Você entra com os números e confere tudo. Assim você responde mais rápido e com mais chance de fechar."
      ],
      steps: [
        "Anote o que o cliente pediu, sem dados pessoais: tipo de serviço, tamanho, quantidade, data.",
        "Separe os seus valores: material, mão de obra, entrega, o que mais for cobrado.",
        "Use o primeiro pedido para gerar o orçamento organizado.",
        "Peça para a IA mostrar a soma passo a passo e confira com a calculadora do celular.",
        "Copie o texto para um documento ou mande direto no WhatsApp. Acrescente o nome do cliente só no final, fora da IA.",
        "Use o segundo pedido para fazer a mensagem de acompanhamento, caso o cliente não responda."
      ],
      prompts: [
        { label: "Montar o orçamento", text: "Esta é a ficha do meu negócio:\n[cole a ficha]\n\nMonte um orçamento profissional para este pedido:\n- Serviço/produto: [descreva]\n- Itens e valores: [item – quantidade – valor unitário]\n- Prazo de entrega: [prazo]\n- Formas de pagamento: [ex.: Pix, cartão, entrada + restante na entrega]\n- Validade do orçamento: [ex.: 7 dias]\n\nOrganize assim: apresentação curta, tabela com os itens, total, o que está incluso, o que NÃO está incluso, prazo, pagamento e validade. Mostre a soma passo a passo. Não mude nenhum valor que eu informei." },
        { label: "Acompanhamento do orçamento", text: "Mandei um orçamento de [serviço] há [dias] e o cliente não respondeu. Escreva uma mensagem curta e educada de WhatsApp para retomar a conversa, sem pressionar, oferecendo tirar dúvidas." }
      ],
      example: {
        bad: "Faz um orçamento de armário.",
        good: "Monte um orçamento para um armário de cozinha em MDF branco, 2,40 m, com 6 portas. Material R$ 1.800, mão de obra R$ 1.200, instalação R$ 300. Prazo 20 dias. Entrada de 50% no Pix. Validade 10 dias. Inclua o que não está incluso: pia e eletrodomésticos."
      },
      tip: "Salve o orçamento que ficou bom como modelo. Na próxima vez, peça: “Use este mesmo modelo para um novo pedido” e troque só os itens.",
      warn: "A IA pode errar contas. Sempre confira os totais na calculadora antes de enviar. Se o orçamento virar contrato com cláusulas de multa ou garantia, mostre para um advogado ou contador antes de assinar.",
      exercise: "Pegue o último orçamento que você mandou, refaça com a IA, confira o total na calculadora e salve como modelo.",
      check: [
        "Sei montar um orçamento organizado com a IA.",
        "Confiro todos os valores na calculadora antes de enviar.",
        "Tenho um modelo de orçamento salvo para reaproveitar."
      ]
    }
  ]
});
