import { useRef }from 'react'
import { BiLogIn, BiSearch } from "react-icons/bi";
import { useDispatch } from 'react-redux';

const search = () => {
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
   
    <form className='flex items-center bg-slate-300 justify-between px-4 rounded-lg' onSubmit={handleSubmit}>
     <input type='search' placeholder='Search word..' className='w-full py-2 bg-slate-300 outline-none '/> 
     <button type='submit' ><BiSearch size={25}/></button>
    </form>
  )
}

export default search