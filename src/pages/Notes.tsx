import AddNote from "@/components/AddNote";

export default function Notes() {
  return (
    <div className="flex flex-col flex-1 space-y-4">
      <h1 className="text-2xl font-bold select-none">Notes</h1>
      <AddNote />
    </div>
  );
}
