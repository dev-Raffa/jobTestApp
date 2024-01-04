export interface professorAddArgs {
    name: string;
    age: string;
    phoneNumber: string;
    email: string;
    subjects: string;
  }
  
  export interface IProfessors extends professorAddArgs {
    id: number;
  }
  
  export type filterProfessors = keyof IProfessors;
  