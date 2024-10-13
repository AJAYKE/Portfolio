export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `I built`,
    title: 'WebApp Deployer',
    image: {
      src: '/static/images/webapp-deployer.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'DNS Resolver',
    image: {
      src: '/static/images/dns-resolver.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: 'I created',
    title: 'Documentation Generator',
    image: {
      src: '/static/images/documentation-generator.webp',
      width: 600,
      height: 554,
    },
  },
];
