type SimpsonDetails = {
    name: string;
    image: string;
}

function SimpsonViewer(props: SimpsonDetails) {
    const { name, image } = props;
  
    return (
    <div>
        <h1 className="simpson-name">{name}</h1>
        <img className="simpson-profile" src={image} alt="simpson-profile"></img>
    </div>
  )
}

export default SimpsonViewer
