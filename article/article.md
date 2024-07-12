


## Introdução
Imagina que você tem um site com vários componentes (peças) trabalhando juntos, tipo um time. 
A comunicação entre componentes é como os jogadores se passando a bola.
Isso é essencial para o site funcionar direitinho, com as informações fluindo de um lugar para outro,
tornando a experiência do usuário mais dinâmica e interativa.

# Maneiras de se comunicar entre os componentes no Angular
Quais as formas de se comunicar entre componentes no Angular?
No Angular, temos várias maneiras de fazer os componentes conversarem. As mais comuns são usando @Input e @Output, que são como cartas passando dados entre os componentes. Também podemos usar serviços, que funcionam como um correio central, distribuindo as informações para onde precisam ir.

# Exemplo práico de como realizar a comunicação entre os componentes no Angular

Utilizando @Input e @Output para se comunicar

@Input
Vamos imaginar que você está construindo um painel de controle onde o componente pai é o painel principal e o componente filho é um widget que exibe a temperatura. O painel principal (pai) precisa passar a temperatura atual para o widget (filho).

 # Arquivo: app-painel.ts


# Arquivo app-painel.html



# Arquivo app-widget-temperatura.ts


# Arquivo app-widget-temperatura.html



Portanto, é possível visualizar que o componente pai, que chamamos de Painel ao chamar no template HTML o componente filho
WidgetTemperatura está utilizaneo do One Way Binding para enviar suas informações, através do [temperatura]="temperaturaAtual".



Para exercitamos o uso do @Output vamos fazer um componente de configuração (filho) que permite ao usuário ajustar o tema do painel. Quando o tema é alterado, o componente de configuração precisa informar o painel principal (pai) para que ele mude a cor do fundo, por exemplo, alternando entre claro e escuro.


# Arquivo app-painel.ts


# Arquivo app-painel.html


# Arquivo app-config-tema.ts


# Arquivo app-config-tema.html
<button (click)="alterarTema()"></button>




# Quando é o melhor caso para se utilizar @Output e @Input?
Use @Input quando:

Você precisa passar dados do pai para o filho.
O filho só precisa exibir ou utilizar os dados sem necessidade de retornar informações ao pai.

Use @Output quando:
O filho precisa informar o pai sobre ações ou mudanças de estado.
Eventos ou ações no filho precisam desencadear comportamentos no pai.


# Formas de exercitar a utilização de @Output e @Input no Angular
Para praticar, você pode criar pequenos projetos no Angular. Segue uma lista de pequenos projetos que podem ser implementados
com o intuito de praticar a comunicação entre componentes do Angular: 



# Analogia para aprender mais rápido
Pensa nos componentes como se fossem pessoas numa empresa. @Input é o chefe dando instruções para os funcionários (componentes filhos). @Output é quando os funcionários (componentes filhos) reportam de volta para o chefe (componente pai). Assim, todos sabem o que está acontecendo e trabalham em harmonia!

Dica Final
Não tenha medo de experimentar e errar. A prática leva à perfeição, e brincar com exemplos simples é a melhor forma de dominar a comunicação entre componentes no Angular. Boa sorte e divirta-se codando!


Fontes de produção:
