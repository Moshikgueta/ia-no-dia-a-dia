window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m06", n: 6, title: "Finanças e preços", icon: "💰",
  desc: "Você vai descobrir quanto custa o que vende, definir preços com segurança e controlar o dinheiro que entra e sai com planilhas simples feitas com a ajuda da IA.",
  lessons: [
    {
      id: "m06-a1",
      title: "Quanto custa o que você vende",
      dur: 12,
      goal: "Ao final desta aula, você vai saber o custo real de pelo menos um produto ou serviço seu, com a conta conferida.",
      intro: [
        "Muita gente vende bastante e mesmo assim o dinheiro não sobra. Quase sempre o motivo é o mesmo: o custo do produto é maior do que se imagina. A confeiteira conta a farinha e o chocolate, mas esquece o gás, a embalagem, a taxa da maquininha e o próprio tempo.",
        "A IA é ótima para lembrar de tudo o que entra no custo e organizar a conta. Mas atenção: ela pode errar na matemática. Por isso você sempre vai pedir a conta passo a passo e conferir na calculadora."
      ],
      steps: [
        "Escolha um produto ou serviço que você vende muito.",
        "Use o primeiro pedido para a IA listar tudo o que pode entrar no custo dele.",
        "Anote os seus valores reais: quanto paga em cada ingrediente ou material e quanto usa em cada unidade.",
        "Use o segundo pedido para a IA montar a tabela de custo com a conta passo a passo.",
        "Confira cada linha e o total com a calculadora do celular.",
        "Copie a tabela para o Google Planilhas ou Excel e salve com o nome do produto."
      ],
      prompts: [
        { label: "O que entra no custo", text: "Tenho um(a) [tipo de negócio]. Quero calcular o custo de [produto ou serviço]. Faça uma lista de TUDO que pode entrar no custo: ingredientes ou materiais, embalagem, gás, energia, taxas de cartão ou aplicativo, perdas, mão de obra e outros. Explique cada item em uma linha simples. Não calcule nada ainda: depois eu passo os valores." },
        { label: "Tabela de custo passo a passo", text: "Monte uma tabela de custo para [produto], com as colunas: Item | Quanto pago | Quantidade que compro | Quanto uso por unidade | Custo por unidade.\n\nMeus dados:\n[item – quanto pago – quantidade que vem – quanto uso]\n[...]\n\nMostre a conta de cada linha passo a passo e depois a soma do custo total por unidade. Formate a tabela para eu copiar e colar no Google Planilhas." }
      ],
      example: {
        bad: "Quanto custa fazer um brigadeiro?",
        good: "Calcule o custo de 1 brigadeiro. Leite condensado: pago R$ 7 na lata de 395 g e faço 25 brigadeiros por lata. Chocolate: R$ 20 o pacote de 1 kg, uso 4 g por brigadeiro. Forminha: R$ 5 o pacote com 100. Mostre a conta passo a passo."
      },
      tip: "Peça para a IA montar a tabela com fórmulas do Google Planilhas. Assim, quando o preço do ingrediente subir, você muda um número e o custo se atualiza sozinho.",
      warn: "A IA pode errar contas, principalmente com unidades (gramas, quilos, metros). Confira sempre com a calculadora. Os valores que valem são os das suas notas de compra, não os que a IA imaginar.",
      exercise: "Calcule hoje o custo do seu produto ou serviço mais vendido, confira na calculadora e salve a planilha.",
      check: [
        "Sei listar tudo o que entra no custo do que vendo.",
        "Tenho o custo de pelo menos um produto calculado e conferido.",
        "Peço sempre a conta passo a passo e confiro na calculadora."
      ]
    },
    {
      id: "m06-a2",
      title: "Como definir o preço",
      dur: 12,
      goal: "Ao final desta aula, você vai ter uma proposta de preço pensada a partir do seu custo, do seu cliente e da concorrência.",
      intro: [
        "Copiar o preço do vizinho é perigoso: o custo dele pode ser diferente do seu. Cobrar barato demais para vender mais pode fazer você trabalhar muito e ganhar pouco. O preço certo cobre os custos, paga o seu trabalho e ainda deixa sobrar.",
        "A IA ajuda a pensar em tudo isso junto e a comparar cenários: “e se eu cobrar R$ 5 a mais?”. Ela explica o raciocínio, mas quem decide o preço é você, conhecendo o seu cliente."
      ],
      steps: [
        "Tenha em mãos o custo por unidade que você calculou na aula anterior.",
        "Anote os preços que concorrentes próximos cobram por algo parecido.",
        "Pense quanto do faturamento vai para as despesas fixas (aluguel, luz, internet). Se não souber, peça ajuda à IA para estimar com os seus números.",
        "Use o primeiro pedido para receber 3 opções de preço com a conta explicada.",
        "Confira as contas na calculadora e escolha o preço que faz sentido para o seu cliente.",
        "Use o segundo pedido para ver o que acontece se você mudar o preço."
      ],
      prompts: [
        { label: "Sugestão de preço", text: "Tenho um(a) [tipo de negócio] em [cidade/bairro]. Quero definir o preço de [produto ou serviço].\n- Custo por unidade: R$ [valor]\n- Despesas fixas do mês: R$ [valor]\n- Quantas unidades vendo por mês, em média: [número]\n- Preço da concorrência: entre R$ [valor] e R$ [valor]\n- Meu cliente valoriza: [ex.: qualidade, rapidez, preço baixo]\n\nMe dê 3 opções de preço (mais em conta, equilibrado, mais caro), mostrando para cada uma, passo a passo, quanto sobra por unidade e quanto sobraria no mês. Explique em linguagem simples os prós e contras de cada uma." },
        { label: "E se eu mudar o preço?", text: "Com os mesmos números, me mostre numa tabela o que acontece com a sobra do mês se eu cobrar R$ [valor 1], R$ [valor 2] e R$ [valor 3], considerando que posso vender [mais ou menos] unidades. Mostre as contas passo a passo." }
      ],
      tip: "Preço não é só número. Às vezes um combo, um tamanho maior ou um adicional (como a borda recheada na pizzaria) traz mais lucro do que subir o preço do item básico. Peça ideias assim para a IA.",
      warn: "Confira todas as contas com a calculadora. Impostos e taxas do seu tipo de empresa (MEI ou outra) mudam o preço final: confirme com o seu contador quanto você deve considerar, e não use percentuais inventados pela IA.",
      exercise: "Escolha um produto ou serviço, faça a simulação de 3 preços com a IA, confira as contas e decida se o seu preço atual está certo.",
      check: [
        "Sei que o preço precisa cobrir custo, despesas e o meu trabalho.",
        "Sei comparar opções de preço com a IA mostrando as contas.",
        "Sei que impostos eu confirmo com o contador."
      ]
    },
    {
      id: "m06-a3",
      title: "Controle de caixa com uma planilha simples",
      dur: 12,
      goal: "Ao final desta aula, você vai ter uma planilha de caixa pronta no Google Planilhas e saber anotar as entradas e saídas do dia.",
      intro: [
        "Misturar o dinheiro do negócio com o dinheiro de casa é um dos erros mais comuns. No fim do mês, a dona do café olha a conta e não sabe se lucrou ou se só pagou as contas. Um caderno ajuda, mas some, molha e não soma sozinho.",
        "Com a IA você monta, em poucos minutos, uma planilha simples que soma tudo para você. Não precisa saber fórmulas: a IA escreve, você copia e cola no Google Planilhas, que é gratuito e funciona no celular."
      ],
      steps: [
        "Instale o aplicativo Google Planilhas no celular (ou use o Excel, se já tiver).",
        "Use o primeiro pedido para a IA criar o modelo da planilha.",
        "Crie uma planilha nova e cole a tabela. Depois cole as fórmulas nas células que a IA indicar.",
        "Teste com 3 lançamentos inventados e confira o saldo na calculadora. Depois apague os testes.",
        "Combine com você mesmo um horário fixo para anotar: por exemplo, todo dia ao fechar.",
        "Se aparecer erro na planilha, use o segundo pedido."
      ],
      prompts: [
        { label: "Criar a planilha de caixa", text: "Crie uma planilha simples de controle de caixa para um(a) [tipo de negócio], para eu colar no Google Planilhas. Colunas: Data | Descrição | Tipo (Entrada ou Saída) | Categoria | Forma de pagamento (Dinheiro, Pix, Cartão) | Valor.\n\nCategorias de entrada: [ex.: vendas no balcão, encomendas, delivery].\nCategorias de saída: [ex.: ingredientes, aluguel, luz, salário, embalagem].\n\nInclua: 3 linhas de exemplo, uma área com total de entradas, total de saídas e saldo, e um resumo por categoria. Me diga exatamente em qual célula colar cada fórmula e explique cada fórmula em uma linha simples." },
        { label: "Consertar a planilha", text: "Colei a fórmula [cole a fórmula] na célula [célula] do Google Planilhas e apareceu [cole a mensagem de erro ou o que aconteceu]. Me explique o problema em linguagem simples e me dê a fórmula corrigida." }
      ],
      example: {
        bad: "Faz uma planilha de caixa.",
        good: "Crie uma planilha de caixa para o meu salão de beleza, para colar no Google Planilhas, com colunas de data, serviço, entrada ou saída, forma de pagamento e valor, e um saldo que se atualiza sozinho. Diga em qual célula vai cada fórmula."
      },
      tip: "Use uma conta e uma maquininha só para o negócio. Fica muito mais fácil conferir a planilha com o extrato do banco no fim do mês.",
      warn: "Confira o saldo da planilha com a calculadora e com o extrato do banco de vez em quando: uma fórmula colada no lugar errado pode somar errado. Não coloque dados bancários, senhas ou CPF na conversa com a IA.",
      exercise: "Crie a sua planilha de caixa agora, lance as entradas e saídas de hoje e confira o saldo.",
      check: [
        "Tenho uma planilha de caixa funcionando no celular.",
        "Sei anotar entradas e saídas todos os dias.",
        "Sei pedir ajuda à IA quando uma fórmula dá erro."
      ]
    },
    {
      id: "m06-a4",
      title: "Contas a pagar e a receber",
      dur: 10,
      goal: "Ao final desta aula, você vai ter uma lista organizada do que precisa pagar e do que tem para receber, com as datas, e mensagens prontas para cobrar com educação.",
      intro: [
        "Esquecer um boleto gera multa e juros. Esquecer de cobrar o cliente que levou fiado faz o dinheiro sumir. Na loja de bairro isso acontece todo mês: a caderneta do fiado cresce e ninguém sabe ao certo quem deve quanto.",
        "Uma tabela simples de contas a pagar e a receber resolve. A IA monta a tabela e ainda escreve mensagens de cobrança gentis, que não fazem você perder o cliente."
      ],
      steps: [
        "Junte os boletos e contas do mês e anote o que é, o valor e o vencimento.",
        "Anote quem está devendo para você, usando um apelido ou número em vez do nome completo.",
        "Use o primeiro pedido para criar a planilha de contas a pagar e a receber.",
        "Cole no Google Planilhas e coloque os lembretes de vencimento na agenda do celular.",
        "Use o segundo pedido para criar as mensagens de cobrança e envie você mesmo, pelo WhatsApp.",
        "Toda semana, marque o que já foi pago e o que já recebeu."
      ],
      prompts: [
        { label: "Planilha de contas", text: "Crie uma planilha para o Google Planilhas com duas abas.\nAba 1 – Contas a pagar: Conta | Fornecedor | Valor | Vencimento | Pago? (Sim/Não) | Data do pagamento.\nAba 2 – Contas a receber: Cliente (apelido) | O que comprou | Valor | Data combinada | Recebido? (Sim/Não).\nInclua fórmulas para: total a pagar no mês, total a receber, e um destaque para contas que vencem nos próximos 7 dias. Diga em qual célula vai cada fórmula e como colocar a cor de destaque." },
        { label: "Mensagens de cobrança", text: "Escreva 3 mensagens de WhatsApp para lembrar um cliente de um pagamento atrasado de [produto ou serviço], no valor de R$ [valor], combinado para [data]. Uma para 1 dia de atraso (bem leve), uma para 1 semana (gentil e clara) e uma para 1 mês (firme e educada). Ofereça Pix como forma de pagar. Deixe [NOME] no lugar do nome." }
      ],
      tip: "Peça à IA uma rotina de 10 minutos por semana, por exemplo toda segunda de manhã, para revisar a planilha. Constância vale mais do que uma planilha perfeita.",
      warn: "Não cole na IA nome completo, CPF, telefone ou endereço de clientes e fornecedores, nem números de boleto ou dados bancários. Confira os totais com a calculadora. Dúvidas sobre multa, juros ou cobrança judicial vão para o contador ou advogado.",
      exercise: "Monte a sua planilha de contas com tudo o que vence este mês e mande pelo menos uma mensagem de cobrança pendente.",
      check: [
        "Tenho uma lista do que pagar e do que receber, com datas.",
        "Sei cobrar um cliente com educação usando uma mensagem pronta.",
        "Não coloco dados pessoais nem bancários na IA."
      ]
    },
    {
      id: "m06-a5",
      title: "Entender as suas vendas e fazer metas do mês",
      dur: 12,
      goal: "Ao final desta aula, você vai entender o que os números do seu mês estão dizendo e ter uma meta simples e possível para o próximo.",
      intro: [
        "Você já tem a planilha de caixa. Agora vem a parte boa: entender o que ela mostra. Qual dia vende mais? Qual produto dá mais dinheiro? Onde o dinheiro está escapando? Na pizzaria, por exemplo, pode ser que a terça quase não pague a luz acesa.",
        "Você pode colar o resumo dos seus números na IA e pedir que ela explique em português simples, como um consultor. Depois, junto com ela, você define uma meta de verdade, que cabe na sua rotina."
      ],
      steps: [
        "Abra a sua planilha de caixa e copie o resumo do mês: totais por categoria, por dia da semana ou por produto.",
        "Cole na IA com o primeiro pedido.",
        "Leia a análise e confira na calculadora as contas que ela fizer.",
        "Use o segundo pedido para montar uma meta para o próximo mês, dividida por semana.",
        "Escreva a meta num lugar que você vê todo dia: papel no caixa ou fundo de tela do celular.",
        "No fim de cada semana, compare o que vendeu com a meta."
      ],
      prompts: [
        { label: "Entender o mês", text: "Sou dono(a) de um(a) [tipo de negócio]. Estes são os números do meu mês:\n[cole o resumo: vendas por dia, por produto ou por categoria, e despesas]\n\nExplique em linguagem simples:\n1. O que vendeu mais e o que vendeu menos.\n2. Em que dias ou horários vendo mais.\n3. Onde estou gastando mais.\n4. 3 ideias práticas para melhorar no próximo mês.\nMostre passo a passo qualquer conta que fizer. Se faltar informação, me pergunte em vez de inventar." },
        { label: "Meta do mês", text: "Com base nesses números, me ajude a definir UMA meta de vendas realista para o próximo mês. Mostre a conta passo a passo, divida a meta por semana e por dia de funcionamento ([dias que abro]), e sugira 3 ações simples para chegar lá." }
      ],
      example: {
        bad: "Minhas vendas estão boas?",
        good: "Meu café vendeu R$ 18.000 em outubro: segunda R$ 1.900, terça R$ 2.100, quarta R$ 2.400, quinta R$ 2.800, sexta R$ 4.000, sábado R$ 4.800. Gastei R$ 6.500 em insumos e R$ 5.000 em fixos. Explique esses números e me dê 3 ideias. Mostre as contas."
      },
      tip: "Comece com uma meta só e pequena, por exemplo “vender 10% mais às terças”. Uma meta que você alcança anima mais do que cinco que você esquece.",
      warn: "A IA pode errar contas e tirar conclusões de dados incompletos. Confira os números na calculadora e lembre: quem conhece o seu movimento é você. Lucro e impostos devem ser confirmados com o contador.",
      exercise: "Cole o resumo do seu último mês na IA, leia a análise, confira as contas e escreva a sua meta para o próximo mês.",
      check: [
        "Sei pedir para a IA explicar os meus números em linguagem simples.",
        "Confiro as contas da IA na calculadora.",
        "Tenho uma meta do mês dividida por semana."
      ]
    }
  ]
});
