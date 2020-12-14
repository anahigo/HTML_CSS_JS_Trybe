# Aula CSS Responsivo - Mobile First
# Exercício Parte I

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso, veja no detalhe nos Recursos adicionais ).

Agora você vai ajustar o CSS para melhorar a visualização da página.

# 1 - Realize as seguintes tarefas: 

 - Faça o tamanho da fonte ser maior;

 - Faça o tamanho da fonte dos elementos h1 ser menor;

 - Aumente o espaçamento entre as figuras;

 - Adicione um pouco de margin na página.

Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do mobile first. Fazendo isso, começamos com um design básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.

Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.

Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o “Inspecionar elemento”. Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensãoes de largura e altura irão aparecer conforme você redimensiona a tela.
Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.

Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra…
Realize as seguintes tarefas:

Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px). Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;

# 2 - Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width do teste da media query. Dentro desse breakpoint, adicione os seguintes ajustes:

 - Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);

 - Ajuste o tamanho da fonte;

 - Ajuste as margens da página;

 - Faça as imagens serem mostradas em duas colunas.

 - Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.

# 3 - Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px), e realize os seguintes ajustes dentro do breakpoint:

 - Altere a cor de fundo;

 - Ajuste o tamanho da fonte;

 - Ajuste as margens da página;

 - Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.



# Aula CSS Responsivo - Mobile First
# Exercício 2

Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande).

Faça pelo menos um commit para cada layout;
Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

 - Onde a lista de capítulos deve estar posicionada?

 - Como a história deve ser mostrada?

 - Como o cabeçalho deve ser posicionado?

 - O que fazer com as informações do autor em cada tamanho de tela?

 - Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.


# Aula CSS Responsivo - Mobile First
# Exercício 3

Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. 

Especificamente:
- O elemento com id aside deve desaparecer;

- O elemento body não deve ter padding;

- As imagens não devem exceder a largura da tela;

- Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;

- O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo apos o usuário rolar a página.

# Aula CSS Responsivo - Mobile First
# Exercício Bônus

Agora que você já está fera em criar layouts específicos para diferentes tamanhos de tela utilizando a abordagem mobile first, que tal voltar à pagina que você criou na aula de HTML Semântico sobre o camarão louva deus e criar um layout bem bacana para ela ser acessada a partir de telas menores? 

Sugestão:

- Crie um layout específico para telas pequenas (smartphones); 

- Crie um layout específico para telas médias (tablets); 

- Crie um layout específico para impressão (impressoras, salvar como PDF, etc). 

Dica: o Bootstrap não tem uma classe específica para o tipo de media print. Você deve definir a media query no seu arquivo CSS e estilizar conforme achar melhor! 