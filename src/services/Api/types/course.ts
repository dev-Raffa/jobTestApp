import { ILessons } from "./lesson";

export interface courseAddArgs {
  title:string;
  description: string;
  imageUrl: string;
  category: string;
  highlight: boolean;
  classes?: ILessons[]
}


export interface ICourses extends courseAddArgs {
  id:number;
}


export type coursesFilters = keyof ICourses;
