function SlideHome(props){
    return (
        <div>
            <div className="slide">
                <img src={props.img} />
                <p className="slide-texto">
                    {props.texto}
                </p>
            </div>
        </div>
    )
}

export default SlideHome