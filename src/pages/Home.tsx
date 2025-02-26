import { IconButton } from '@chakra-ui/react';
import { RiHomeLine } from 'react-icons/ri';

const Home = () => {
  return (
    <IconButton variant="ghost" aria-label="Home"  size="lg">
      <RiHomeLine />
    </IconButton>
  );
};

export default Home;
