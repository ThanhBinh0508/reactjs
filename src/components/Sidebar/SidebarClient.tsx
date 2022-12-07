import React from 'react'

type Props = {}

const SidebarClient = (props: Props) => {
    return (
        <div>
            <div className="d-flex ">
                <div className="max-w-[30%] mx-20 my-5 ">
                    <ul>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <a href="/" className='text-black mt-2 mx-2 '>Điện thoại</a>
                        </li>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <a href="/tablet" className='text-black mt-2 mx-2 '>Máy tính bảng</a>
                        </li>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="/accessories" className='text-black mt-2 mx-2 '>Laptop</a>
                        </li>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <a href="/audio" className='text-black mt-2 mx-2 '>Âm thanh</a>
                        </li>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="/accessories" className='text-black mt-2 mx-2 '>Đồng hồ</a>
                        </li>
                        <li className="d-flex items-center hover:bg-blue-300 rounded-md mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <a href="/audio" className='text-black mt-2 mx-2 '>Nhà thông minh</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarClient