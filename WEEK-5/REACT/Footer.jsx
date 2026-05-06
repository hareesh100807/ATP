/**
 * Footer.jsx
 * -----------
 * A footer component displaying location and contact information.
 * Uses Tailwind CSS for styling with flex layout.
 *
 * Concepts: React Functional Components, JSX, Tailwind CSS
 */

function Footer() {
    return (
        <div className="bg-gray-800 text-white p-4 mt-4  flex justify-around">
            {/* Location Section */}
            <div className=" flex gap-10">
                <p>Hyderabad</p>
                <p>Telangana, India</p>
            </div>
            {/* Contact Section */}
            <div>
                <p>Contact Us</p>
                <p>Phone: 1234567890</p>
                <p>Email: info@example.com</p>
            </div>
        </div>
    );
}

export default Footer;