import { ICourses, courseAddArgs } from "../../Api/types";

const mockCourses:ICourses[] = [
  {
    id: 1,
    title: 'Curso de algoritmos',
    description: "Explore a lógica por trás dos códigos na aula 'Operadores Lógicos e Racionais'. Descubra como os operadores moldam a execução do seu algoritmo, proporcionando controle e tomada de decisões inteligentes. Aprenda a integrar operadores lógicos e racionais para criar algoritmos robustos e eficientes. Prepare-se para aprimorar suas habilidades de programação e elevar seus projetos ao próximo nível com este mergulho profundo na lógica algorítmica.",
    category:'TI',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoUlyBPSZAIpcFZ6vYMUSL51VShTNtFoB1Q&usqp=CAU',
    highlight: false
  },
  {
    id: 2,
    title: 'Python do zero ao avançado',
    description: 'inicie a sua jornada em uma das linguagens que mais crescem no mundo',
    category:'TI',
    imgUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlight: true
  },
  {
    id: 3,
    title: 'UX para desenvolvedores',
    description: 'Aprenda a criar designs incríveis para os seus projetos',
    category:'TI',
    imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*dp78y8PfKIiGdj-p7ldkEQ.png',
    highlight: true
  },
  {
    id: 4,
    title: 'Inicie na carreira de SEO',
    description: '',
    category:'Digital Marketing',
    imgUrl: 'https://kinsta.com/pt/wp-content/uploads/sites/3/2022/03/seo-tips.jpeg',
    highlight: false
  },
  {
    id: 5,
    title: 'Aprenda copyriting',
    description: 'Desenvolva a incrível habilidade escrever textos persuasivos.',
    category:'Digital Marketing',
    imgUrl: 'https://lawvision.com.br/wp-content/uploads/2022/03/jovem-concentrada-trabalhando-com-o-laptop-em-casa_171337-4898.jpg',
    highlight: true
  }
]

export class MockRouterIcourses {
  private repository: ICourses[];
  
  constructor(){
    this.repository = mockCourses;
  }

  getAll() {
    return this.repository;
  }

  getOne(id:number){
    return this.repository.filter((course)=> course.id === id)
  }

  add(args: courseAddArgs){
    const newId = this.repository.length
    const course: ICourses = {
      ...args,
      id: newId
    }

    this.repository.push(course)

    return this.repository
  }

  update(args: ICourses){
    const indexItem = this.repository.findIndex((course)=>course.id === args.id)
    Object.assign(this.repository[indexItem], args)
    
    return this.repository
  }

  delete(id: number){
    const itemIndex  = this.repository.findIndex((course)=>course.id === id)

    this.repository.splice(itemIndex,1)

    return this.repository
    
  }
}