window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m10", n: 10, title: "Imagens e presença online", icon: "🖼️",
  desc: "Você vai criar imagens para posts, melhorar as fotos dos seus produtos com honestidade, deixar seu perfil no Google em dia e fazer artes no Canva com a ajuda da IA.",
  lessons: [
    {
      id: "m10-a1",
      title: "Criar imagens com IA para posts",
      dur: 10,
      goal: "Ao final desta aula, você vai criar uma imagem de apoio para um post do seu negócio, usando um pedido bem descrito.",
      intro: [
        "Nem todo post precisa de foto de produto. Para avisar “fechado no feriado”, anunciar uma promoção de Dia das Mães ou ilustrar uma dica, uma imagem criada pela IA pode resolver em minutos.",
        "Hoje, o ChatGPT consegue criar imagens a partir de um texto. O Claude não cria imagens, mas é ótimo para te ajudar a escrever a descrição da imagem e a legenda do post. Outros aplicativos, como o Canva, também têm ferramentas de imagem. Esses recursos mudam com frequência e alguns dependem do plano, então confira o que está disponível na sua conta.",
        "Uma regra importante: imagem criada por IA serve para ilustrar e decorar. Ela nunca deve fingir ser o seu produto real."
      ],
      steps: [
        "Escolha o assunto do post: um aviso, uma data especial, uma dica ou um convite.",
        "Escreva a descrição da imagem com: o que aparece, o estilo (foto, desenho, aquarela), as cores do seu negócio e o formato (quadrado para o feed, em pé para os stories).",
        "No ChatGPT, cole o pedido abaixo. Se não tiver ideia de como descrever, peça antes ao Claude ou ao ChatGPT para escrever a descrição para você.",
        "Peça ajustes simples, um de cada vez: “mais claro”, “sem pessoas”, “mais espaço vazio em cima para o texto”.",
        "Baixe a imagem e coloque o texto do aviso por cima no Canva ou no próprio aplicativo de postagem — a IA ainda costuma errar letras escritas dentro da imagem."
      ],
      prompts: [
        { label: "Imagem para post", text: "Crie uma imagem [quadrada / vertical para stories] para o post de um(a) [tipo de negócio] em [cidade ou bairro].\nAssunto: [ex.: aviso de horário especial no feriado].\nO que deve aparecer: [ex.: uma mesa de café da manhã simples, com xícara e pão de queijo, luz de manhã].\nEstilo: [foto realista / ilustração colorida / aquarela].\nCores: [cores do seu negócio].\nNão coloque nenhum texto, logotipo ou marca na imagem. Deixe espaço livre na parte de [cima / baixo] para eu escrever depois." },
        { label: "Pedir ajuda para descrever", text: "Quero uma imagem para um post do meu negócio, [tipo de negócio], sobre [assunto]. Escreva 3 descrições diferentes de imagem, com cena, estilo e cores, que eu possa usar num gerador de imagens. Nenhuma deve mostrar produtos como se fossem os meus de verdade." }
      ],
      example: {
        bad: "Faz uma imagem bonita de pizza.",
        good: "Crie uma imagem quadrada, estilo ilustração colorida, de uma família rindo em volta de uma mesa, com tons de vermelho e amarelo, sem texto e com espaço em cima para eu escrever “Domingo é dia de pizza”."
      },
      warn: "Não use imagem de IA para mostrar um prato, bolo ou móvel como se fosse o seu: o cliente vai esperar receber aquilo. Não peça imagens com marcas, personagens ou pessoas famosas, nem copiando o trabalho de outro artista. E nunca envie fotos de clientes sem autorização.",
      exercise: "Crie com a IA uma imagem de apoio para o seu próximo aviso (horário, feriado ou data especial) e salve no celular para postar.",
      check: [
        "Sei descrever uma imagem com cena, estilo, cores e formato.",
        "Sei que o ChatGPT cria imagens e que o Claude me ajuda a escrever a descrição e a legenda.",
        "Sei que imagem de IA serve para ilustrar e não para fingir que é o meu produto."
      ]
    },
    {
      id: "m10-a2",
      title: "Fotos de produtos melhores (sem enganar o cliente)",
      dur: 10,
      goal: "Ao final desta aula, você vai tirar e melhorar fotos reais dos seus produtos, com a IA como consultora, sem mudar o que o cliente vai receber.",
      intro: [
        "A Luana faz bolos de pote e vende pelo WhatsApp. As fotos eram escuras, com a pia aparecendo atrás. Os bolos eram lindos, mas não pareciam.",
        "A melhor foto de produto continua sendo a foto real, bem tirada: boa luz, fundo limpo, ângulo certo. A IA ajuda de duas formas: te dá dicas olhando a sua foto, e pode ajudar em ajustes como clarear, endireitar ou trocar um fundo bagunçado por um fundo neutro.",
        "O limite é a honestidade. Você pode melhorar a luz; não pode mudar o tamanho, a cor, o recheio ou o acabamento do produto. Se o cliente recebe algo diferente da foto, você perde a confiança e pode ter problemas."
      ],
      steps: [
        "Prepare o cenário: perto de uma janela, de dia, com um fundo simples (uma cartolina branca, uma tábua de madeira ou um pano liso).",
        "Tire 3 ou 4 fotos do mesmo produto, de ângulos diferentes: de frente, de cima e um detalhe de perto.",
        "Envie as fotos ao Claude ou ao ChatGPT e peça uma avaliação com o primeiro pedido abaixo.",
        "Refaça a foto seguindo as dicas. Para ajustes de luz e corte, use o editor de fotos do próprio celular.",
        "Se quiser trocar o fundo, use uma ferramenta de edição com IA (como as do Canva ou do ChatGPT, conforme o que estiver disponível) e compare com o produto real antes de publicar."
      ],
      prompts: [
        { label: "Avaliar minha foto", text: "Estou enviando a foto de um produto do meu negócio: [produto, ex.: bolo de pote de brigadeiro]. Avalie a foto como um fotógrafo de produto paciente:\n1. O que está bom.\n2. Três coisas que posso melhorar agora, só com o celular (luz, fundo, ângulo, distância).\n3. Uma ideia de cenário simples, com objetos que eu tenho em casa.\nNão sugira nada que mude a aparência real do produto." },
        { label: "Editar sem enganar", text: "Edite esta foto do meu produto [nome do produto] apenas assim: [clarear um pouco / endireitar / trocar o fundo por um fundo branco liso]. Não mude a cor, o tamanho, a textura, o formato nem a quantidade do produto. Ele precisa continuar idêntico ao real." }
      ],
      tip: "Fotografe sempre no mesmo lugar e com a mesma luz. Seu catálogo fica com cara profissional e o cliente reconhece seus produtos de longe.",
      warn: "Não use fotos de outras lojas, da internet ou de bancos de imagem como se fossem os seus produtos, e não coloque marcas de outras empresas. Depois de qualquer edição, coloque a foto ao lado do produto real e pergunte: “o cliente vai receber exatamente isto?”. Se a resposta for não, volte para a foto original.",
      exercise: "Escolha o produto que mais vende, tire 3 fotos novas perto da janela, peça a avaliação da IA e refaça a melhor seguindo as dicas.",
      check: [
        "Sei tirar uma foto de produto com luz natural e fundo limpo.",
        "Sei pedir à IA uma avaliação da minha foto com dicas práticas.",
        "Sei a diferença entre melhorar a foto e enganar o cliente."
      ]
    },
    {
      id: "m10-a3",
      title: "Perfil da Empresa no Google e site",
      dur: 10,
      goal: "Ao final desta aula, você vai ter textos prontos para o seu Perfil da Empresa no Google e uma resposta modelo para avaliações.",
      intro: [
        "Quando alguém procura “marceneiro perto de mim” ou “pizzaria no bairro”, o Google mostra um quadro com nome, endereço, horário, fotos e avaliações. Esse quadro é o Perfil da Empresa no Google, e ele é gratuito. Para muitos clientes, é a primeira impressão do seu negócio.",
        "Muitos perfis estão com horário errado, sem descrição e com avaliações sem resposta. A IA te ajuda a escrever a descrição, a responder avaliações e até a montar o texto de uma página simples, se você quiser ter um site.",
        "As telas do Google mudam com frequência, então aqui vamos focar no conteúdo. Para criar ou ajustar o perfil, procure “Perfil da Empresa no Google” na busca ou no aplicativo do Google Maps e siga as instruções."
      ],
      steps: [
        "Procure o nome do seu negócio no Google e no Google Maps. Veja se o perfil existe, se é seu e se as informações estão certas.",
        "Se ainda não tem, crie ou reivindique o perfil seguindo as instruções do Google. Pode haver uma etapa de verificação.",
        "Use o primeiro pedido abaixo, com a sua ficha do negócio, para gerar a descrição.",
        "Confira e atualize: horário (inclusive de feriados), telefone, WhatsApp, endereço e categoria.",
        "Adicione fotos reais: fachada, ambiente, produtos e equipe (só com autorização de quem aparece).",
        "Responda as avaliações, boas e ruins, usando o segundo pedido como ajuda."
      ],
      prompts: [
        { label: "Descrição para o Google", text: "Esta é a ficha do meu negócio: [cole aqui].\nEscreva a descrição para o meu Perfil da Empresa no Google: texto curto, em linguagem simples, dizendo o que faço, para quem, o bairro ou região que atendo e o que me diferencia. Inclua de forma natural as palavras que um cliente usaria para me procurar, como [ex.: conserto de móveis, móveis sob medida]. Sem exageros, sem promessas que eu não possa cumprir e sem emojis." },
        { label: "Responder avaliação", text: "Recebi esta avaliação no Google: “[cole a avaliação, sem o nome completo do cliente]”. Escreva uma resposta pública curta, educada e humana, em nome de [seu nome], de [nome do negócio].\nSe for elogio, agradeça de forma específica. Se for reclamação, reconheça, não discuta, não exponha detalhes do cliente e convide para resolver pelo [WhatsApp ou telefone]." }
      ],
      tip: "Se quiser um site, comece simples: uma página só, com quem você é, o que faz, fotos, horário, endereço e um botão para o WhatsApp. Peça à IA para escrever os textos dessa página a partir da sua ficha do negócio, e use uma ferramenta de criação de site simples ou peça ajuda a alguém de confiança.",
      warn: "Nunca peça ou crie avaliações falsas, nem ofereça desconto em troca de nota alta: isso engana o cliente e pode fazer seu perfil ser penalizado. Responda sempre com respeito, mesmo quando a crítica for injusta.",
      exercise: "Procure seu negócio no Google Maps agora, corrija pelo menos um dado (horário, telefone ou foto) e responda uma avaliação com a ajuda da IA.",
      check: [
        "Sei o que é o Perfil da Empresa no Google e por que ele importa.",
        "Tenho uma descrição clara do meu negócio pronta para usar.",
        "Sei responder avaliações boas e ruins com educação."
      ]
    },
    {
      id: "m10-a4",
      title: "Artes no Canva com a ajuda da IA",
      dur: 10,
      goal: "Ao final desta aula, você vai montar uma arte de post no Canva com o texto e as ideias preparados pela IA.",
      intro: [
        "O Canva é um aplicativo de design feito para quem não é designer. Tem modelos prontos de posts, stories, cardápios, cartões de visita e etiquetas. Você escolhe um modelo e troca o texto, as cores e as fotos. Existe versão gratuita, e algumas funções são pagas.",
        "A IA entra antes do Canva: ela te ajuda a decidir o que escrever, encurta o texto para caber na arte e sugere cores e organização. O Canva também tem recursos de IA próprios, que mudam com o tempo e podem depender do plano.",
        "Juntando os dois, a dona de uma pizzaria monta o cardápio da semana ou o post da promoção em 15 minutos, sem pagar designer para cada arte."
      ],
      steps: [
        "Baixe o aplicativo do Canva no celular e entre com sua conta do Google ou e-mail.",
        "Peça à IA o texto da arte com o pedido abaixo: título curto, uma frase de apoio e a chamada final.",
        "No Canva, procure um modelo pelo tipo (ex.: “post promoção pizza” ou “cardápio”). Escolha um com espaço para o seu texto.",
        "Troque o texto, coloque as cores e o logotipo do seu negócio e, se usar foto, use uma foto real sua.",
        "Antes de baixar, confira: preço, data, telefone e escrita. Depois baixe e poste."
      ],
      prompts: [
        { label: "Texto curto para arte", text: "Vou fazer uma arte no Canva para [post / stories / cardápio / folheto] do meu negócio, [tipo e nome do negócio]. O assunto é [ex.: promoção de rodízio na terça].\nMe dê:\n1. Um título com no máximo 5 palavras.\n2. Uma frase de apoio com no máximo 12 palavras.\n3. Uma chamada final (ex.: “Peça pelo WhatsApp”).\n4. Duas sugestões de combinação de cores que combinem com [cores do negócio].\nFaça 3 opções diferentes." },
        { label: "Cardápio ou tabela de preços", text: "Organize esta lista de produtos e preços para eu colocar num modelo de cardápio no Canva: [cole a lista].\nAgrupe por categoria, use nomes curtos e uma descrição de até 8 palavras por item. Não mude nenhum preço." }
      ],
      example: {
        bad: "Me ajuda com uma arte.",
        good: "Vou fazer um stories no Canva para o meu salão anunciando horários livres no sábado. Me dê 3 opções de título com até 5 palavras e uma chamada para agendar pelo WhatsApp."
      },
      tip: "Depois de acertar uma arte, salve como modelo seu e reaproveite: troque só o texto e a foto na próxima vez. Assim todas as suas artes ficam com a mesma cara.",
      warn: "Não use logotipos, personagens ou fotos de outras marcas. E confira os preços na arte final com a sua tabela: um erro de digitação numa promoção vira problema no balcão.",
      exercise: "Escolha a próxima promoção ou aviso do seu negócio, peça o texto à IA e monte a arte no Canva hoje.",
      check: [
        "Sei pedir à IA textos curtos que cabem numa arte.",
        "Sei escolher e adaptar um modelo no Canva com as cores do meu negócio.",
        "Confiro preços, datas e escrita antes de publicar."
      ]
    }
  ]
});
