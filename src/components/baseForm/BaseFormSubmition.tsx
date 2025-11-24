interface IBaseFormSubmitProps {
    children?: React.ReactNode;
}

export default function BaseFormSubmit({ children }: IBaseFormSubmitProps) {
    return <div className="p-4 bg-white rounded-lg">
        {children}
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </div>;
}
