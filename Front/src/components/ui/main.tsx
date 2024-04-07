import React, {ReactNode} from 'react'

interface ContainerProps {
  children: ReactNode;
}

function Main({children}: ContainerProps ){
  return <> 
    <div className="w-full h-screen flex flex-col p-6 py-2">
      {children}
    </div>
  </>
}

export default Main
