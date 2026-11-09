window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m02", n: 2, title: "A arte de pedir", icon: "💬",
  desc: "Você aprende a fazer pedidos claros para a IA, a corrigir as respostas e a conferir o que ela diz, para receber textos prontos para usar.",
  lessons: [
    {
      id: "m02-a1",
      title: "A fórmula do bom pedido (Quem · O quê · Para quem · Como)",
      dur: 9,
      goal: "Ao final desta aula você vai escrever pedidos completos usando a fórmula Quem · O quê · Para quem · Como.",
      intro: [
        "O texto que você escreve para a IA tem um nome: “prompt”. Neste curso a gente chama simplesmente de “pedido”. E a qualidade da resposta depende quase toda da qualidade do pedido.",
        "Se o Rafael, da pizzaria, escreve só “faça um post de pizza”, recebe um texto genérico, que serve para qualquer pizzaria do mundo. Quando ele conta quem é, o que quer, para quem é e como deve ficar, a resposta sai com a cara dele.",
        "A fórmula tem 4 partes: QUEM é você · O QUÊ você quer · PARA QUEM é o texto · COMO ele deve ficar (tamanho, tom, formato)."
      ],
      steps: [
        "QUEM: comece dizendo o seu negócio e onde fica. Ex.: “Tenho uma pizzaria de bairro em Campinas.”",
        "O QUÊ: diga a tarefa exata. Ex.: “Escreva uma mensagem anunciando a pizza nova de calabresa com catupiry.”",
        "PARA QUEM: diga quem vai ler. Ex.: “Para clientes que já pedem pelo WhatsApp.”",
        "COMO: diga tamanho, tom e formato. Ex.: “Até 5 linhas, tom animado, com 2 emojis e o preço no final.”",
        "Junte as 4 partes em uma mensagem só e envie. Compare com o pedido curto que você faria antes."
      ],
      prompts: [
        { label: "Fórmula completa", text: "QUEM: Tenho um(a) [tipo de negócio] em [bairro/cidade].\nO QUÊ: Escreva [tarefa, ex.: uma mensagem sobre o novo horário de funcionamento].\nPARA QUEM: Para [público, ex.: clientes que já compram comigo].\nCOMO: [tamanho, ex.: até 5 linhas], tom [ex.: simpático e direto], [formato, ex.: pronto para colar no WhatsApp]." }
      ],
      example: {
        bad: "Faz um post de pizza.",
        good: "Tenho uma pizzaria de bairro em Campinas. Escreva uma mensagem anunciando nossa nova pizza de calabresa com catupiry, para clientes que já pedem pelo WhatsApp. Até 5 linhas, tom animado, com 2 emojis e terminando com “Peça já pelo WhatsApp”."
      },
      tip: "Esqueceu uma parte? Tudo bem. A IA vai responder mesmo assim, e você completa na próxima mensagem.",
      exercise: "Escolha uma mensagem que você precisa mandar esta semana (aviso, promoção, resposta). Escreva o pedido com as 4 partes da fórmula e guarde o resultado no seu caderno de pedidos.",
      check: [
        "Sei as 4 partes da fórmula: Quem, O quê, Para quem e Como.",
        "Sei transformar um pedido curto em um pedido completo.",
        "Tenho um pedido com a fórmula salvo no meu caderno."
      ]
    },
    {
      id: "m02-a2",
      title: "A ficha do seu negócio (contexto que você reusa)",
      dur: 10,
      goal: "Ao final desta aula você vai ter uma ficha pronta do seu negócio para colar no início de qualquer conversa com a IA.",
      intro: [
        "Toda conversa nova começa do zero: a IA não lembra quem você é, a não ser que você conte ou use algum recurso de memória do aplicativo (que varia conforme o plano e muda com frequência). Repetir tudo toda vez cansa.",
        "A solução é a “ficha do negócio”: um texto curto, escrito uma vez, com o essencial sobre você. A Juliana, da loja de roupas, cola a ficha no começo de cada conversa e as respostas já saem com o jeito dela de falar, os preços certos e o horário da loja.",
        "É como apresentar o seu negócio para um funcionário novo. Uma vez bem feito, serve para sempre, é só atualizar quando algo mudar."
      ],
      steps: [
        "Copie o modelo de ficha abaixo para o seu caderno de pedidos.",
        "Preencha cada linha com informações do seu negócio. Seja breve: uma linha por item.",
        "Não coloque dados pessoais, CPF, CNPJ, senhas nem dados bancários. Só o que um cliente já pode ver.",
        "Cole a ficha numa conversa nova e peça: “Leia e me diga em 3 linhas o que entendeu do meu negócio.” Corrija o que estiver errado.",
        "A partir de agora, comece suas conversas colando a ficha e, embaixo, escreva o seu pedido."
      ],
      prompts: [
        { label: "Modelo da ficha", text: "FICHA DO MEU NEGÓCIO\nNome: [nome do negócio]\nO que vendo: [produtos ou serviços principais e faixa de preço]\nOnde fico: [bairro/cidade] · Atendo: [presencial, entrega, WhatsApp]\nHorário: [dias e horários]\nMeus clientes: [quem são, ex.: mães do bairro, trabalhadores da região]\nO que me diferencia: [ex.: massa de fermentação natural, atendimento sem pressa]\nJeito de falar: [ex.: simpático, simples, com poucos emojis, trato o cliente por “você”]\nNunca diga: [ex.: “promoção imperdível”, gírias, preços sem confirmar comigo]" },
        { label: "Testar a ficha", text: "[cole aqui a sua ficha]\n\nLeia a ficha acima. Antes de qualquer tarefa, me diga em 3 linhas o que você entendeu do meu negócio e me faça 2 perguntas sobre o que ficou faltando." }
      ],
      tip: "Alguns aplicativos permitem salvar instruções ou organizar conversas em projetos, dependendo do plano. Se o seu tiver, cole a ficha lá. Se não, o caderno de pedidos resolve.",
      warn: "Preços mudam. Sempre que atualizar o cardápio ou a tabela de preços, atualize também a ficha, senão a IA vai usar valores antigos.",
      exercise: "Preencha a sua ficha do negócio agora, teste com o segundo pedido e salve a versão corrigida no caderno de pedidos.",
      check: [
        "Tenho a ficha do meu negócio preenchida e salva.",
        "Sei colar a ficha antes do meu pedido.",
        "Sei o que não deve entrar na ficha."
      ]
    },
    {
      id: "m02-a3",
      title: "Corrigir e pedir de novo",
      dur: 8,
      goal: "Ao final desta aula você vai saber ajustar uma resposta da IA em vez de desistir ou começar tudo de novo.",
      intro: [
        "A primeira resposta quase nunca é a final. E está tudo bem. Conversar com a IA é como dar retorno a um funcionário: “ficou bom, mas encurta”, “tira essa palavra”, “deixa mais carinhoso”.",
        "O Seu Antônio, da oficina, pediu um aviso sobre revisão de freios. Veio um texto longo e formal demais. Em vez de apagar, ele respondeu: “Encurte para 3 linhas e fale como eu falo com cliente de anos”. Na segunda tentativa, ficou perfeito.",
        "Você não precisa reescrever o pedido inteiro. Basta dizer o que mudar, na mesma conversa, porque ali a IA ainda lembra o que foi falado."
      ],
      steps: [
        "Leia a resposta e pergunte a si mesmo: o que está bom e o que está ruim?",
        "Diga primeiro o que manter: “Gostei do começo.” Depois, o que mudar: “Mas o final está forçado.”",
        "Seja específico: em vez de “melhore”, diga “mais curto”, “sem emojis”, “mais simples”, “troque ‘prezado cliente’ por ‘oi’”.",
        "Peça opções quando estiver em dúvida: “Me dê 3 versões diferentes.”",
        "Se a conversa ficou confusa depois de muitas idas e vindas, comece uma nova conversa, cole a ficha e o melhor texto até agora."
      ],
      prompts: [
        { label: "Ajustes rápidos", text: "Gostei de [parte que ficou boa]. Agora mude o seguinte:\n1. [ex.: encurte para no máximo 4 linhas]\n2. [ex.: tire a palavra “imperdível”]\n3. [ex.: termine com uma pergunta para o cliente responder]\nMantenha o resto igual." },
        { label: "Três versões", text: "Me dê 3 versões diferentes desse texto: uma mais curta, uma mais carinhosa e uma mais direta. Numere cada uma para eu escolher." }
      ],
      example: {
        bad: "Não gostei, faz de novo.",
        good: "O texto está muito formal. Fale como eu falo com cliente antigo, use “você”, corte para 3 linhas e tire o “atenciosamente”."
      },
      tip: "Achou uma correção que você sempre faz (ex.: “sem emojis demais”)? Coloque na sua ficha do negócio, na linha “Jeito de falar”.",
      exercise: "Pegue um texto que a IA fez para você nas aulas anteriores e faça pelo menos 2 ajustes até ele ficar do jeito que você mandaria de verdade.",
      check: [
        "Sei dizer à IA o que manter e o que mudar.",
        "Sei pedir várias versões para escolher.",
        "Sei quando é melhor começar uma conversa nova."
      ]
    },
    {
      id: "m02-a4",
      title: "Formatos que facilitam: lista, tabela, passo a passo",
      dur: 8,
      goal: "Ao final desta aula você vai pedir respostas no formato que mais ajuda: lista, tabela ou passo a passo.",
      intro: [
        "Um bloco grande de texto é difícil de ler no celular, entre um cliente e outro. Quando você pede o formato certo, a resposta fica pronta para usar.",
        "A Fernanda, da confeitaria, pediu ajuda para organizar as encomendas da semana e recebeu um texto corrido. Quando pediu “em tabela, com dia, produto e quantidade”, conseguiu ver tudo de uma vez e até copiar para uma planilha.",
        "Três formatos resolvem quase tudo: LISTA (para itens e ideias), TABELA (para comparar ou organizar), PASSO A PASSO (para explicar um processo ao funcionário ou ao cliente)."
      ],
      steps: [
        "Para ideias ou itens, termine o pedido com: “Responda em uma lista numerada.”",
        "Para comparar ou organizar, peça: “Responda em uma tabela com as colunas [A], [B] e [C].”",
        "Para ensinar um processo, peça: “Responda em passo a passo numerado, com frases curtas.”",
        "Se a tabela ficar ruim de ler no celular, peça: “Agora transforme em lista.”",
        "Para levar ao computador, copie a tabela (geralmente há um botão de copiar embaixo da resposta) e cole numa planilha."
      ],
      prompts: [
        { label: "Tabela de encomendas", text: "Tenho uma [tipo de negócio]. Estas são as encomendas da semana: [cole as encomendas, sem nome nem telefone de clientes, ex.: “bolo de chocolate 2 kg – sábado”].\nOrganize em uma tabela com as colunas: Dia · Produto · Quantidade · Observação. Ordene por dia." },
        { label: "Passo a passo para funcionário", text: "Tenho um(a) [tipo de negócio]. Escreva um passo a passo numerado, com frases curtas, para um funcionário novo aprender a [tarefa, ex.: fechar o caixa no fim do dia]. Use no máximo 8 passos e linguagem bem simples." }
      ],
      tip: "Pedir “em no máximo 5 itens” ou “em até 6 linhas” é uma das formas mais fáceis de ter respostas que cabem na tela do celular.",
      warn: "Se a tabela tiver contas (totais, somas, custos), confira os números numa calculadora. A IA pode errar contas.",
      exercise: "Escolha uma tarefa do seu negócio (encomendas, lista de compras, rotina de abertura) e peça à IA em dois formatos diferentes. Salve o melhor no caderno de pedidos.",
      check: [
        "Sei pedir uma resposta em lista, tabela ou passo a passo.",
        "Sei limitar o tamanho da resposta.",
        "Sei que contas feitas pela IA precisam ser conferidas."
      ]
    },
    {
      id: "m02-a5",
      title: "Quando a IA inventa: como conferir",
      dur: 9,
      goal: "Ao final desta aula você vai reconhecer quando a IA pode estar inventando e vai ter um jeito rápido de conferir antes de usar.",
      intro: [
        "A IA escreve tudo com a mesma segurança, esteja certa ou errada. Às vezes ela inventa uma data comemorativa, uma regra, um preço ou até uma lei. Isso acontece, e não é raro.",
        "O Paulo, da marcenaria, pediu à IA a medida padrão de uma bancada de cozinha e recebeu um número. Antes de cortar a madeira, conferiu com a medida da cliente e com um colega. O número da IA não servia para aquela cozinha. Conferir custou 5 minutos; errar custaria uma peça inteira.",
        "A regra é: texto e ideias, você revisa. Fatos, números, datas, leis e preços, você confere em outra fonte."
      ],
      steps: [
        "Desconfie sempre de: números, preços, datas, nomes de leis, regras de órgãos públicos, dicas de saúde e informações sobre empresas.",
        "Peça para a IA dizer o que é incerto: “Do que você não tem certeza nessa resposta?”",
        "Confira o fato em uma fonte oficial: site do governo, do fornecedor, do seu contador ou do seu sindicato.",
        "Releia o texto final em voz alta antes de enviar ao cliente. Se algo soar estranho, corrija.",
        "Nunca prometa ao cliente algo que só a IA disse (prazo, garantia, regra) sem confirmar."
      ],
      prompts: [
        { label: "Pedir onde pode haver erro", text: "Revise a resposta que você acabou de me dar. Liste em tópicos: 1) o que você tem certeza, 2) o que pode estar errado ou desatualizado, 3) onde eu devo conferir cada informação (tipo de fonte). Seja honesto se não souber." },
        { label: "Revisar meu texto", text: "Revise este texto que vou mandar para clientes da minha [tipo de negócio]: [cole o texto].\nAponte erros de português, frases confusas e qualquer promessa que eu deveria confirmar antes de enviar. Não mude o meu jeito de falar." }
      ],
      example: {
        bad: "Qual é a lei que me obriga a dar troco? Vou colocar no cartaz.",
        good: "Quero fazer um cartaz sobre troco na minha loja. Me explique o assunto em linguagem simples e me diga onde conferir a regra oficial antes de eu colocar no cartaz."
      },
      warn: "Assuntos legais, fiscais, trabalhistas e de saúde: a IA ajuda a entender, mas quem confirma é um profissional ou a fonte oficial.",
      exercise: "Peça à IA uma informação sobre o seu ramo que tenha números ou regras (ex.: validade de um produto, prazo de garantia). Use o primeiro pedido pronto e confira pelo menos uma informação em fonte oficial.",
      check: [
        "Sei quais informações da IA eu sempre preciso conferir.",
        "Sei pedir para a IA apontar onde pode estar errada.",
        "Sei onde conferir informações importantes do meu ramo."
      ]
    }
  ]
});
