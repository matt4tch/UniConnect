const Footer = () =>{
    return (
        <footer className="h-36 p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 border-black border-t-2">
    <span className="text-sm text-black sm:text-center">© 2023 <a href="https://github.com/matt4tch/UniConnect" className="hover:underline">UniConnect™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-black">
        <li>
            <a href="https://github.com/matt4tch/UniConnect" className="mr-4 hover:underline md:mr-6 ">Github Repository</a>
        </li>
    </ul>
</footer>
    )
}

export default Footer