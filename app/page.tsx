'use client'
import { CgMenuGridR } from 'react-icons/cg'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { nav, rightNav, leftNav1, leftNav2, leftNav3, filter, type, time } from '@/utils/constants'
import {
  Search,
  DownLoad,
  Avatar,
  Alert,
  Down,
  Language,
  Divider,
  Night,
  Past30Days,
  Chatsupport,
  Merchant,
  MerchantPro,
  MerchantPro1,
  Binance2023,
  Date,
  Arrow,
  Four,
  Six,
  Nine,
  Eleven,
  TwentyThree,
  Withdraw,
  D1,
  T1,
  Check,
  Past7,
  Past30,
  Past90,
  Range,
  Past30Select,
  Cross,
  Subtitle,
  Date20230523,
  Date20230823,
  Date202305,
  May2,
  May3,
  May202,
  Date20220523,
  Week,
  R1,
  One,
  OneHover
} from '@/public'
import ScrollBar from '@/components/ScrollBar'
import Loading from '@/components/Loading'
import { useState } from 'react'
import { aboutUs, products, service, support, learn, community } from '@/utils/constants'
import { clear } from 'console'
export default function Home() {
  const [empty, isEmpty] = useState(true)
  const [loading, setLoading] = useState(false)
  const [typeClick, setTypeClick] = useState(false)
  const [timeClick, setTimeClick] = useState(false)
  const handleTypeClick = () => {
    setTypeClick(!typeClick)
  }
  const handleTimeClick = () => {
    setTimeClick(!timeClick)
  }
  const [selectType, setSelectType] = useState<string>('deposit')
  const [selectTime, setSelectTime] = useState<string>('past30days')
  const handleSelectType = (type: string) => {
    setLoading(true)
    setSelectType(type)
    setTypeClick(false)
    const timer = setTimeout(() => {
      setLoading(false)
      return () => clearTimeout(timer)
    }, 2000)
  }
  const handleSelectTime = (time: string) => {
    setSelectTime(time)
    setTimeClick(false)
  }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHoveredEnd, setIsHoveredEnd] = useState(false);

  const handleMouseEnterEnd = () => {
    setIsHoveredEnd(true);
  };

  const handleMouseLeaveEnd = () => {
    setIsHoveredEnd(false);
  };
  const [clickStartTime, setClickStartTime] = useState(false)
  const [clickEndTime, setClickEndTime] = useState(false)
  const [year, setYear] = useState<string>('3')
  const [hoverOne, setHoverOne] = useState(false)
  const [selectOne, setSelectOne] = useState(false)
  return (
    <main className="w-full bg-[#ffffff] relative">
      {selectTime === 'customized' && <div className='absolute w-full h-full modal-mask'>
        <div className='w-[484px] h-[280px] bg-white modal-container'>
          <div className='modal'>
            <div className='modal-title'>
              <div className='title'>Select a Time Range</div>
              <img src={Cross.src} alt="" className='mb-[2px] mr-[1px]' />
            </div>
            <div className='modal-subtitle'>
              <img src={Subtitle.src} alt="" className='mt-[3px]' />
            </div>
            <div className='modal-dateselector'>
              <div className='wrapper'>
                <div className='start'>
                  <div className='start-title'>Start time</div>
                  {clickStartTime && <div className='absolute time-picker-start bg-white w-[280px] h-[315px] z-50 left-[25px] top-[171px] px-[28px] py-[22px]'>
                      <div className='w-full flex flex-row mb-[16px] mt-[1px]'>
                        {/* left */}
                        <div className='flex flex-row'>
                          <svg onClick={(e)=>{e.stopPropagation();setYear('2')}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i text-[#707a8a] hover:text-[#f0b90b] cursor-pointer"><path d="M10 3.05L5.125 8 10 12.95 8.95 14l-6-6 6-6L10 3.05z" fill="currentColor"></path><path d="M15 3.05L10.125 8 15 12.95 13.95 14l-6-6 6-6L15 3.05z" fill="currentColor"></path></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i text-[#707a8a] hover:text-[#f0b90b] cursor-pointer"><path d="M6.175 8l4.875-4.95L10 2 4 8l6 6 1.05-1.05L6.175 8z" fill="currentColor"></path></svg>
                        </div>
                        {/* time */}
                        <div className='flex flex-row mx-auto mt-[3px]'>
                          <img src={May202.src} alt="" className='h-[16px]' />
                          {year === '2' ? <img src={May2.src} alt="" className='h-[12px] w-[8px] ' /> : <img src={May3.src} alt="" className='h-[13px] w-[8px]' />}
                        </div>
                        {/* right */}
                        <div className='flex flex-row'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i text-[#707a8a] hover:text-[#f0b90b] cursor-pointer"><path d="M8.825 8L3.95 12.95 5 14l6-6-6-6-1.05 1.05L8.825 8z" fill="currentColor"></path></svg>
                          <svg onClick={(e)=>{e.stopPropagation();setYear('3')}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i text-[#707a8a] hover:text-[#f0b90b] cursor-pointer"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.05L5.875 8 1 12.95 2.05 14l6-6-6-6L1 3.05zm5 0L10.875 8 6 12.95 7.05 14l6-6-6-6L6 3.05z" fill="currentColor"></path></svg>
                        </div>
                      </div>
                      {year === '2' ? <div className=''>
                      <img src={Week.src} alt="" className='mx-auto pt-[10px] ml-[8px] cursor-text' />
                      <div className='flex flex-row mt-[11px]'>
                        <div className='w-[32px] h-[32px] flex justify-center items-center cursor-pointer rounded-[4px] hover:bg-[#fef6d8]' onMouseEnter={()=>setHoverOne(true)} onMouseLeave={()=>setHoverOne(false)}>
                          {hoverOne ? <img src={OneHover.src} alt="" className="h-[12.2px]"/>:<img src={One.src} alt="" />}
                        </div>
                        <div className='h-[32px] flex justify-center items-center ml-[12px] cursor-pointer'>
                          <img src={R1.src} alt="" className='' />
                        </div>
                      </div>
                      <img src={Date20220523.src} alt="" className='mx-auto pt-[12px]' />
                    </div> : <img src={Date202305.src} alt="" className='mx-auto pt-[10px]' />}
                  </div>}
                  <div
                    className={`start-picker border-[1px] ${clickStartTime ? 'border-[#f0b90b]' : 'border-[#eaecef]'} relative`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setClickStartTime(!clickStartTime)}
                  >
                    <div className='w-full h-full flex flex-row items-center pl-[8px] relative'>
                      <img src={Date20230523.src} alt="" className='h-[13px] mb-[2px]' />
                      <span className={`${isHovered ? 'opacity-1' : 'opacity-0'} transition-all duration-500 ease-in-out w-[16px] text-base text-[#707a8a] absolute right-[8px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i"><rect width="16" height="16" rx="8" fill="currentColor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.117l-.883.878-3.122-3.117L4.883 12l-.878-.883L7.117 8 4 4.883l.883-.878 3.112 3.117L11.117 4l.873.883L8.878 8 12 11.117z" fill="#FEFEFE"></path></svg>
                      </span>
                      <span className={`${isHovered ? 'opacity-0' : 'opacity-1'} transition-all duration-500 ease-in-out w-[16px] text-base text-[#707a8a] absolute right-[8px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-ew2l8i"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H7v2H4v3.5h16V6h-3V4h-3v2h-4V4zm10 8H4v7h16v-7z" fill="currentColor"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='to'>to</div>
                <div className='end'>
                  <div className='end-title'>End time</div>
                  <div
                    className={`end-picker border-[1px] ${clickEndTime ? 'border-[#f0b90b]' : 'border-[#eaecef]'} relative`}
                    onMouseEnter={handleMouseEnterEnd}
                    onMouseLeave={handleMouseLeaveEnd}
                    onClick={() => setClickEndTime(!clickEndTime)}
                  >
                    <div className='w-full h-full  flex flex-row items-center pl-[8px] relative'>
                      <img src={Date20230823.src} alt="" className='h-[13px] mb-[2px]' />
                      <span className={`${isHoveredEnd ? 'opacity-1' : 'opacity-0'} transition-all duration-500 ease-in-out w-[16px] text-base text-[#707a8a] absolute right-[8px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="css-ew2l8i"><rect width="16" height="16" rx="8" fill="currentColor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.117l-.883.878-3.122-3.117L4.883 12l-.878-.883L7.117 8 4 4.883l.883-.878 3.112 3.117L11.117 4l.873.883L8.878 8 12 11.117z" fill="#FEFEFE"></path></svg>
                      </span>
                      <span className={`${isHoveredEnd ? 'opacity-0' : 'opacity-1'} transition-all duration-500 ease-in-out w-[16px] text-base text-[#707a8a] absolute right-[8px]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-ew2l8i"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H7v2H4v3.5h16V6h-3V4h-3v2h-4V4zm10 8H4v7h16v-7z" fill="currentColor"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='modal-button'>Continue</button>
          </div>
        </div>
      </div>}
      <header className="w-full px-[16px] h-[64px] flex items-center justify-between">
        <div className='flex flex-row items-center h-full'>
          <a className="header-icon w-[120px] h-[24px] block ml-[8px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="w-full h-full">
              <path fill="#f0b90b" d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935">
              </path>
            </svg>
          </a>
          <CgMenuGridR className="w-[24px] h-[24px] ml-[16px] mb-[6px]" />
          <BsFillCaretDownFill className="w-[10px] h-[10px] text-disabled ml-[4px]" />
          <nav className="flex flex-row ml-[20px] mb-[1px]">
            {nav.map((item, index) => (
              <a className="flex flex-row items-center mr-[20px]" key={index}>
                <span className={`text-[#1E2329] text-[14px] font-[400] mt-[2px]`}>{item.title}</span>
                {item.title === 'Buy Crypto' ? <div className="css-xixtsp"><div data-bn-type="text" className="css-17hpqak">EUR</div></div> : ''}
                <item.icon className="w-[10px] h-[10px] text-disabled ml-[4px]" />
              </a>
            ))}
          </nav >
        </div>
        <div className='flex flex-row items-center'>
          <img src={Search.src} alt="" className='w-[21px] h-[19px] mr-[17px] mb-[1px]' />
          <button className='px-[12px] py-[6px] text-sm bg-[#FCD535] text-[#181A20] leading-[20px] rounded-[4px] flex flex-row'>
            <img src={DownLoad.src} alt="" className='mt-[2px] mr-[2px]' />
            Deposit
          </button>
          <nav className="flex flex-row ml-[16px] mb-[1px]">
            {rightNav.map((item, index) => (
              <a className="flex flex-row items-center mr-[20px]" key={index}>
                <span className={`text-[#1E2329] text-[14px] font-[400] mt-[2px]`}>{item.title}</span>
                {item.title === 'Buy Crypto' ? <div className="css-xixtsp" key='crypto-key'><div data-bn-type="text" className="css-17hpqak">EUR</div></div> : ''}
                <item.icon className="w-[10px] h-[10px] text-disabled ml-[4px]" />
              </a>
            ))}
          </nav >
          <img src={Avatar.src} alt="" className='ml-[3px] mb-[4px]' />
          <img src={Alert.src} alt="" className='ml-[20px] mb-[12px]' />
          <img src={Down.src} alt="" className='ml-[7px] mb-[1px]' />
          <img src={Language.src} alt="" className='ml-[21px] mb-[2px]' />
          <img src={Divider.src} alt="" className='ml-[17px] -mb-[0px] h-[14px]' />
          <img src={Night.src} alt="" className='ml-[8px] -mb-[0px] mr-[18px]' />
        </div>
      </header>
      <ScrollBar />
      <div className='h-[658px] w-full flex flex-row'>
        <div className='w-[240px] h-[658px] border-r-[1px] border-[#eaecef] mt-[0px] text-[#1E2924] text-sm'>
          {/* nav1 */}
          {leftNav1.map((item, index) => (
            <div className="flex flex-row items-center ml-[22px] h-[48px]" key={index}>
              <div className='w-[30px]'>
                <img src={item.icon.src} alt="" className={`
                w-auto h-[20px] mr-[8px] ${item.title === 'Margin' ? 'mb-[2px] ml-[1px]'
                    : item.title === 'Futures' ? 'mb-[2px] ml-[1px]'
                      : item.title === 'Options' ? 'mb-[2px] ml-[1px]'
                        : item.title === 'Earn' ? 'h-[27px] mb-[2px] -ml-[1px]'
                          : item.title === 'Funding' ? 'h-[22px] -ml-[1px]' : ''
                  }
                `} />
              </div>
              <span>{item.title}</span>
            </div>
          ))}
          <div className='mx-[16px] my-[8px] bg-[#eaecef] h-[1px]'></div>
          {/* nav2 */}
          {leftNav2.map((item, index) => (
            <div className="flex flex-row items-center ml-[22px] h-[48px]" key={index}>
              <div className='w-[30px]'>
                <img src={item.icon.src} alt="" className={`
                w-auto h-[20px] mr-[8px] ${item.title === 'Margin' ? 'mb-[2px] ml-[1px]'
                    : item.title === 'Futures' ? 'mb-[2px] ml-[1px]'
                      : item.title === 'Options' ? 'mb-[2px] ml-[1px]'
                        : item.title === 'Earn' ? 'h-[27px] mb-[2px] -ml-[1px]'
                          : item.title === 'Funding' ? 'h-[22px] -ml-[1px]' : ''
                  }
                `} />
              </div>
              <span>{item.title}</span>
            </div>
          ))}
          <div className='mx-[16px] my-[8px] bg-[#eaecef] h-[1px]'></div>
          {/* nav3 */}
          {leftNav3.map((item, index) => (
            <div className={`flex flex-row items-center pl-[22px] h-[48px] ${item.title === 'Transaction History' && 'bg-[#f5f5f5] border-l-[4px] border-[#f0b90b]'}`} key={index}>
              <div className='w-[30px]'>
                <img src={item.icon.src} alt="" className={`
                w-auto h-[20px] mr-[8px] ${item.title === 'Margin' ? 'mb-[2px] ml-[1px]'
                    : item.title === 'Transaction History' ? 'mb-[2px] -ml-[4px]'
                      : item.title === 'Account Statement' ? 'mb-[2px] ml-[0px]'
                        : item.title === 'Verification' ? 'h-[21px] mb-[2px] ml-[2px]'
                          : item.title === 'Funding' ? 'h-[22px] -ml-[1px]' : ''
                  }
                `} />
              </div>
              <span className={`${item.title === 'Transaction History' && 'text-[#1E2326] font-medium -ml-[4px]'}`}>{item.title}</span>
            </div>
          ))}
        </div>
        {/* <div className='w-[1570px] h-[658px] p-[32px]'> */}
        <div className='w-[1670px] h-[658px] p-[32px]'>
          <div className='w-full h-full flex flex-col'>
            <div className='mt-[8px] mb-[24px] flex flex-row justify-between'>
              <h1 className='text-[#1E2329] text-[32px] leading-[40px] font-[600]'>Transaction History</h1>
              <div className='flex flex-row items-center'>
                <div className="css-1g353mx mt-[5px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg></div>
                <span className='text-[#707A8A] ml-[4px] text-sm'>Export Transaction Records</span>
              </div>
            </div>
            {/* filter */}
            <nav className='w-full flex flex-row mb-[24px]'>
              {filter.map((item, index) => (
                <a className={`flex flex-row items-center text-sm px-[16px] py-[8px] mr-[24px] cursor-pointer ${item === 'Crypto' ? 'bg-[#f5F5F5] text-[#1E2329] rounded-[4px]' : 'text-[#707A8A]'}`} key={index}>
                  {item}
                </a>
              ))}
            </nav>
            {/* click filter */}
            <div className='w-full flex flex-row justify-between h-[96px]'>
              <div className='flex flex-row'>
                {/* Type */}
                <div className='flex flex-col mb-[16px] mr-[16px] relative'>
                  <div className={`w-[150px] h-[40px] mt-[32px] border-[1px] hover:border-[#f0b90b] cursor-pointer rounded-[4px] text-[#1e2329] text-sm flex items-center pl-[11px] relative border-[#eaecef]`} onClick={handleTypeClick}>
                    {selectType === 'deposit' ? 'Deposit' : 'Withdraw'}
                    <span className='text-[#474D57] text-sm leading-[32px] absolute -top-[32px] left-0'>Type</span>
                    <BsFillCaretDownFill className={`w-[9px] h-[10px] text-disabled absolute right-[12px] mb-[0px] ${typeClick ? 'rotate-180' : ''}`} />
                  </div>
                  {typeClick && <div className='type-menu'>
                    <div className='w-full h-full overflow-hidden relative type-menu-list-container pt-[4px]'>
                      {/* scroll bar */}
                      <div className='h-[205px] w-[6px] rounded-full bg-[#B7BDC6] absolute top-[2px] right-[2px]'></div>
                      {/* list */}
                      {type.map((item, index) => (
                        <div className={` cursor-pointer flex flex-row justify-between items-center py-[10px] px-[16px] leading-[20px] text-sm hover:bg-[#f5f5f5] mr-[10px] ${item.value === selectType ? 'text-[#c99400]' : 'text-[#1E2329]'}`} key={index} onClick={() => handleSelectType(item.value)}>
                          {item.title}
                          {item.value === selectType && <img src={Check.src} alt="" className='w-[20px] h-[17px] mr-[1px] mb-[1px]' />}
                        </div>
                      ))}
                    </div>
                  </div>}
                </div>
                {/* Time */}
                <div className='flex flex-col mb-[16px] mr-[16px] relative'>
                  <div className={`${selectTime === 'customized' ? 'w-[203px]' : 'w-[170px]'} h-[40px] mt-[32px] border-[1px] border-[#eaecef] hover:border-[#f0b90b] cursor-pointer rounded-[4px] text-[#1e2329] text-sm flex items-center pl-[11px] relative`} onClick={handleTimeClick}>
                    {selectTime === 'past7days' ? <img src={Past7.src} alt="" className='mt-[2px] ml-[1px]' /> :
                      selectTime === 'past30days' ? <img src={Past30Days.src} alt="" className='ml-[1px]' /> :
                        selectTime === 'past90days' ? <img src={Past90.src} alt="" className='mt-[2px] ml-[1px]' />
                          : <img src={Range.src} alt="" className='mb-[3px]' />}
                    <span className='text-[#474D57] text-sm leading-[32px] absolute -top-[32px] left-0'>Time</span>
                    <BsFillCaretDownFill className={`w-[9px] h-[10px] text-disabled absolute right-[12px] mb-[0px] ${timeClick ? 'rotate-180' : ''}`} />
                  </div>
                  {timeClick && <div className='time-menu'>
                    <div className='w-full h-full overflow-hidden relative type-menu-list-container pt-[4px]'>
                      {/* list */}
                      {time.map((item, index) => (
                        <div className={`cursor-pointer flex flex-row justify-between items-center py-[10px] px-[16px] leading-[20px] text-sm hover:bg-[#f5f5f5] mr-[10px] ${item.value === selectTime ? 'text-[#c99400]' : 'text-[#1E2329]'}`} key={index} onClick={() => handleSelectTime(item.value)}>
                          {item.value === 'past7days' ? <img src={Past7.src} alt="" className='mt-[3px] ml-[1px]' /> :
                            item.value === 'past30days' ? selectTime === 'past30days' ? <img src={Past30Select.src} alt="" className='mt-[3px]' /> : <img src={Past30.src} alt="" className='mt-[3px]' /> :
                              item.value === 'past90days' ? <img src={Past90.src} alt="" className='mt-[4px] ml-[1px]' /> :
                                item.title
                          }
                          {item.value === selectTime && <img src={Check.src} alt="" className='w-[20px] h-[17px] mr-[1px] mb-[1px]' />}
                        </div>
                      ))}
                    </div>
                  </div>}
                </div>
                {/* Asset */}
                <div className='flex flex-col mb-[16px] mr-[16px]'>
                  <div className='w-[180px] h-[40px] mt-[32px] border-[1px] border-[#eaecef] rounded-[4px] text-[#1e2329] text-sm flex items-center pl-[11px] relative'>All
                    <span className='text-[#474D57] text-sm leading-[32px] absolute -top-[32px] left-0'>Asset</span>
                    <BsFillCaretDownFill className="w-[9px] h-[10px] text-disabled absolute right-[12px] mb-[0px]" />
                  </div>
                </div>
                {/* Status */}
                <div className='flex flex-col mb-[16px] mr-[16px]'>
                  <div className='w-[104px] h-[40px] mt-[32px] border-[1px] border-[#eaecef] rounded-[4px] text-[#1e2329] text-sm flex items-center pl-[11px] relative'>All
                    <span className='text-[#474D57] text-sm leading-[32px] absolute -top-[32px] left-0'>Status</span>
                    <BsFillCaretDownFill className="w-[9px] h-[10px] text-disabled absolute right-[12px] mb-[0px]" />
                  </div>
                </div>
                {/* TxID */}
                <div className='flex flex-col mb-[16px] mr-[16px]'>
                  <div className='w-[214px] h-[40px] mt-[32px] border-[1px] border-[#eaecef] rounded-[4px] text-[#adb9c9] text-sm flex items-center pl-[12px] relative'>Enter TxID
                    <span className='text-[#474D57] text-sm leading-[32px] absolute -top-[32px] left-0'>TxID</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center mt-[10px]'>
                <a href="" className='text-[#C99400] text-sm mr-[8px] underline'>Deposit hasn't arrived? Click here</a>
                <div className='flex flex-row items-center mt-[2px]'>
                  <div className="css-1g353mx mt-[5px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg></div>
                  <span className='text-[#707A8A] ml-[4px] text-sm'>Export Deposit History</span>
                </div>
              </div>
            </div>
            {/* table */}
            <div className='w-full h-[310px]'>
              <div className='w-full h-[40px] bg-[#f5f5f5] rounded-t-[8px] flex flex-row items-center text-[#707A8A] text-[12px] relative'>
                {loading && <Loading />}
                {/* time */}
                <div className='px-[16px] w-[236.13px]'>Time</div>
                {/* type */}
                <div className='px-[16px] w-[127.27px]'>Type</div>
                {/* deposit wallet */}
                <div className='px-[16px] w-[168.08px]'>Deposit wallet</div>
                <div className='w-[32px]'></div>
                {/* asset */}
                <div className='px-[16px] w-[127.27px]'>Asset</div>
                {/* amount */}
                <div className='px-[16px] w-[127.27px]'>Amount</div>
                {/* destination */}
                <div className='px-[16px] w-[236.13px]'>Destination</div>
                {/* txid */}
                <div className='px-[16px] w-[270.14px]'>TxID</div>
                {/* status */}
                <div className='px-[16px] w-[222.52px]'>Status</div>
              </div>
              {/* empty */}
              {loading ? '' :
                selectType === 'deposit' && selectTime === 'past30days' ?
                  <div className='w-full flex flex-row items-center text-[#474D57] text-[12px] border-b-[1px] border-[#eaecef]'>
                    {/* time */}
                    <div className='px-[16px] py-[22px] text-sm w-[236.13px] number'>
                      <img src={Date.src} alt="" />
                    </div>
                    {/* type */}
                    <div className='px-[16px] py-[22px] text-sm w-[127.27px]'>Deposit</div>
                    {/* deposit wallet */}
                    <div className='px-[16px] py-[22px] text-sm w-[168.08px]'>Spot Wallet</div>
                    <div className='w-[32px]'></div>
                    {/* asset */}
                    <div className='px-[16px] py-[22px] text-sm w-[127.27px]'>USDT</div>
                    {/* amount */}
                    <div className='px-[16px] py-[22px] text-sm w-[127.27px] number'>
                      <img src={Withdraw.src} alt="" className='mb-[1px]' />
                    </div>
                    {/* destination */}
                    <div className='px-[16px] py-[22px] text-sm w-[236.13px]'>
                      <img src={D1.src} alt="" className='mt-[1px] -ml-[1px]' />
                    </div>
                    {/* txid */}
                    <div className='px-[16px] py-[22px] text-sm w-[270.14px]'>
                      <img src={T1.src} alt="" />
                    </div>
                    {/* status */}
                    <div className='px-[16px] py-[22px] text-sm w-[222.52px]'>Completed</div>
                    {/* arrow */}
                    <img src={Arrow.src} alt="" className='ml-[14px]' />
                  </div>
                  :
                  // empty content
                  <div className='w-full h-[270px] flex flex-col items-center justify-center py-[24px]'>
                    <div className='w-[96px] h-[96px] mb-[6px] mr-[1px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" className="mirror css-1tx71v4"><path fillRule="evenodd" clipRule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fillRule="evenodd" clipRule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stopOpacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stopOpacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    </div>
                    <span className='text-[#707A8A] text-base'>No records found.</span>
                  </div>
              }
              {/* loading */}
              {/* data */}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='w-full flex justify-center pt-[48px]'>
        <div className='w-[1248px] h-[691px] flex flex-col px-[19px]'>
          <div className='w-full h-[606px] pb-[16px] flex flex-row'>
            {/* about us */}
            <div className='w-[189.44px] h-[590px] pr-[17px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500]'>
                About Us
              </div>
              <div className='flex flex-col'>
                {aboutUs.map(
                  (item, index) => (
                    <div className='mb-[12px] text-[#707A8A] text-sm leading-[1.5]' key={index}>{item}</div>
                  )
                )}
              </div>
            </div>
            {/* products */}
            <div className='w-[189.44px] h-[590px] pr-[16px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500]'>
                Products
              </div>
              <div className='flex flex-col'>
                {products.map(
                  (item, index) => (
                    <div className='mb-[12px] text-[#707A8A] text-sm leading-[1.5]' key={index}>{item}</div>
                  )
                )}
              </div>
            </div>
            {/* service */}
            <div className='w-[189.44px] h-[590px] pr-[16px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500]'>
                Service
              </div>
              <div className='flex flex-col'>
                {service.map(
                  (item, index) => (
                    <>
                      {item === 'P2P Merchant Application' ? <img src={Merchant.src} alt="" className='w-[162px] ml-[1px]' key='img-p2p' /> :
                        item === 'P2Pro Merchant Application' ?
                          <div className='flex flex-col mt-[14px] mb-[14px]' key="img-p2pro">
                            <img src={MerchantPro.src} alt="" className='w-[102px] mb-[1px] ml-[1px]' />
                            <img src={MerchantPro1.src} alt="" className='w-[102px] ml-[1px]' />
                          </div>
                          :
                          <div className='mb-[12px] text-[#707A8A] text-sm leading-[1.5]' key={index}>{item}</div>}
                    </>
                  )
                )}
              </div>
            </div>
            {/* support */}
            <div className='w-[189.44px] h-[590px] pr-[16px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500]'>
                Support
              </div>
              <div className='flex flex-col'>
                {support.map(
                  (item, index) => (
                    <>
                      {item === '24/7 Chat Support' ?
                        <img src={Chatsupport.src} alt="" className='h-auto w-[114px] mb-[13px] ml-[1px]' key="img-chat" />
                        : <div className='mb-[12px] text-[#707A8A] text-sm leading-[1.5]' key={index}>{item}</div>}
                    </>
                  )
                )}
              </div>
            </div>
            {/* learn */}
            <div className='w-[189.44px] h-[590px] pr-[16px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500]'>
                Learn
              </div>
              <div className='flex flex-col'>
                {learn.map(
                  (item, index) => (
                    <div className='mb-[12px] text-[#707A8A] text-sm leading-[1.5]' key={index}>{item}</div>
                  )
                )}
              </div>
            </div>
            {/* community */}
            <div className='w-[236.8px] h-[590px] pl-[16px] flex flex-col'>
              <div className='py-[16px] text-[#1e2329] text-[20px] font-[500] mb-[1px]'>
                Community
              </div>
              <div className='w-[220px] h-[139px] flex flex-row flex-wrap gap-x-[34px] ml-[1px]'>
                {community.map(
                  (item, index) => (
                    <img src={item.icon.src} alt="" key={index} className={`
                    ${item.title === 'Discord' ? 'w-[20px] h-[20px] mb-[1px]' :
                        item.title === 'Telegram' ? 'w-[20px] h-[20px] mb-[1px]' :
                          item.title === 'Tiktok' ? 'w-[16px] h-[18px] ml-[2px] mt-[1px] mb-[1px]' :
                            item.title === 'Facebook' ? 'w-[20px] h-[19.7px] ml-[2px]' :
                              item.title === 'Twitter' ? 'w-[18.33px] h-[17.88px] mt-[1px] ml-[1px]' :
                                item.title === 'Reddit' ? 'w-[20px] h-[20px] mb-[2px]' :
                                  item.title === 'Ins' ? 'w-[18px] h-[18px] ml-[1px] mt-[1px]' :
                                    item.title === 'Coinmarket' ? 'w-[20px] h-[20px] ml-[1px]' :
                                      item.title === 'Trademarket' ? 'w-[20px] h-[20px] mb-[2px]' :
                                        item.title === 'Youtube' ? 'w-[22px] h-[15.18px] mt-[3px] -ml-[1px]' :
                                          null
                      }
                    `} />
                  )
                )}
              </div>
            </div>
          </div>
          <div className='border-t-[1px] border-[#eaecef] flex flex-col justify-center items-center'>
            {/* <div className='text-[#707A8A] text-sm py-[32px] text-center'>Binance © 2023</div> */}
            <img src={Binance2023.src} alt="" className='my-[32px] w-[97px] -ml-[10px]' />
          </div>
        </div>
      </div>
    </main>
  )
}
