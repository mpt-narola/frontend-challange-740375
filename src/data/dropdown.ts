export interface IDropDownItem {
  label: any;
  value: any;
}

export interface ISelectDropDownMenu {
  title: string;
  items: IDropDownItem[];
  id: number;
}

export const filterDropDownMenuItems: ISelectDropDownMenu[] = [
  {
    id: 1,
    title: "Job Templates",
    items: [
      {
        label: "Heavy Equipment Operator",
        value: 1,
      },
      {
        label: "Heavy Equipment Service Technician",
        value: 2,
      },
      {
        label: "Equipment Operator",
        value: 3,
      },
      {
        label: "Track Foreman",
        value: 4,
      },
    ],
  },

  {
    id: 2,
    title: "Subsidiary",
    items: [],
  },
  {
    id: 3,
    title: "Locations",
    items: [
      {
        label: "New York, NY",
        value: 1,
      },
      {
        label: "Los Angeles, CAY",
        value: 2,
      },
      {
        label: "San Francisco, CA",
        value: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Seniority",
    items: [
      {
        label: "Entry-Level Position",
        value: 1,
      },
      {
        label: "Individual Contributor",
        value: 2,
      },
      {
        label: "Manager",
        value: 3,
      },
      {
        label: "Office Staff",
        value: 4,
      },
      {
        label: "Leadership / Management",
        value: 5,
      },
    ],
  },
];
