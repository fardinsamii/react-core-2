export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="friends-box">
            <h3>Friend Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}