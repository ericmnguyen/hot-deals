import MenuItem from '../../components/MenuItem';
import { Squares2X2Icon } from '@heroicons/react/24/solid';


const SubHeader = () => {
  return (
    <div className='sub-header flex content-center items-center w-full h-16 justify-between border-b-2 bg-white bg-opacity-80 rounded-b-2xl'>

      <div className='menu-item-container flex flex-row items-center'>
        <button><Squares2X2Icon className='size-6' /></button>
        <MenuItem title='Home' />
        <MenuItem title='Categories' />
        <MenuItem title='Products' />
        <MenuItem title='Pages' />
        <MenuItem title='Offers' />
      </div>
    </div>
  );
};

export default SubHeader;
