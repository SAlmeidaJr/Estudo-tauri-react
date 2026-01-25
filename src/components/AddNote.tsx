import { JSX, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Pin } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import NotesCard from "./NotesCard";
import EmptyNote from "./EmptyNote";

export default function AddNote(): JSX.Element {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<[string, string][]>([]);

  return (
    <div>
      <Tabs defaultValue="add-notes">
        <TabsList>
          <TabsTrigger value="add-notes">Add Notes</TabsTrigger>
          <TabsTrigger value="see-notes">See Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="add-notes" className="grid w-full gap-2">
          <Input
            className="min-w-xl"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            className="min-w-xl h-32 resize-none"
            placeholder="Make a note"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            className="flex items-center gap-2 font-bold select-none cursor-pointer text-color"
            variant="outline"
            onClick={() => {
              toast.success("Salvo com sucesso");
              setNotes([...notes, [title, note]]);
              setNote("");
              setTitle("");
            }}
          >
            <Pin />
            Save
          </Button>
        </TabsContent>
        <TabsContent value="see-notes">
          <ScrollArea className="flex flex-col ">
            <p className="text-sm text-muted-foreground">
              {notes.length > 0 ? (
                notes.map(([title, note], idx) => (
                  <div key={idx} className="p-1">
                    <NotesCard
                      title={title}
                      content={note}
                      timeStamp={new Date()}
                    />
                  </div>
                ))
              ) : (
                <EmptyNote />
              )}
            </p>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
