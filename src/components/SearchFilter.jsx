const SearchFilter = ({ searchTerm, setSearchTerm, status, setStatus }) => {
    return (
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Search by destination..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full sm:w-auto px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Status</option>
                    <option value="PLANNED">Planned</option>
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>
        </div>
    );
};

export default SearchFilter;
