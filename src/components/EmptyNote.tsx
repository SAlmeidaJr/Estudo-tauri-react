import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { NotepadTextDashed, Undo2 } from "lucide-react";

export default function EmptyOutline() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <NotepadTextDashed />
        </EmptyMedia>
        <EmptyTitle>Sem notas salvas ainda</EmptyTitle>
        <EmptyDescription>
          Para criar uma nova nota, volte para a página anterior.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Undo2 />
      </EmptyContent>
    </Empty>
  );
}
