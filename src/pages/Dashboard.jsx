import { useState, useEffect } from 'react';
import TripList from '../components/TripList';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import { trips as initialTrips } from '../data/trips';

const Dashboard = () => {
    const [trips, setTrips] = useState(initialTrips);
    const [filteredTrips, setFilteredTrips] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [status, setStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const ITEMS_PER_PAGE = 5;

    useEffect(() => {
        let result = [...trips];
        if (searchTerm) {
            result = result.filter(trip =>
                trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (status) {
            result = result.filter(trip => trip.status === status);
        }
        if (sortConfig.key) {
            result.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        setFilteredTrips(result);
        setCurrentPage(1);
    }, [trips, searchTerm, status, sortConfig]);

    const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE);
    const paginatedTrips = filteredTrips.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleSort = (key) => {
        setSortConfig(current => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this trip?')) {
            setTrips(trips.filter(trip => trip.id !== id));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">Trip Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Total Trips</h3>
                        <p className="text-2xl">{trips.length}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Average Price</h3>
                        <p className="text-2xl">
                            ${Math.round(trips.reduce((acc, trip) => acc + trip.price, 0) / trips.length)}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Planned Trips</h3>
                        <p className="text-2xl">
                            {trips.filter(trip => trip.status === 'PLANNED').length}
                        </p>
                    </div>
                </div>

                <SearchFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    status={status}
                    setStatus={setStatus}
                />
            </div>

            <TripList
                trips={paginatedTrips}
                onDelete={handleDelete}
                onSort={handleSort}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Dashboard;