
const MenuItem = ({
  title,
  subTitle,
  option = [],
  children
}) => {
  return (
    <div className='menu-item-container flex mx-4'>
      <a href="javascript:void(0)" className='flex'>
        {
          children &&
          <div className='logo mr-1'>
            {children}
          </div>
        }
        <div className='title flex flex-col'>
          {subTitle &&
            <span className='text-gray-400 text-xs'>{subTitle}</span>
          }
          <span><h3 className='font-bold text-sm'>{title}</h3></span>
        </div>
      </a>
    </div>
  );
};

export default MenuItem;
