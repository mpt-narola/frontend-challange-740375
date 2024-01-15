export interface IContent {
  id: number;
  contentDescription: string;
}

export interface IaccordionItems {
  id: number;
  title: string;
  contents: IContent[];
}

export const accordionItems: IaccordionItems[] = [
  {
    id: 1,
    title: "Drug Policies",
    contents: [],
  },
  {
    id: 2,
    title: "Employee Handbooks",
    contents: [
      {
        id: 1,
        contentDescription: "Alabama - Employee Handbook",
      },
      {
        id: 2,
        contentDescription: "California - Employee Handbook",
      },
      {
        id: 3,
        contentDescription: "Colorado - Employee Handbook",
      },
      {
        id: 4,
        contentDescription: "Florida - Employee Handbook",
      },
      {
        id: 5,
        contentDescription: "Illinois - Employee Handbook",
      },
      {
        id: 6,
        contentDescription: "Kansas - Employee Handbook",
      },
      {
        id: 7,
        contentDescription: "New York - Employee Handbook",
      },
      {
        id: 8,
        contentDescription: "Utah - Employee Handbook",
      },
    ],
  },
  {
    id: 3,
    title: "Equipment Selection",
    contents: [],
  },
  {
    id: 4,
    title: "Non-Compete Agreements",
    contents: [
      {
        id: 1,
        contentDescription: "Alabama - Non-Compete Agreement",
      },
      {
        id: 2,
        contentDescription: "California - Non-Compete Agreement",
      },
      {
        id: 3,
        contentDescription: "Colorado - Non-Compete Agreement",
      },
      {
        id: 4,
        contentDescription: "Florida - Non-Compete Agreement",
      },
      {
        id: 5,
        contentDescription: "Illinois - Non-Compete Agreement arrow-right",
      },
      {
        id: 6,
        contentDescription: "Kansas - Non-Compete Agreement",
      },
      {
        id: 7,
        contentDescription: "New York - Non-Compete Agreement",
      },
      {
        id: 8,
        contentDescription: "Utah - Non-Compete Agreement",
      },
    ],
  },
  {
    id: 5,
    title: "Payroll Handbook",
    contents: [],
  },
  {
    id: 6,
    title: "PTO Policy",
    contents: [],
  },
  {
    id: 7,
    title: "Safety Manuals",
    contents: [],
  },
  {
    id: 8,
    title: "Sexual Harassment",
    contents: [],
  },
];
