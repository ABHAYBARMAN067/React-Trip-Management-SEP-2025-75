import { useParams, useNavigate } from 'react-router-dom';
import TripForm from '../components/TripForm';
import { trips } from '../data/trips';

const EditTrip = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const trip = trips.find(t => t.id === parseInt(id));

    const handleSubmit = (data) => {
        navigate('/');
    };

    if (!trip) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Trip Not Found</h1>
                <p>The trip you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Edit Trip</h1>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
                <TripForm onSubmit={handleSubmit} initialData={trip} />
            </div>
        </div>
    );
};

export default EditTrip;