import { useForm } from 'react-hook-form';

const TripForm = ({ onSubmit, initialData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {
            destination: '',
            startDate: '',
            endDate: '',
            price: '',
            status: 'PLANNED'
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                    type="text"
                    {...register('destination', { required: 'Destination is required' })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.destination && (
                    <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                    type="date"
                    {...register('startDate', { required: 'Start date is required' })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.startDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                    type="date"
                    {...register('endDate', { required: 'End date is required' })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.endDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                <input
                    type="number"
                    {...register('price', {
                        required: 'Price is required',
                        min: { value: 0, message: 'Price must be positive' }
                    })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.price && (
                    <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    {...register('status', { required: 'Status is required' })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="PLANNED">Planned</option>
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                </select>
                {errors.status && (
                    <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
                )}
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {initialData ? 'Update Trip' : 'Add Trip'}
                </button>
            </div>
        </form>
    );
};

export default TripForm;