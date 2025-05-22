
import { useState } from 'react';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/random-message');
            const data = await res.json();
            alert(data.message);
        } catch (err) {
            alert("Failed to fetch message from backend!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Contact Page</h2>
            <button onClick={handleClick} disabled={loading}>
                {loading ? 'Loading...' : 'Get Response from Backend'}
            </button>
        </div>
    );
};

export default Contact;
