# Prompts utilizados para criação do artigo: Utilizando @Input e @Output para comunicação eficiente entre componnentes no Angular

# ---1º
Crie 10 headlines para nomes de artigos sobre o assunto: "Comunicação entre componentes utilizando Angular"
# ---2º
Comporte-se como um escritor de artigos tech Front-end e escreva o artigo atendendo as regras abaixo:

Regras:
-> No máximo 5 linhas por bloco de explicação
-> Me explique de maneira informal, como se eu fosse um estudante de tecnologia que estou aprendendo as coisas agora
-> Os blocos que serão criados estão abaixo, mas fique a vontade para indicar outros blocos que fazem sentido ou não:

Blocos:

- Qual o objetivo de se comunicar entre componentes no Angular?
 
- Quais as formas de se comunicar entre componentes no Angular?

- Utilizando @Input e @Output para se comunicar
	- Exemplos com código realizando a comunicação entre componentes.

- Formas de exercitar a utilização de @Output e @Input no Angular
- Analogia para aprender mais rápido 

# ---3º
Nesse exemplo abaixo, eu tenho a impressão que ele é um pouco padrão, ou seja, em todos os lugares são os
mesmos exemplo, quero algo mais diferenciado que consiga ainda transparecer de forma mais fácil a utilização do @input e do @output no angular: 
"Utilizando @Input e @Output para se comunicar
@Input
@Input é como um megafone que permite a um componente pai falar com seu filho. 
Você passa dados do pai para o filho através de propriedades. Por exemplo:

// Componente Pai
@Component({
  selector: 'app-parent',
  template: <app-child [childData]="parentData"></app-child>
})
export class ParentComponent {
  parentData = 'Olá do Pai!';
}


// Componente Filho
@Component({
  selector: 'app-child',
  template: <p>{{ childData }}</p>
})
export class ChildComponent {
  @Input() childData: string;
}


@Output
@Output é como um walkie-talkie que permite ao filho falar de volta com o pai. Você emite eventos do filho para o pai:

typescript
Copiar código
// Componente Filho
@Component({
  selector: 'app-child',
  template: <button (click)="sendMessage()">Clique-me</button>
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Mensagem do Filho');
  }
}

// Componente Pai
@Component({
  selector: 'app-parent',
  template: <app-child (messageEvent)="receiveMessage($event)"></app-child>
})
export class ParentComponent {
  receiveMessage(message: string) {
    console.log(message);
  }
}

# ---4º
 Pode me indicar ainda sobre esse Artigo sabemos que há diversas maneiras de se comunicar entre componentes através do Angular, mas pode me demonstrar quais os melhores cenários para usar o @output e @input?

# ---5º

Nesse bloco abaixdo, inves de ser um texto corrido pode definir os exercicios em forma de bullet point? 
"- Formas de exercitar a utilização de @Output e @Input no Angular
Para praticar, você pode criar pequenos projetos no Angular. 
Experimente fazer um formulário de login onde o componente de login envia os dados de usuário para um componente pai que valida esses dados. 
Outra ideia é um carrinho de compras, onde os itens adicionados se comunicam com um componente de resumo do pedido."

# ---6º
Pode me dar um resumo bem descritivo de no máximo 140 caractres 
do que esse artigo trata e seus principais pontos?