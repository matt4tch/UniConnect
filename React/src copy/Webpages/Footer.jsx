const Footer = () =>{
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/matt4tch/UniConnect" className="hover:underline">UniConnect™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/matt4tch/UniConnect" className="mr-4 hover:underline md:mr-6 ">Github Repository</a>
        </li>
    </ul>
</footer>
    )
}

export default Footer