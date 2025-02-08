export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Services Website Template",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est vel lorem elementum gravida. Integer ultricies sollicitudin purus, ac suscipit velit luctus nec. Sed a orci fermentum, venenatis nisi eget, bibendum ligula. Vivamus vel consequat nisl, vel placerat ipsum. Cras tempus orci sed nisi tincidunt sollicitudin. Proin sollicitudin dolor metus, vel feugiat urna aliquam non. Suspendisse varius maximus justo non rutrum. Aliquam erat volutpat. Ut laoreet, augue at condimentum tincidunt, lorem ligula facilisis ante, vel tempor ligula lorem ac nulla. Nulla sollicitudin risus a purus vehicula, eu ultricies tortor viverra.`,
    imageLight: "/projectSection/project1.png",
    imageDark: "/projectSection/project1.png",
    reverse: false,
    link: "/",
  },
  {
    id: 2,
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi at metus efficitur condimentum. Nullam vitae dui eget arcu sodales fermentum. Nunc nec cursus risus, at lobortis nisi. Aliquam sollicitudin, enim a venenatis tristique, libero justo sodales risus, eu dictum neque sapien ut neque. In vitae tristique orci. Integer viverra velit ut urna rhoncus, et posuere lorem volutpat. Ut bibendum maximus neque at posuere. Integer egestas augue at efficitur faucibus. Pellentesque aliquet mauris orci, in dictum sem gravida sit amet.`,
    imageLight: "/projectSection/project2.png",
    imageDark: "/projectSection/project2.png",
    reverse: true,
    link: "/",
  },
  {
    id: 3,
    number: "03",
    title: "Blog Website Template",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed leo vel felis ullamcorper luctus. Ut maximus vestibulum libero, nec fermentum neque dignissim a. Suspendisse id nunc interdum, laoreet arcu sit amet, dapibus ligula. Phasellus at sapien ut lorem porttitor tristique. In ac malesuada urna. Nunc a suscipit nisl, ut pretium nisi. Aliquam ac sapien libero. Curabitur sollicitudin dui at lectus finibus, et vehicula magna sollicitudin. Donec sed leo ut orci tincidunt feugiat et at nisi. Ut sollicitudin fringilla volutpat.`,
    imageLight: "/projectSection/project3.png",
    imageDark: "/projectSection/project3.png",
    reverse: false,
    link: "/",
  },
  // Add more projects as needed
];
