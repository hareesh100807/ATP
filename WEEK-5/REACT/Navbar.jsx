/**
 * Navbar.jsx
 * -----------
 * A simple navigation bar component using Tailwind CSS.
 * Displays the site logo on the left and navigation links on the right.
 *
 * Concepts: React Functional Components, JSX, Tailwind CSS (Flexbox)
 */

function Navbar() {
    return (
        // Flex container: logo left, nav links right
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 ">
            <h1>LOGO</h1>
            {/* Navigation links */}
            <ul className="flex gap-10 text-lg font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;