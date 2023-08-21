import { CgMenuGridR } from 'react-icons/cg'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { nav, rightNav, leftNav1, leftNav2, leftNav3, filter } from '@/utils/constants'
import { Search, DownLoad, Avatar, Alert, Down, Language, Divider, Night } from '@/public'
import ScrollBar from '@/components/ScrollBar'
export default function Home() {
  return (
    <main className="w-full bg-[#ffffff] relative">
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
                {item.title === 'Buy Crypto' ? <div className="css-xixtsp"><div data-bn-type="text" className="css-17hpqak">EUR</div></div> : ''}
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
      <div className='h-[3000px] w-full flex flex-row'>
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
        <div className='w-[1570px] h-[658px] p-[32px]'>
          <div className='w-full h-full flex flex-col'>
            <div className='mt-[8px] mb-[24px] flex flex-row justify-between'>
              <h1 className='text-[#1E2329] text-[32px] leading-[40px] font-[600]'>Transaction History</h1>
              <div className='flex flex-row items-center'>
                <div className="css-1g353mx mt-[5px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg></div>
                <span className='text-[#707A8A] ml-[4px] text-sm'>Export Transaction Records</span>
              </div>
            </div>
            {/* filter */}
            <nav className='w-full flex flex-row'>
              {filter.map((item, index) => (
                <a className="flex flex-row items-center mr-[20px]" key={index}>
                  {item}
                </a>
              ))}
            </nav>
            {/* click filter */}
            {/* table */}

          </div>
        </div>
      </div>
    </main>
  )
}
