import {useSelector} from "react-redux"
//hook to grab values of our state 
function Profile(){
    //to access user state 
    // const user = useSelector((state) => state.user.value )
    return (
        <div >
            <h1 className="text-2xl">Profile Page </h1>
            <p>Name: </p>
            <p>Age: </p>
            <p>Email: </p>
        </div>
    )
}
export default Profile; 