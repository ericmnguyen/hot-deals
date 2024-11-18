import MenuItem from '../components/MenuItem';
import { StarIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className='header flex content-center items-center w-full h-24 justify-between border-b-2 bg-white bg-opacity-80'>
      <div className='logo-container'>
        <a href="/">
          <img className='h-36' src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="search-bar-container flex justify-center">
        <div className="header-search mx-10 w-[600px] max-[1399px]:w-[500px] max-[1199px]:w-[400px] max-[991px]:w-full max-[991px]:min-w-[300px] max-[767px]:py-[15px] max-[480px]:min-w-[auto]">
          <form className="bb-btn-group-form flex relative max-[991px]:ml-[20px] max-[767px]:m-[0]" action="#">
            <div className="inner-select border-r-[1px] border-solid border-[#eee] h-full px-[20px] flex items-center absolute top-[0] left-[0] max-[991px]:hidden">
              <div className="custom-select w-[100px] capitalize text-[#777] flex items-center justify-between transition-all duration-[0.2s] ease-in text-[14px] relative">
                <div className="select">
                  <select className="hide-select">
                    <option value="option1">Vegetables</option>
                    <option value="option2">Cold Drinks</option>
                    <option value="option3">Fruits</option>
                    <option value="option4">Bakery</option>
                  </select>
                </div>
              </div>
            </div>
            <input className="form-control bb-search-bar bg-[#fff] block w-full min-h-[45px] h-[48px] py-[10px] pr-[10px] pl-[160px] max-[991px]:min-h-[40px] max-[991px]:h-[40px] max-[991px]:p-[10px] text-[14px] font-normal leading-[1] text-[#777] rounded-[10px] border-[1px] border-solid border-[#eee] tracking-[0.5px]" placeholder="Search products..." type="text" />
            <button className="submit absolute top-[0] left-[auto] right-[0] flex items-center justify-center w-[45px] h-full bg-transparent text-[#555] text-[16px] rounded-[0] outline-[0] border-[0] padding-[0]" type="submit">
              <i className="ri-search-line text-[18px] leading-[12px] text-[#555]"></i>
            </button>
          </form>
        </div>
      </div>
      <div className='menu-item-container flex flex-row'>
        <MenuItem title='Login' subTitle='Account'>
          <UserIcon className="size-8 text-pink-600" />
        </MenuItem>
        <MenuItem title='Wishlist' subTitle='3 Items' >
          <StarIcon className="size-8 text-pink-600" />
        </MenuItem>
        <MenuItem title='Cart' subTitle='4 Items' >
          <ShoppingCartIcon className="size-8 text-pink-600" />
        </MenuItem>
      </div>
    </div>
  );
};

export default Header;
