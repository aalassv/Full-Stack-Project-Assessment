import  { useState }from 'react'
import RenderMainContent from "../MainContent/RenderMainContent"

function RenderButtons(props) {


const [votes, setVotes] = useState();

    return {votes, setVotes}
}

export default RenderButtons
