import './Loader.css'

function Loader() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '.5rem'
        }}>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Loader