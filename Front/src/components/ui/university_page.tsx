import { useParams } from "react-router-dom"


function UnivPage () {
  const {_id} = useParams()
  return (
    <div>
      <h1>Univ {_id} </h1>
    </div>
  )
}


export default UnivPage
