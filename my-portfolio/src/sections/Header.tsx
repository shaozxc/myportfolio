export const Header = () => {
  return(
    <div className="flex justify-center items-center bg-transparent fixed top-3 w-full z-40">
      <nav className="flex gap-1 p-1 border border-white/15 bg-white/15
 backdrop-blur rounded-full ">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  )
  // Change a to link 
};
