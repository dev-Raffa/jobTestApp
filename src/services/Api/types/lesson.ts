export type LessonsType = 'text' | 'vídeo' | 'live';

export interface lessonAddArgs {
    title: string;
    description: string;
    type: string;
    url: string;
    professor: string;
    course: number;
}
export interface ILessons extends lessonAddArgs {
  id: number;
}


