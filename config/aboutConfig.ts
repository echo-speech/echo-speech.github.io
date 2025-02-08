export interface AboutContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/about.svg", // For girl change to /aboutSection/girl-about.svg
  imageAlt: "About Me Illustration",
  paragraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, sapien vel tincidunt facilisis, odio tortor sollicitudin lectus, nec condimentum velit leo vel ipsum. Integer a metus in ante pharetra placerat. Aliquam erat volutpat. Mauris gravida sollicitudin malesuada. Nulla euismod tristique tincidunt. Nunc a sem sed lorem vehicula sollicitudin. Phasellus vitae orci dolor. Vivamus ornare, felis nec facilisis iaculis, ligula eros consequat sapien, at ultricies urna lorem et nunc.`,

    `Duis posuere tortor ut felis facilisis, sed aliquet lectus cursus. Proin id sem ac libero suscipit bibendum. Sed sit amet neque vel justo gravida pretium sit amet nec purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet sapien id metus vehicula tincidunt. Integer tempus tincidunt dui, a tincidunt purus cursus at. Integer ultricies ex vitae erat ullamcorper, nec feugiat libero convallis. Nam in erat dolor. Aliquam imperdiet felis dui, ac aliquam augue blandit vitae.`,

    `Suspendisse potenti. Integer ut libero risus. Donec varius ex eget purus tincidunt placerat. Nulla facilisi. Morbi sodales, libero at sodales placerat, lectus felis aliquam metus, ut elementum ipsum sem eget risus. Phasellus non eros nec nulla dignissim posuere. Donec aliquam, tortor id luctus mollis, ipsum mi auctor orci, vel scelerisque leo nunc eu arcu. Nullam vel feugiat lectus. Etiam ut ligula elit.`,
  ],
};
