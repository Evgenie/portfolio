import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      marginLeft: '4rem',
      marginRight: '1rem',
      transition: 'all 1s ease',
      '&:hover': {
         transform: 'scale(3)',
      }
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;