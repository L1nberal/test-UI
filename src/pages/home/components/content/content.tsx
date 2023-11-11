import { Tabs } from './tabs';

import './content.scss';
import { SubList } from './sub-list';
import { StandardPicture } from './standard-picture';
import { WhyAwesome } from './why-awesome';
import { StylishAxureDesign } from './stylish-axure-design';
import { ContactUs } from './contact-us';

export const Content = () => {
  return (
    <div>
      <Tabs />
      <SubList />
      <StandardPicture />
      <WhyAwesome />
      <StylishAxureDesign />
      <ContactUs />
    </div>
  );
};
