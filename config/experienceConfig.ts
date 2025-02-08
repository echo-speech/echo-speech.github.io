export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/citi.svg",
    companyName: "Citibank",
    role: "Software Developer",
    duration: "March 2022 – Present",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum, urna ut lobortis dapibus, ligula enim aliquam nunc, sit amet tempor ligula erat nec orci. Curabitur consectetur velit ac dui egestas, ut pharetra nunc facilisis. Donec auctor odio eget arcu feugiat, nec feugiat sapien cursus. Suspendisse sit amet magna non urna dapibus ullamcorper ut vitae est. Nulla facilisi. Nulla malesuada odio ut nisl vehicula, a ullamcorper risus blandit. Integer malesuada nunc vitae felis cursus, at pretium urna pretium. Nam ac rhoncus lorem. Fusce condimentum mollis purus, at dapibus lectus varius id.`,
  },
  {
    id: 2,
    companyLogo: "/experienceSection/citi.svg",
    companyName: "Citibank",
    role: "Software Developer Intern",
    duration: "June 2021 – August 2021",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac augue quis est varius volutpat. Curabitur malesuada sit amet orci vitae facilisis. Nulla et dolor ac ligula ullamcorper vestibulum. Quisque sagittis orci eget justo facilisis, sit amet tincidunt tortor malesuada. Aenean sit amet maximus purus. Duis sit amet neque sapien. Integer gravida nisl at ex pharetra, et tincidunt purus rutrum. Nulla aliquet diam sit amet fermentum tincidunt. Nam ullamcorper, sem nec tempus placerat, neque libero bibendum orci, a convallis justo eros vel metus.`,
  },
  {
    id: 3,
    companyLogo: "/experienceSection/fpl.svg",
    companyName: "Florida Power & Light",
    role: "Software Developer Intern",
    duration: "June 2020 – August 2020",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod elit ut nisl tincidunt, a scelerisque libero interdum. Nam sit amet mollis neque. Nulla facilisi. Curabitur fringilla sapien quis vestibulum convallis. Sed sit amet massa orci. Vivamus consequat, urna eu tincidunt aliquet, ipsum erat lobortis tortor, at varius ante sapien et nunc. Quisque auctor sollicitudin libero, et eleifend ante ultricies et. Vivamus sit amet fermentum felis. Proin malesuada purus non orci egestas, eget consequat elit aliquet.`,
  },
  // Add more experiences as needed
];
