import '../../css/Pagination.css';
import { useEffect, useState } from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const totalPages = Number.isInteger(nPages) && nPages > 0 ? nPages : 1;
    const currentPg = Number.isInteger(currentPage) && currentPage > 0 ? currentPage : 1;

    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

    const goToNextPage = () => {
        if (currentPg < totalPages) setCurrentPage(currentPg + 1);
    };

    const goToPrevPage = () => {
        if (currentPg > 1) setCurrentPage(currentPg - 1);
    };

    const pagesToShow = pageNumbers.filter(
        (pgNumber) => pgNumber >= currentPage - 2 && pgNumber <= currentPage + 2
    );

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <nav className='m-0 p-0 mt-5'>
            <ul className='row justify-content-center justify-content-md-end w-auto m-0 p-0 pagi flex-nowrap'>
                <li className=" col-3 m-0 p-0 w-auto pre">
                    <a className="text-decoration-none m-0 p-0 "
                        onClick={goToPrevPage}
                        href='#'>

                        Previous
                    </a>
                </li>
                {
                    viewportWidth > 800 ? (
                        pagesToShow.length > 0 ? (
                            pagesToShow.map(pgNumber => (
                                <li
                                    key={pgNumber}
                                    className={` ${currentPage === pgNumber ? 'activePG' : 'normal'} col-3 w-auto m-0 p-0`}
                                >
                                    <a
                                        onClick={() => setCurrentPage(pgNumber)}
                                        className='text-decoration-none m-0 p-0'
                                        href='#'
                                    >
                                        {pgNumber}
                                    </a>
                                </li>
                            ))
                        ) : (
                            <>
                                <li className="col-1 w-auto m-0 p-0">{"..."} </li>
                                <li
                                    className={`activePG col-3 w-auto m-0 p-0`}
                                >
                                    <a
                                        onClick={() => setCurrentPage(currentPage)}
                                        className='text-decoration-none m-0 p-0'
                                        href='#'
                                    >
                                        {currentPage}
                                    </a>
                                </li>
                                <li className="col-1 w-auto m-0 p-0">{"..."} </li>
                            </>
                        )
                    ) : (
                        <>
                            <li className="col-1 w-auto m-0 p-0">{"..."} </li>
                            <li
                                className={`activePG col-3 w-auto m-0 p-0`}
                            >
                                <a
                                    onClick={() => setCurrentPage(currentPage)}
                                    className='text-decoration-none m-0 p-0'
                                    href='#'
                                >
                                    {currentPage}
                                </a>
                            </li>
                            <li className="col-1 w-auto m-0 p-0">{"..."} </li>
                        </>
                    )}
                <li className=" col-3 m-0 p-0 w-auto nex">
                    <a className="text-decoration-none m-0 p-0 "
                        onClick={goToNextPage}
                        href='#'>

                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;