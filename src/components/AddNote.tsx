import { JSX, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Pin } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function AddNote(): JSX.Element {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  return (
    <div>
      <Tabs defaultValue="add-notes">
        <TabsList>
          <TabsTrigger value="add-notes">Add Notes</TabsTrigger>
          <TabsTrigger value="see-notes">See Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="add-notes" className="grid w-full gap-2">
          <Textarea
            className="w-150 h-32 resize-none"
            placeholder="Make a note"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            className="flex items-center gap-2 font-bold select-none cursor-pointer text-color"
            variant="outline"
            onClick={() => {
              toast.success("Salvo com sucesso");
              setNotes([...notes, note]);
              setNote("");
            }}
          >
            <Pin />
            Save
          </Button>
        </TabsContent>
        <TabsContent value="see-notes">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground ">
              {notes.length > 0
                ? notes.map((note, index) => (
                    <div key={index}>
                      {index + 1}: {note}
                    </div>
                  ))
                : "No notes yet"}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
