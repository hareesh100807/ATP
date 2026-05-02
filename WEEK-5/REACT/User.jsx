function User(props){
    let {userObj}=props;
    return (<div className=" text-center p-5 shadow-2xl w-2xl mx-10 my-5">  
        <img src={userObj.image} alt={userObj.name} />
        <h2>{userObj.name}</h2>
        <p>{userObj.email}</p>
    </div>
    )
}
export default User;