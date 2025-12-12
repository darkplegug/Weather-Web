export default function () {
    return (
        <div className="py-5 px-4 bg-yellow-400 flex justify-between items-center">
            <h3 className="text-3xl md:text-4xl font-bold">Cuaca</h3>
            <input
                type="text"
                placeholder="Search city..."
                className="p-2 px-4 rounded-3xl border-black text-black bg-white"
            />
        </div>
    );
}