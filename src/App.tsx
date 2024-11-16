import { Button, HStack } from '@chakra-ui/react';
import { ColorModeIcon } from './components/ui/color-mode';

function App() {
  return (
    <HStack padding="5">
      <Button colorPalette="teal" size="md">
        Click
      </Button>
      <ColorModeIcon />
    </HStack>
  );
}

export default App;
