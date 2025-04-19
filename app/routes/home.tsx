import type { Route } from './+types/home';
import { Main } from '../main/main';

export function meta({}: Route.MetaArgs) {
  return [
    {
      name: 'keywords',
      content:
        'alexisnotalexa, alexis, okamura, javascript, design, honolulu, new york, seattle, brooklyn',
    },
    { name: 'title', content: 'Alexis Okamura | Software Engineer' },
    {
      name: 'description',
      content:
        'Brooklyn-based software engineer blending a lifelong passion for art and design with precision-engineered, user-focused digital experiences',
    },
    { name: 'twitter:site', content: '@alexisnotalexa' },
    { name: 'twitter:creator', content: '@alexisnotalexa' },
    { name: 'twitter:title', content: 'Alexis Okamura | Software Engineer' },
    {
      name: 'twitter:description',
      content:
        'Brooklyn-based software engineer blending a lifelong passion for art and design with precision-engineered, user-focused digital experiences',
    },
  ];
}

export default function Home() {
  return <Main />;
}
