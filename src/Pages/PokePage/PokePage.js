import {useNavigate, useParams} from "react-router";

const Profile = () => {
    let navigate = useNavigate()
    let {id} = useParams()
    return (
        <div>
            <h1>pokemon's profile No. {id}</h1>
            <button
                onClick={() => {
                    navigate("/")
                }}
            >
                Close
            </button>
        </div>
    )
}

export default Profile;