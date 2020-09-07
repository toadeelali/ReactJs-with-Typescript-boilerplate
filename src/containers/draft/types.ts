export interface IDraftCard {
  cardTitle: string;
  cardSkill: string;
  cardAuthor: string;
  cardDate: string;
  cardSubject: string;
  cardGrade: string;
  cardIcon: string;
  children?: React.ReactNode;
}
