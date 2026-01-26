const TABS = [
  { id: "todo", label: "ToDo" },
  { id: "done", label: "Done" },
  { id: "trash", label: "Trash" },
];

const Tabs = ({ activeTab, onChange }) => {
  return (
    <>
      <div className="flex gap-5">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 rounded-full text-sm transition
            ${
              activeTab === tab.id
                ? "bg-slate-900 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
};
export default Tabs;
