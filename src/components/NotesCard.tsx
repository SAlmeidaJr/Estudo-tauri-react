import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CalendarDays } from "lucide-react";

type NotesCardProps = {
  title: string;
  content: string;
  timeStamp: Date;
};

export default function NotesCard({
  title,
  content,
  timeStamp,
}: NotesCardProps) {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground max-w-md wrap-break-word whitespace-pre-wrap w-full">
            {content}
          </p>
        </CardContent>
        <CardFooter className="flex h-5 items-center justify-start gap-2">
          <div>
            <p>
              {timeStamp.getDate()} / {timeStamp.getMonth() + 1} /
              {timeStamp.getFullYear()}
            </p>
          </div>
          <CalendarDays />
        </CardFooter>
      </Card>
    </div>
  );
}
