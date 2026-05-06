/**
 * User.jsx
 * ---------
 * A user card component displaying a user's avatar, name, and email.
 * Receives a userObj via props from the parent Userlist component.
 *
 * @param {Object} props.userObj - User data { name, email, image }
 *
 * Concepts: React Props, Destructuring, Tailwind CSS Shadows
 */

function User(props) {
    // Destructure the user object from props
    let { userObj } = props;

    return (
        <div className=" text-center p-5 shadow-2xl w-2xl mx-10 my-5">
            {/* User avatar image */}
            <img src={userObj.image} alt={userObj.name} />
            {/* User name */}
            <h2>{userObj.name}</h2>
            {/* User email */}
            <p>{userObj.email}</p>
        </div>
    );
}

export default User;