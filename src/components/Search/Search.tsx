interface Props {
  setSearch: (search: string) => void;
}

export default function Search({ setSearch }: Props) {
  return (
    <form className="bg-white shadow-md rounded px-4 pt-2 pb-2 mb-4">
      <div className="mb-4 flex justify-end">
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Name or author..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
