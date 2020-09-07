export interface ICreateContentCard {
  title: string;
  url: string;
  icon: string;
  color?: string;
}

export const BasicCardsData: ICreateContentCard[] = [
  {
    title: 'MCQs',
    url: 'google.com',
    icon: 'i-list-check',
    color: 'red',
  },
  {
    title: 'Video',
    url: 'google.com',
    icon: 'i-camera-video',
    color: 'blue',
  },
  {
    title: 'Document',
    url: 'google.com',
    icon: 'i-file-earmark-text',
    color: 'green',
  },
  {
    title: 'Link',
    url: 'google.com',
    icon: 'i-link-45deg',
    color: 'teal',
  },
  {
    title: 'Article Questions',
    url: 'google.com',
    icon: 'i-text-paragraph',
    color: 'pink',
  },

  {
    title: 'Assignment',
    url: 'google.com',
    icon: 'i-receipt-cutoff',
    color: 'orange',
  },
  {
    title: 'Assessment',
    url: 'google.com',
    icon: 'i-clipboard-check',
    color: 'indigo',
  },
];
