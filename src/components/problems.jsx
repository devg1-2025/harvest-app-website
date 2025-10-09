function Problems() {   
    return (
        <div className="pt-10 px-20 bg-green-800 pb-20 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Why the Harvest App?</h2>
            <h3 className="text-xl font-sm mb-8 text-center">Many churches struggle with...</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-green-950 ">
                <div className="border border-red-200 p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Lost contacts</h2>
                    <p className="text-neutral-600">New converts and first timers slip through the cracks without proper tracking.</p>
                </div>
                <div className="border border-red-200 p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Forgotten Follow-ups</h2>
                    <p className="text-neutral-600">Busy schedules lead to missed opportunities for discipleship</p>
                </div>
                <div className="border border-red-200 p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-200">
                    <h2 className="text-xl font-semibold mb-2">No Reminders</h2>
                    <p className="text-neutral-600">Important follow-up dates are easily forgotten</p>
                </div>
                
            </div>
        </div>
    );
}

export default Problems;