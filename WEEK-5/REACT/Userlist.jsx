/**
 * Userlist.jsx
 * -------------
 * A container component that holds an array of user data and
 * renders a User card for each one using Array.map().
 *
 * Concepts: Component Composition, Array.map(), Props, Keys
 */

import User from './User';

function Userlist(props) {
    // ─── User Data (State) ───────────────────────────────────
    // In a real app this would come from an API; here it's hardcoded
    const users = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Vivaan Patel",
    email: "vivaan.patel@example.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Aditya Singh",
    email: "aditya.singh@example.com",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Sai Kumar",
    email: "sai.kumar@example.com",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Rohan Reddy",
    email: "rohan.reddy@example.com",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta@example.com",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Isha Verma",
    email: "isha.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Priya Nair",
    email: "priya.nair@example.com",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    name: "Sneha Das",
    email: "sneha.das@example.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@example.com",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  }
    ];

    return (
        <div>
            {/* Map over users array and render a User card for each */}
            {users.map((userObj, index) =>
                <User key={index} userObj={userObj} />
            )}
        </div>
    );
}

export default Userlist;