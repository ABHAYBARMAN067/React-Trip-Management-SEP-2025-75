import { Link } from 'react-router-dom';

const TripList = ({ trips, onDelete, onSort }) => {
    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trips.map((trip) => (
                <div key={trip.id} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-bold text-blue-700">{trip.destination}</h2>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                                ${trip.status === 'PLANNED' ? 'bg-yellow-100 text-yellow-800' :
                                    trip.status === 'ONGOING' ? 'bg-green-100 text-green-800' :
                                        'bg-gray-100 text-gray-800'}`}>{trip.status}</span>
                        </div>
                        <div className="text-gray-600 mb-1"><b>Start:</b> {trip.startDate}</div>
                        <div className="text-gray-600 mb-1"><b>End:</b> {trip.endDate}</div>
                        <div className="text-gray-800 font-semibold mb-2">Price: ${trip.price}</div>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <Link to={`/edit/${trip.id}`} className="flex-1 text-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</Link>
                        <button
                            onClick={() => onDelete(trip.id)}
                            className="flex-1 text-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TripList;