function Error({ poruka }) {
    return (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 font-medium text-red-700">
            {poruka}
        </div>
    );
}

export default Error;