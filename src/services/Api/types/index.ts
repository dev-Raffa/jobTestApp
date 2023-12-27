export interface courseAddArgs {
  title:string;
  description: string;
  imgUrl: string;
  category: string;
  highlight: boolean;
}


export interface ICourses extends courseAddArgs {
  id:number;
}


export type coursesFilters = keyof ICourses;
