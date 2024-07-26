import '../MainColumn/Pagination.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const totalPages = Number.isInteger(nPages) && nPages > 0 ? nPages : 1;
    const currentPg = Number.isInteger(currentPage) && currentPage > 0 ? currentPage : 1;
  
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  
    const goToNextPage = () => {
      if (currentPg < totalPages) setCurrentPage(currentPg + 1);
    };
  
    const goToPrevPage = () => {
      if (currentPg > 1) setCurrentPage(currentPg - 1);
    };
    return (
        <nav className='m-0 p-0 mt-5'>
            <ul className='row justify-content-end  w-auto m-0 p-0 pagi'>
                    <li className=" col-1 m-0 p-0 w-auto pre">
                        <a className="text-decoration-none m-0 p-0 "
                            onClick={goToPrevPage}
                            href='#'>

                            Previous
                        </a>
                    </li>
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            className={` ${currentPage == pgNumber ? 'active' : 'normal'} col-1 w-auto m-0 p-0`} >

                            <a onClick={() => setCurrentPage(pgNumber)}
                                className='text-decoration-none m-0 p-0'
                                href='#'>

                                {pgNumber}
                            </a>
                        </li>
                    ))}
                    <li className=" col-1 m-0 p-0 w-auto nex">
                        <a className="text-decoration-none m-0 p-0"
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