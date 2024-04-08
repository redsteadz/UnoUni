import React, {ReactNode} from 'react'

interface ContainerProps {
  children: ReactNode;
}

function Main({children}: ContainerProps ){
  return <> 
    <div className="w-full h-fit flex flex-col p-6 py-2 bg-gray-900 text-white">
      {children}
    </div>
  </>
}

export default Main
