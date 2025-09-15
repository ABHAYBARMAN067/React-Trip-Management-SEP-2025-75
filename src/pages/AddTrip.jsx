import { useNavigate } from 'react-router-dom';
import TripForm from '../components/TripForm';

const AddTrip = () => {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Add New Trip</h1>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
                <TripForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default AddTrip;