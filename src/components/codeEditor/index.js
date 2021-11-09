import React,{useState} from 'react'

const Index = () => {
    const [number, setnumber] = useState(0)
    return (
        <div>
            <button onClick={() => setnumber(Math.random)}>btn</button>
            <iframe frameborder="1" title='dw' srcDoc={`<h1>${number}</h1>`}>
                
            </iframe>
        </div>
    )
}

export default Index
